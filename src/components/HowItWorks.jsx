function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          How It Works
        </h2>

        <p className="text-slate-400 mb-12">
          Download Instagram Reels in just three simple steps.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-800 p-8">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Copy Link
            </h3>
            <p className="text-slate-400">
              Copy the Instagram Reel URL from the Instagram app or website.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800 p-8">
            <div className="text-4xl mb-4">📥</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Paste URL
            </h3>
            <p className="text-slate-400">
              Paste the Reel link into the downloader input box.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800 p-8">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Download
            </h3>
            <p className="text-slate-400">
              Click Download and save the Reel in HD quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;