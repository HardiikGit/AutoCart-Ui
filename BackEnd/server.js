const express = require("express");
const { MongoClient, GridFSBucket, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["https://auto-cart-ui.vercel.app", "mongodb://localhost:27017"],
    methods: ["GET", "POST"],
  })
);
app.use(express.json({ limit: "10mb" }));

const mongoURI =
  "mongodb+srv://AutoCartdb:Admin123@cluster0.peihb2y.mongodb.net/";
const dbName = "AutoCart";

let db, bucket;

MongoClient.connect(mongoURI, { useUnifiedTopology: true })
  .then((client) => {
    db = client.db(dbName);
    bucket = new GridFSBucket(db, { bucketName: "AutoParts" });
    console.log("//--- Connected to MongoDB ---//");
  })
  .catch((err) => console.error(err));

app.post("/upload", async (req, res) => {
  try {
    const { name, base64 } = req.body;
    if (!name || !base64) {
      return res.status(400).json({ error: "Name and base64 required" });
    }
    const buffer = Buffer.from(base64, "base64");
    const uploadStream = bucket.openUploadStream(name);
    uploadStream.end(buffer);
    uploadStream.on("finish", () => {
      res.status(201).json({
        message: "File uploaded successfully",
        fileId: uploadStream.id,
      });
    });
    uploadStream.on("error", (err) => {
      res.status(500).json({ error: err.message });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/files", async (req, res) => {
  try {
    const files = await db.collection("AutoParts.files").find({}).toArray();
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: err.message });
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
    res.status(400).json({ error: "Invalid File ID" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
