import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatar from "@/assets/avatar.jpg";
import MagnetLines from "./MagnetLines";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="mb-12 w-full max-w-xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-200 font-light">
            Minimalist developer focused on clarity, simplicity, and smooth user
            experiences.
          </p>
        </motion.div>
        {/* Two-column layout starts here */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
          {/* Left: MagnetLines */}
          <div className="flex-1 flex justify-center items-center">
            <MagnetLines
              rows={9}
              columns={9}
              containerSize="54vmin" // 10% smaller than 60vmin
              lineColor="#efefef"
              lineWidth="0.8vmin"
              lineHeight="5vmin"
              baseAngle={-10}
              style={{ margin: "2rem auto", transform: "rotate(-8deg)" }}
            />
          </div>
          {/* Right: Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-xl"
          >
            <Card className="border-0 bg-black shadow-2xl shadow-white/10">
              <CardHeader className="flex flex-col items-center gap-4 p-8 pb-0">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col items-center"
                >
                  <Avatar className="w-28 h-28 mb-4 grayscale border border-white/10 shadow-md">
                    <AvatarImage
                      src={avatar}
                      alt="Avatar"
                      className="object-cover grayscale"
                    />
                    <AvatarFallback>?</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-2xl font-semibold text-white">
                    Alex Johnson
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-6 p-8 pt-4">
                <p className="text-base text-gray-200 text-center max-w-md">
                  I build clean, maintainable web apps with a focus on user
                  experience and performance. I believe less is more—minimal
                  interfaces, clear typography, and subtle motion.
                </p>
                <div className="flex gap-8 justify-center mt-2">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">50+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest">
                      Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">5+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest">
                      Years
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
