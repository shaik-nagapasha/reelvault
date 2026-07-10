const {
  downloadReel,
} = require("../services/instagramService");

const download = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "Instagram Reel URL is required",
      });
    }

    // 👇 ADD THIS
    console.log("A - Calling downloadReel");

    const result = await downloadReel(url);
    console.log("⭐⭐⭐⭐ AFTER AWAIT ⭐⭐⭐⭐");
   console.log(result);

    // 👇 ADD THIS
    console.log("B - downloadReel finished");
    console.log(result);

    const downloadUrl = `http://localhost:5000/downloads/${encodeURIComponent(
      result.filename
    )}`;

    // 👇 CHANGE THIS LOG
    console.log("C - Sending response");

    const response = {
      success: true,
      title: result.title,
      thumbnail: result.thumbnail,
      uploader: result.uploader,
      duration: result.duration,
      filename: result.filename,
      downloadUrl,
    };

    console.log(response);

    res.status(200).json(response);

    // 👇 CHANGE THIS LOG
    console.log("D - Response sent");

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.toString(),
    });
  }
};

module.exports = {
  downloadReel: download,
};