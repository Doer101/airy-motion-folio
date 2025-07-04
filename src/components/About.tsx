import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import avatar from '@/assets/avatar.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a keen eye for design and user experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto lg:mx-0 mb-8"
            >
              <img
                src={avatar}
                alt="Alex Johnson"
                className="w-full h-full object-cover rounded-2xl shadow-medium"
              />
              <div className="absolute inset-0 hero-gradient opacity-10 rounded-2xl"></div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-8 card-gradient shadow-soft border-0">
              <h3 className="text-2xl font-bold mb-4 text-gradient">My Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 5 years of experience in web development, I specialize in creating 
                modern, responsive applications using React, TypeScript, and Node.js. 
                My journey began with a Computer Science degree and evolved through 
                hands-on experience building products that users love.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I believe in writing clean, maintainable code and creating intuitive user 
                interfaces. When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or enjoying the great outdoors.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;