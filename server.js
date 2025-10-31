import express from "express";
import { MongoClient, GridFSBucket, ObjectId } from "mongodb";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// --- Body parser ---
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

// --- MongoDB setup ---
const mongoURI =
  "mongodb+srv://AutoCartdb:Admin123@cluster0.peihb2y.mongodb.net/";
const dbName = "AutoCart";
let db, bucket;

MongoClient.connect(mongoURI)
  .then((client) => {
    db = client.db(dbName);
    bucket = new GridFSBucket(db, { bucketName: "AutoParts" });
    console.log("Connected with DataBase....");
  })
  .catch((err) => console.error(err));

// Add Product
app.post("/add-product", async (req, res) => {
  try {
    const { name, price, base64 } = req.body;

    if (!name || !price || !base64) {
      return res
        .status(400)
        .json({ error: "Product name, price and image (base64) required" });
    }

    const buffer = Buffer.from(base64, "base64");
    const uploadStream = bucket.openUploadStream(name);
    uploadStream.end(buffer);

    uploadStream.once("finish", async () => {
      const fileId = uploadStream.id;

      // Insert product in Products collection
      const result = await db.collection("Products").insertOne({
        name,
        price: parseFloat(price),
        imageId: fileId,
        createdAt: new Date(),
      });

      res.status(201).json({
        message: "Product added successfully!",
        productId: result.insertedId,
        imageId: fileId,
      });
    });

    uploadStream.once("error", (err) => {
      console.error("Upload error:", err);
      res.status(500).json({ error: "Image upload failed" });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET all Products
app.get("/products", async (req, res) => {
  try {
    const products = await db.collection("Products").find({}).toArray();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET single Product with Image
app.get("/product/:id", async (req, res) => {
  try {
    const productId = new ObjectId(req.params.id);
    const product = await db.collection("Products").findOne({ _id: productId });

    if (!product) return res.status(404).json({ error: "Product not found" });

    const fileId = product.imageId;
    const file = await db
      .collection("AutoParts.files")
      .findOne({ _id: fileId });

    if (!file) return res.status(404).json({ error: "Image not found" });

    res.set("Content-Type", file.contentType || "image/png");
    bucket.openDownloadStream(fileId).pipe(res);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Invalid Product ID" });
  }
});

// Delete Product (and its image)
app.delete("/product/:id", async (req, res) => {
  try {
    const productId = new ObjectId(req.params.id);
    const product = await db.collection("Products").findOne({ _id: productId });

    if (!product) return res.status(404).json({ error: "Product not found" });

    // Delete image from GridFS
    await bucket.delete(product.imageId);

    // Delete product from collection
    await db.collection("Products").deleteOne({ _id: productId });

    res.json({ message: "🗑️ Product and image deleted successfully" });
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(400).json({ error: "Invalid Product ID or delete failed" });
  }
});

// Existing routes kept for images
app.get("/files", async (req, res) => {
  try {
    const files = await db.collection("AutoParts.files").find({}).toArray();
    res.json(files);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/file/:id", async (req, res) => {
  try {
    const fileId = new ObjectId(req.params.id);
    const file = await db
      .collection("AutoParts.files")
      .findOne({ _id: fileId });

    if (!file) return res.status(404).json({ error: "File not found" });

    res.set("Content-Type", file.contentType || "image/png");
    bucket.openDownloadStream(fileId).pipe(res);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Invalid File ID" });
  }
});

app.delete("/file/:id", async (req, res) => {
  try {
    const fileId = new ObjectId(req.params.id);
    const file = await db
      .collection("AutoParts.files")
      .findOne({ _id: fileId });

    if (!file) return res.status(404).json({ error: "File not found" });

    await bucket.delete(fileId);
    res.json({ message: `File '${file.filename}' deleted successfully!` });
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(400).json({ error: "Invalid File ID or delete failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}......`);
});
