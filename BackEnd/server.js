import express from "express";
import cors from "cors";
import multer from "multer";
import { MongoClient, GridFSBucket, ObjectId } from "mongodb";

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware ---
app.use(
  cors({ origin: "*", methods: ["GET", "POST", "DELETE"], credentials: true })
);
app.use(express.json());

// --- MongoDB Connection ---
const mongoURI = "mongodb://localhost:27017/";
const dbName = "AutoCartLocal";

let db, productsBucket, companyLogosBucket;

MongoClient.connect(mongoURI)
  .then((client) => {
    db = client.db(dbName);
    productsBucket = new GridFSBucket(db, { bucketName: "TrendingProducts" });
    companyLogosBucket = new GridFSBucket(db, { bucketName: "CompanyLogos" });
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("MongoDB Connection Error:", err));

const storage = multer.memoryStorage();
const upload = multer({ storage });

// --- Helper: Upload file buffer to GridFS ---
async function uploadToGridFS(file, bucket) {
  return new Promise((resolve, reject) => {
    const uploadStream = bucket.openUploadStream(file.originalname, {
      contentType: file.mimetype,
    });
    uploadStream.end(file.buffer);

    uploadStream.on("finish", () => resolve(uploadStream.id));
    uploadStream.on("error", reject);
  });
}

// --- ADD PRODUCT (with 2 images) ---
app.post(
  "/add-product",
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "hoverImage", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { name, price, category } = req.body;
      const mainImageFile = req.files["mainImage"]?.[0];
      const hoverImageFile = req.files["hoverImage"]?.[0];

      // Validate fields
      if (!name || !price || !category || !mainImageFile || !hoverImageFile) {
        return res
          .status(400)
          .json({ error: "All fields and both images are required!" });
      }

      // Upload both images to GridFS
      const mainImageId = await uploadToGridFS(mainImageFile, productsBucket);
      const hoverImageId = await uploadToGridFS(hoverImageFile, productsBucket);

      // Save product in MongoDB
      const result = await db.collection("TrendingProducts").insertOne({
        name,
        price: parseFloat(price),
        category,
        mainImageId,
        hoverImageId,
        createdAt: new Date(),
      });

      res.json({
        message: "Product added successfully!",
        productId: result.insertedId,
      });
    } catch (err) {
      console.error("Error in /add-product:", err);
      res.status(500).json({ error: "Server error" });
    }
  }
);


// --- GET all products ---
app.get("/products", async (req, res) => {
  try {
    const products = await db.collection("TrendingProducts").find({}).toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// --- GET image by ID (for Products) ---
app.get("/file/:id", async (req, res) => {
  try {
    const fileId = new ObjectId(req.params.id);
    const file = await db
      .collection("TrendingProducts.files")
      .findOne({ _id: fileId });

    if (!file) return res.status(404).json({ error: "File not found" });

    res.set("Content-Type", file.contentType || "image/jpeg");
    productsBucket.openDownloadStream(fileId).pipe(res);
  } catch (err) {
    res.status(400).json({ error: "Invalid File ID" });
  }
});

// --- Delete product + its images ---
app.delete("/product/:id", async (req, res) => {
  try {
    const productId = new ObjectId(req.params.id);
    const product = await db
      .collection("TrendingProducts")
      .findOne({ _id: productId });

    if (!product) return res.status(404).json({ error: "Product not found" });

    await productsBucket.delete(product.mainImageId);
    await productsBucket.delete(product.hoverImageId);
    await db.collection("TrendingProducts").deleteOne({ _id: productId });

    res.json({ message: "Product and images deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

// --- UPLOAD Company Logo ---
app.post("/upload-logo", upload.single("logo"), async (req, res) => {
  try {
    const { companyName } = req.body;
    const logoFile = req.file;

    if (!logoFile || !companyName) {
      return res
        .status(400)
        .json({ error: "Company name and logo file required!" });
    }

    const existingLogo = await db
      .collection("CompanyLogos")
      .findOne({ companyName });
    if (existingLogo) {
      await companyLogosBucket.delete(existingLogo.logoId);
      await db.collection("CompanyLogos").deleteOne({ _id: existingLogo._id });
      console.log(`Overwriting existing logo for ${companyName}`);
    }

    const logoId = await uploadToGridFS(logoFile, companyLogosBucket);

    const result = await db.collection("CompanyLogos").insertOne({
      companyName,
      logoId,
      uploadedAt: new Date(),
    });

    res.json({
      message: "Company logo uploaded successfully!",
      logoId: result.insertedId,
      fileId: logoId,
    });
  } catch (err) {
    console.error("Error in /upload-logo:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// --- GET all Company Logos (metadata) ---
app.get("/company-logos", async (req, res) => {
  try {
    const logos = await db.collection("CompanyLogos").find({}).toArray();
    res.json(
      logos.map((logo) => ({
        _id: logo._id,
        companyName: logo.companyName,
        logoFileId: logo.logoId,
        uploadedAt: logo.uploadedAt,
      }))
    );
  } catch (err) {
    console.error("Error in /company-logos:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// --- GET Company Logo FILE by GridFS ID ---
app.get("/company-logo-file/:id", async (req, res) => {
  try {
    const fileId = new ObjectId(req.params.id);
    const file = await db
      .collection("CompanyLogos.files")
      .findOne({ _id: fileId });

    if (!file)
      return res.status(404).json({ error: "Company logo file not found" });

    res.set("Content-Type", file.contentType || "image/jpeg");
    companyLogosBucket.openDownloadStream(fileId).pipe(res);
  } catch (err) {
    console.error("Error in /company-logo-file:", err);
    res.status(400).json({ error: "Invalid Company Logo File ID" });
  }
});

// Delete the Company Logo
app.delete("/company-logo/:id", async (req, res) => {
  try {
    console.log("DELETE LOGO API CALLED:", req.params.id);

    const logoDbId = new ObjectId(req.params.id);
    const logo = await db.collection("CompanyLogos").findOne({ _id: logoDbId });

    if (!logo) {
      return res
        .status(404)
        .json({ error: "Company logo not found in database" });
    }

    // Try deleting the GridFS file safely
    try {
      const logoFileId =
        typeof logo.logoId === "string"
          ? new ObjectId(logo.logoId)
          : logo.logoId;

      await companyLogosBucket.delete(logoFileId);
      console.log("Deleted GridFS file:", logoFileId);
    } catch (err) {
      console.warn("Skipping GridFS delete:", err.message);
    }

    // Delete database entry
    await db.collection("CompanyLogos").deleteOne({ _id: logoDbId });

    res.json({ message: "Company logo and its file deleted successfully!" });
  } catch (err) {
    console.error("Error in /company-logo/:id DELETE:", err);
    res.status(500).json({
      error: err.message || "Server error during logo deletion",
    });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
