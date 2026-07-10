export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Contact Us
        </h2>

        <p className="text-slate-400 mb-8">
          Have questions, feedback, or business inquiries?
        </p>

        <a
          href="mailto:hello@reelvault.online"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold transition"
        >
          Email Us
        </a>
      </div>
    </section>
  );
}