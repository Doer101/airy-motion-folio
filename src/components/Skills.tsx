import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 78 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 85 },
      { name: "Jest", level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies I love working with and continuously learning
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 40px 0 rgba(255,255,255,0.10)",
              }}
            >
              <Card className="p-8 bg-black border-0 shadow-2xl shadow-white/10 hover:shadow-white/20 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.2,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                          className="h-full bg-white rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="inline-block p-8 bg-black border-0 shadow-2xl shadow-white/10">
            <h3 className="text-xl font-bold mb-4 text-white">
              Always Learning
            </h3>
            <p className="text-gray-300 max-w-md">
              I'm constantly exploring new technologies and methodologies to
              stay current with industry trends and best practices. Currently
              diving deep into AI/ML integration and advanced React patterns.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
