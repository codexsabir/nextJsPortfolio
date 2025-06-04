import { motion } from 'framer-motion';
import { fadeIn, slideInFromLeft, slideInFromRight, slideInFromBottom } from '../utils/animations';
import { AnimatedText } from '../utils/animations';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover opacity-20"
      >
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <AnimatedText text="Hi, I'm Sabir Ud Din" className="block" />
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 gradient-text">
              <AnimatedText text="Software Engineer" className="block" />
            </h2>
            <p className="text-lg mb-8 text-slate-300 max-w-lg">
              I love turning ideas into awesome websites with 3+ years of experience. Let's connect and solve problems together.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/c0dexs4bir/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-cyan-600 text-cyan-400 hover:bg-cyan-900/30 rounded-lg font-medium transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/30">
              <img
                src="/assets/profile.jpg"
                alt="Sabir Ud Din"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/70"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromBottom}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce flex flex-col items-center">
            <p className="mb-2 text-sm text-slate-400">Scroll Down</p>
            <svg
              className="w-6 h-6 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;