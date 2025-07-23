import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md"
      style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-2xl font-bold cursor-pointer select-none text-white drop-shadow"
            onClick={() => scrollToSection("home")}
          >
            PORTFOLIO
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                onClick={() => scrollToSection(item)}
                className="capitalize font-medium text-base px-3 py-1 text-white transition-all duration-200 relative group"
                style={{
                  backgroundClip: "initial",
                  WebkitTextFillColor: "initial",
                }}
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-focus:w-full z-0"></span>
              </Button>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="text-sm px-3 py-1 text-black transition-all duration-200 relative group"
              style={{
                backgroundClip: "initial",
                WebkitTextFillColor: "initial",
              }}
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-focus:w-full z-0"></span>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
