import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Let's Build Something Amazing</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Ready to start your next project? I'm always excited to work on new challenges 
              and collaborate with creative minds.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full p-4 transition-smooth hover:shadow-soft"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                <Github className="h-6 w-6" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full p-4 transition-smooth hover:shadow-soft"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Alex Johnson. Built with React, TypeScript, and lots of ☕
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;