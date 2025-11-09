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

let db, bucket;

MongoClient.connect(mongoURI)
  .then((client) => {
    db = client.db(dbName);
    bucket = new GridFSBucket(db, { bucketName: "Products" });
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("MongoDB Connection Error:", err));

const storage = multer.memoryStorage();
const upload = multer({ storage });

// --- Helper: Upload file buffer to GridFS ---
async function uploadToGridFS(file) {
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
      const { name, price, review } = req.body;
      const mainImageFile = req.files["mainImage"]?.[0];
      const hoverImageFile = req.files["hoverImage"]?.[0];

      if (!name || !price || !review || !mainImageFile || !hoverImageFile) {
        return res
          .status(400)
          .json({ error: "All fields and both images required!" });
      }

      const mainImageId = await uploadToGridFS(mainImageFile);
      const hoverImageId = await uploadToGridFS(hoverImageFile);

      const result = await db.collection("Products").insertOne({
        name,
        price: parseFloat(price),
        review,
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
    const products = await db.collection("Products").find({}).toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// --- GET image by ID ---
app.get("/file/:id", async (req, res) => {
  try {
    const fileId = new ObjectId(req.params.id);
    const file = await db.collection("Products.files").findOne({ _id: fileId });

    if (!file) return res.status(404).json({ error: "File not found" });

    res.set("Content-Type", file.contentType || "image/jpeg");
    bucket.openDownloadStream(fileId).pipe(res);
  } catch (err) {
    res.status(400).json({ error: "Invalid File ID" });
  }
});

// --- Delete product + its images ---
app.delete("/product/:id", async (req, res) => {
  try {
    const productId = new ObjectId(req.params.id);
    const product = await db.collection("Products").findOne({ _id: productId });

    if (!product) return res.status(404).json({ error: "Product not found" });

    await bucket.delete(product.mainImageId);
    await bucket.delete(product.hoverImageId);
    await db.collection("Products").deleteOne({ _id: productId });

    res.json({ message: "Product and images deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
