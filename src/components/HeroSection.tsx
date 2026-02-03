import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProblemSolutionIllustration from "./ProblemSolutionIllustration";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <motion.h1 
              className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              PERPETUAL BETA.
              <br />
              WORKFLOW
              <br />
              EVOLVED.
            </motion.h1>

            <motion.div 
              className="space-y-1 text-lg md:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>AI Innovation Lab.</p>
              <p>Understanding real problems.</p>
              <p>Solving them forever.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="text-base font-bold tracking-wide px-8 py-6 h-auto"
              >
                EXPLORE THE LAB
              </Button>
            </motion.div>
          </div>

          {/* Right column - Illustration */}
          <motion.div 
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ProblemSolutionIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;