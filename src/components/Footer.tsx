import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Let's Build Something Amazing
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Ready to start your next project? I'm always excited to work on
              new challenges and collaborate with creative minds.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0 8px 40px 0 rgba(255,255,255,0.10)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full p-4 transition-smooth hover:shadow-2xl hover:shadow-white/20 border-white text-white bg-black hover:bg-white hover:text-black"
                onClick={() => window.open("https://github.com", "_blank")}
              >
                <Github className="h-6 w-6" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0 8px 40px 0 rgba(255,255,255,0.10)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full p-4 transition-smooth hover:shadow-2xl hover:shadow-white/20 border-white text-white bg-black hover:bg-white hover:text-black"
                onClick={() => window.open("https://linkedin.com", "_blank")}
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400">
              © {currentYear} Alex Johnson. Built with React, TypeScript, and
              lots of ☕
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
