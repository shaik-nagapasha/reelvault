require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const downloadRoutes = require("./routes/downloadRoutes");

const app = express();

// Serve public folder
app.use(express.static(path.join(__dirname, "public")));

// ✅ NEW: Serve downloaded videos
app.use("/downloads", express.static(path.join(__dirname, "downloads")));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 ReelVault Backend Running");
});

app.use("/api/download", downloadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});