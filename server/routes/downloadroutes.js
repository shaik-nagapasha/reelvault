const express = require("express");
const router = express.Router();

const { downloadReel } = require("../controllers/downloadController");

router.post("/", downloadReel);

module.exports = router;