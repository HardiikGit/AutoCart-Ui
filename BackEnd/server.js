import express from "express";
import { MongoClient, GridFSBucket, ObjectId } from "mongodb";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:3000",
  "https://auto-cart-ui.vercel.app",
];
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST"],
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

MongoClient.connect(mongoURI, { useUnifiedTopology: true })
  .then((client) => {
    db = client.db(dbName);
    bucket = new GridFSBucket(db, { bucketName: "AutoParts" });
    console.log("Connected with DataBase....");
  })
  .catch((err) => console.error(err));

// --- Routes ---

// Upload car image
app.post("/upload", async (req, res) => {
  try {
    const { name, base64 } = req.body;

    if (!name || !base64) {
      return res.status(400).json({ error: "Name and base64 required" });
    }

    const buffer = Buffer.from(base64, "base64");
    const uploadStream = bucket.openUploadStream(name);

    uploadStream.end(buffer);

    uploadStream.once("finish", () => {
      res.status(201).json({
        message: "Car added successfully",
        fileId: uploadStream.id,
      });
    });

    uploadStream.once("error", (err) => {
      console.error(err);
      res.status(500).json({ error: "Upload failed" });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all cars (files)
app.get("/files", async (req, res) => {
  try {
    const files = await db.collection("AutoParts.files").find({}).toArray();
    res.json(files);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get single car image by ID
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}......`);
});

