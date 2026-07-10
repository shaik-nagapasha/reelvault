import { motion } from "framer-motion";
import Downloader from "./Downloader";

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center text-center px-6 pt-36 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight max-w-4xl"
      >
        Download Instagram
        <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Reels Instantly
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
       className="mt-6 max-w-3xl text-lg md:text-xl text-slate-400"
      >
        Paste an Instagram Reel link and download videos in HD quality.
        Fast, free, and no login required.
      </motion.p>
      <div className="mt-12 w-full max-w-3xl">
  <Downloader />
</div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-sm text-gray-500"
      >
        ⚡ No Login Required • HD Quality • 100% Free
      </motion.div>
    </section>
  );
}

export default Hero;