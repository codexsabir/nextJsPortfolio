import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-slate-900/80">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-slate-400">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaEnvelope className="text-cyan-400 mr-3" />
                <a href="mailto:codexsabir@gmail.com" className="hover:text-cyan-400 transition-colors">
                  codexsabir@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-cyan-400 mr-3" />
                <a href="tel:+923019866811" className="hover:text-cyan-400 transition-colors">
                  (+92) 3019866811
                </a>
              </li>
              <li className="flex items-center">
                <svg className="text-cyan-400 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>26000, Kohat, Pakistan</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Connect With Me</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/c0dexs4bir/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <FaGithub className="text-xl" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500"
        >
          <p>© {new Date().getFullYear()} Sabir Ud Din. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;