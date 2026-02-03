import { motion } from "framer-motion";

const ProblemSolutionIllustration = () => {
  return (
    <div className="relative w-full h-full bg-card rounded-lg overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Problem Label */}
      <motion.div 
        className="absolute top-6 right-6 text-sm font-bold text-foreground tracking-widest uppercase"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        PROBLEM
      </motion.div>

      {/* Solution Label */}
      <motion.div 
        className="absolute bottom-6 right-6 text-sm font-bold text-foreground tracking-widest uppercase"
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
        {/* Glow filter for solution line */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="12" result="blur1"/>
            <feGaussianBlur stdDeviation="6" result="blur2"/>
            <feMerge>
              <feMergeNode in="blur1"/>
              <feMergeNode in="blur2"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Problem - Tangled scribble (more chaotic) */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Complex tangled lines */}
          <motion.path
            d="M160 80 C200 60, 240 80, 230 120 C220 160, 170 150, 150 120 C130 90, 180 60, 210 90 C240 120, 220 160, 180 140 C140 120, 170 80, 200 100"
            stroke="hsl(var(--accent))"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />
          <motion.path
            d="M140 100 C180 70, 230 90, 220 130 C210 170, 160 160, 140 130 C120 100, 160 70, 195 95 C230 120, 210 160, 170 145"
            stroke="hsl(var(--accent))"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
          <motion.path
            d="M170 70 C210 50, 250 80, 235 125 C220 170, 165 155, 145 125 C125 95, 170 60, 205 85 C240 110, 225 155, 185 140"
            stroke="hsl(var(--accent))"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.55 }}
          />
          <motion.path
            d="M185 85 C220 65, 255 95, 240 135 C225 175, 175 165, 155 135 C135 105, 180 75, 215 100 C250 125, 230 165, 190 150"
            stroke="hsl(var(--accent))"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          />
          <motion.path
            d="M150 90 C190 60, 240 85, 225 130 C210 175, 155 165, 135 130 C115 95, 165 65, 200 90"
            stroke="hsl(var(--accent))"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.65 }}
          />
          
          {/* Dots on the tangle */}
          <motion.circle
            cx="160"
            cy="80"
            r="10"
            fill="hsl(var(--accent))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
          />
          <motion.circle
            cx="230"
            cy="120"
            r="10"
            fill="hsl(var(--accent))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
          />
          <motion.circle
            cx="180"
            cy="145"
            r="10"
            fill="hsl(var(--accent))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
          />
        </motion.g>

        {/* Dashed arrow connecting problem to solution */}
        <motion.path
          d="M235 155 C280 190, 310 250, 285 300"
          stroke="hsl(var(--foreground))"
          strokeWidth="2"
          strokeDasharray="8 8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        />

        {/* Solution - Smooth glowing wave */}
        <motion.g filter="url(#strongGlow)">
          <motion.path
            d="M250 310 C275 280, 305 330, 330 300 C355 270, 375 320, 395 295"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 2.2 }}
          />
        </motion.g>
        
        {/* Extra glow layer */}
        <motion.path
          d="M250 310 C275 280, 305 330, 330 300 C355 270, 375 320, 395 295"
          stroke="hsl(var(--primary))"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.2 }}
        />
      </svg>
    </div>
  );
};

export default ProblemSolutionIllustration;