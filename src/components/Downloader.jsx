
import { useState } from "react";
import axios from "axios";

function Downloader() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(null);
  const [error, setError] = useState("");

const handleDownload = async () => {
  if (!url.trim()) {
    setError("Please enter a Reel URL");
    return;
  }

  setLoading(true);
  setError("");
  setVideo(null);

  try {
    const res = await axios.post(
      "http://localhost:5000/api/download",
      { url },
      { timeout: 120000 }
    );

    // Show preview card
    setVideo(res.data);

    // Automatically start download
    const a = document.createElement("a");
    a.href = res.data.downloadUrl;
    a.download = res.data.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

  } catch (err) {
    console.error(err);
    setError(
      err.response?.data?.message ||
      err.message ||
      "Download failed"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Paste Instagram Reel URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleDownload();
          }}
          className="flex-1 rounded-2xl border border-slate-700 bg-slate-900 px-6 py-4 text-white outline-none transition focus:border-cyan-400"
        />

      <button
       type="button"
       onClick={handleDownload}
        disabled={loading}
        className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white"
         >
       {loading ? "Downloading..." : "Download"}
      </button>
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
          {error}
        </div>
      )}

      {video && (
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="h-72 w-full object-cover"
          />

          <div className="space-y-4 p-6">
            <h2 className="text-2xl font-bold text-white">
              {video.title}
            </h2>

            <p className="text-slate-400">
              Uploaded by{" "}
              <span className="font-medium text-white">
                {video.uploader}
              </span>
            </p>

            <a
              href={video.downloadUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
            >
              ⬇ Download Video
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Downloader;