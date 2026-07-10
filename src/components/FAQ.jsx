export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-950 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 text-left">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white">
              Is ReelVault free?
            </h3>
            <p className="text-slate-400 mt-2">
              Yes, ReelVault is completely free to use.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white">
              Do I need an account?
            </h3>
            <p className="text-slate-400 mt-2">
              No. Just paste the Instagram Reel URL and download instantly.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white">
              Is the download in HD?
            </h3>
            <p className="text-slate-400 mt-2">
              We provide the highest quality available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}