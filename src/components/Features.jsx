import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Download Instagram Reels in just a few seconds with our optimized servers.",
  },
  {
    icon: "🎥",
    title: "HD Quality",
    description:
      "Get the highest quality available without losing resolution.",
  },
  {
    icon: "🔒",
    title: "No Login Required",
    description:
      "Simply paste the Reel URL and download instantly. No account needed.",
  },
  {
    icon: "📱",
    title: "Works Everywhere",
    description:
      "Compatible with desktop, Android, iPhone, tablets, and all modern browsers.",
  },
  {
    icon: "💎",
    title: "100% Free",
    description:
      "Unlimited downloads with no subscriptions or hidden charges.",
  },
  {
    icon: "🚀",
    title: "Always Available",
    description:
      "Reliable service with high uptime so you can download anytime.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-900 py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-white"
        >
          Why Choose ReelVault?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 mt-6 max-w-2xl mx-auto"
        >
          Everything you need to download Instagram Reels quickly,
          securely and in HD quality.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-2xl border border-slate-700 bg-slate-800/60 backdrop-blur-lg p-8 transition-all hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mt-6">
                {feature.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}