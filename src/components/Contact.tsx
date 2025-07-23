import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is just a demo form - no actual submission
    console.log("Form submitted (demo only)");
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to
            life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 40px 0 rgba(255,255,255,0.10)",
              }}
            >
              <Card className="p-8 bg-black border-0 shadow-2xl shadow-white/10 hover:shadow-white/20 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Let's Connect
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">@</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-400">alex.johnson@email.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">📱</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-gray-400">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="font-semibold mb-4 text-white">
                    Response Time
                  </h4>
                  <p className="text-gray-400 text-sm">
                    I typically respond to messages within 24 hours. For urgent
                    inquiries, feel free to call or reach out via LinkedIn.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 40px 0 rgba(255,255,255,0.10)",
            }}
          >
            <Card className="p-8 bg-black border-0 shadow-2xl shadow-white/10 hover:shadow-white/20 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="transition-smooth focus:shadow-white/20 bg-black border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="transition-smooth focus:shadow-white/20 bg-black border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="transition-smooth focus:shadow-white/20 bg-black border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    className="transition-smooth focus:shadow-white/20 bg-black border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="transition-smooth focus:shadow-white/20 bg-black border-white/10 text-white placeholder:text-gray-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-6 rounded-lg shadow-2xl hover:bg-black hover:text-white border border-white hover:border-white transition-smooth"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
