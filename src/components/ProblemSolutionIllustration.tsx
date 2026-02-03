import { motion } from "framer-motion";

const ProblemSolutionIllustration = () => {
  return (
    <div className="relative w-full h-full grid-pattern rounded-lg overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-100" />
      
      {/* Problem Label */}
      <motion.div 
        className="absolute top-4 right-4 text-sm font-medium text-foreground tracking-wide"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        PROBLEM
      </motion.div>

      {/* Solution Label */}
      <motion.div 
        className="absolute bottom-4 right-4 text-sm font-medium text-foreground tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        SOLUTION
      </motion.div>

      {/* SVG Illustration */}
      <svg 
        viewBox="0 0 400 400" 
        className="w-full h-full"
        fill="none"
      >
        {/* Problem - Tangled scribble */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Main tangled lines */}
          <motion.path
            d="M200 80 C230 60, 260 100, 240 130 C220 160, 180 140, 160 120 C140 100, 170 70, 200 80 C230 90, 250 120, 230 150 C210 180, 170 160, 150 140 C130 120, 160 80, 190 90 C220 100, 240 140, 220 170 C200 200, 160 180, 140 150"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          />
          <motion.path
            d="M180 100 C210 80, 250 110, 230 140 C210 170, 170 150, 150 130 C130 110, 160 80, 190 90 C220 100, 240 130, 220 160 C200 190, 160 170, 140 140"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.path
            d="M220 90 C250 70, 280 110, 260 140 C240 170, 200 160, 180 140 C160 120, 180 90, 210 100 C240 110, 260 140, 240 170"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          />
          
          {/* Dots on the tangle */}
          <motion.circle
            cx="200"
            cy="80"
            r="8"
            fill="hsl(var(--accent))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
          />
          <motion.circle
            cx="240"
            cy="130"
            r="8"
            fill="hsl(var(--accent))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3, type: "spring" }}
          />
          <motion.circle
            cx="170"
            cy="150"
            r="8"
            fill="hsl(var(--accent))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, type: "spring" }}
          />
        </motion.g>

        {/* Dashed arrow connecting problem to solution */}
        <motion.path
          d="M260 160 C300 200, 320 260, 300 300"
          stroke="hsl(var(--foreground))"
          strokeWidth="2"
          strokeDasharray="8 6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        {/* Solution - Smooth wave */}
        <motion.path
          d="M260 300 C280 280, 300 320, 320 300 C340 280, 360 340, 380 320"
          stroke="hsl(var(--primary))"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        />
      </svg>
    </div>
  );
};

export default ProblemSolutionIllustration;