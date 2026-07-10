const { spawn } = require("child_process");
const path = require("path");

const downloadReel = (url) => {
  return new Promise((resolve, reject) => {
    const cookiesPath = path.join(__dirname, "..", "cookies.txt");
    const downloadPath = path.join(__dirname, "..", "downloads");
    const outputTemplate = path.join(downloadPath, "%(title)s.%(ext)s");

    // -------------------------
    // STEP 1: Get Metadata
    // -------------------------

    const metadataProcess = spawn("yt-dlp", [
      "--cookies",
      cookiesPath,
      "--dump-single-json",
      url,
    ]);

    let metadataOutput = "";
    let metadataError = "";

    metadataProcess.stdout.on("data", (data) => {
      metadataOutput += data.toString();
    });

    metadataProcess.stderr.on("data", (data) => {
      metadataError += data.toString();
    });

    metadataProcess.on("close", (code) => {
      if (code !== 0) {
        return reject(metadataError);
      }

      let metadata;

      try {
        metadata = JSON.parse(metadataOutput);
      } catch {
        return reject("Unable to parse metadata.");
      }

      // -------------------------
      // STEP 2: Download Video
      // -------------------------

      const downloadProcess = spawn("yt-dlp", 
      [
        "--cookies",
        cookiesPath,
       "-S",
       "vcodec:h264,res,acodec:m4a",
       "-f",
       "bv*+ba/b",
       "--merge-output-format",
       "mp4",
       "-o",
       outputTemplate,
       url,
      ]);

      downloadProcess.stdout.on("data", (data) => {
        console.log(data.toString());
      });

      downloadProcess.stderr.on("data", (data) => {
        console.log(data.toString());
      });

    downloadProcess.on("close", (downloadCode) => {
  console.log("DOWNLOAD PROCESS CLOSED:", downloadCode);

  if (downloadCode !== 0) {
    return reject("Download failed.");
  }

  console.log("1 - About to resolve");

  const result = {
    title: metadata.title,
    thumbnail: metadata.thumbnail,
    uploader: metadata.uploader,
    duration: metadata.duration,
    filename: `${metadata.title}.mp4`,
  };

  console.log("2 - Result created");
  console.log(result);

  resolve(result);

  console.log("3 - Resolve called");
});
    });
  });
};

module.exports = {
  downloadReel,
};