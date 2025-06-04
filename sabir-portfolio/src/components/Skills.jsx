import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animations';
import { skills } from '../constants/data';

const Skills = () => {
  const skillCategories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Skills</h2>
          <p className="max-w-2xl mx-auto text-slate-400">
            Here are the technologies I've worked with and mastered over the years.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category}
              variants={fadeIn}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-slate-800 rounded-full text-sm"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;