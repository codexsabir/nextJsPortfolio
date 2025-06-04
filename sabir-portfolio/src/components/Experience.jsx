import { motion } from 'framer-motion';
import { fadeIn, slideInFromLeft, slideInFromRight } from '../utils/animations';
import { experiences } from '../constants/data';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Work Experience</h2>
          <p className="max-w-2xl mx-auto text-slate-400">
            My professional journey and contributions to various organizations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-slate-700"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
              viewport={{ once: true }}
              className={`mb-8 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2 px-4">
                <div
                  className={`p-6 rounded-lg glass-effect ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 rounded-full bg-cyan-500 absolute left-3 md:left-1/2 transform -translate-x-1/2"></div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                  </div>
                  <div className="flex items-center text-slate-400 mb-4">
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.date}</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;