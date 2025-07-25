import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      <div className="container mx-auto px-4 relative z-10 flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-0">
        {/* Left: Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="text-white">Alex Johnson</span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-gray-200 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer & UI/UX Designer
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build clean, functional web applications with a focus on clarity,
            performance, and user experience. Minimal interfaces, clear
            typography, and subtle motion are my signature.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="font-semibold px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow transition-all duration-300 w-full sm:w-auto bg-white text-black border border-white hover:bg-gray-100 hover:text-black focus:ring-2 focus:ring-white/20"
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="px-6 sm:px-8 py-4 sm:py-6 rounded-full border border-white text-white bg-black hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-white/20 font-semibold w-full sm:w-auto"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <img
            src={avatar}
            alt="Web Developer"
            className="w-56 h-56 sm:w-72 sm:h-72 lg:w-[28rem] lg:h-[28rem] object-cover rounded-full shadow-2xl border-4 border-white/10 bg-white/5 opacity-90 lg:opacity-80 pointer-events-none select-none transition-all duration-500"
            style={{ filter: "grayscale(20%) blur(0.5px)" }}
          />
        </div>

        {/* Down Arrow (absolute, always at bottom center) */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
            whileHover={{ scale: 1.2 }}
          >
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-white/70 hover:text-white transition-smooth" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
