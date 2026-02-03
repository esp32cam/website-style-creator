import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProblemSolutionIllustration from "./ProblemSolutionIllustration";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-8 lg:px-12 pt-20 pb-12">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-4 lg:gap-8 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8 relative z-20">
            <motion.h1
              className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] 2xl:text-[7.5rem] text-foreground leading-[1.05]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="block whitespace-nowrap">PERPETUAL BETA</span>
              <span className="block">WORKFLOW EVOLVED.</span>
            </motion.h1>

            <motion.div
              className="space-y-1 text-lg md:text-xl text-muted-foreground font-medium"
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
                variant="hero"
                size="xl"
                onClick={() => {
                  document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                EXPLORE THE LAB
              </Button>
            </motion.div>
          </div>

          {/* Right column - Illustration */}
          <motion.div
            className="relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[420px] w-full max-w-[500px] ml-auto"
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