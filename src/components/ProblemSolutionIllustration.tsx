import { motion } from "framer-motion";

const ProblemSolutionIllustration = () => {
  return (
    <div className="relative w-full h-full bg-card rounded-lg overflow-hidden">
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--grid-color)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--grid-color)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Swiss High-Contrast Label */}
      <motion.div 
        className="absolute top-4 right-6 text-sm font-normal text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Swiss High-Contrast
      </motion.div>

      {/* Problem Label */}
      <motion.div 
        className="absolute top-12 right-6 text-base font-bold text-foreground tracking-widest uppercase"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        PROBLEM
      </motion.div>

      {/* Solution Label */}
      <motion.div 
        className="absolute bottom-6 right-6 text-base font-bold text-foreground tracking-widest uppercase"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        SOLUTION
      </motion.div>

      {/* SVG Illustration */}
      <svg 
        viewBox="0 0 500 500" 
        className="w-full h-full"
        fill="none"
      >
        {/* Glow filter for solution line */}
        <defs>
          <filter id="blueGlow" x="-100%" y="-100%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="15" result="blur1"/>
            <feFlood floodColor="hsl(220, 100%, 55%)" floodOpacity="0.6" result="color"/>
            <feComposite in="color" in2="blur1" operator="in" result="glow"/>
            <feMerge>
              <feMergeNode in="glow"/>
              <feMergeNode in="glow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Problem - Circular Scribble (Donut shape with messy strokes) */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Multiple overlapping circular strokes creating messy donut */}
          <motion.path
            d="M180 80 C240 60, 280 100, 270 150 C260 200, 200 220, 150 200 C100 180, 90 130, 110 90 C130 50, 180 50, 200 70"
            stroke="hsl(var(--accent))"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.path
            d="M160 95 C200 75, 250 90, 255 140 C260 190, 210 215, 160 200 C110 185, 95 140, 115 100 C135 60, 175 65, 190 85"
            stroke="hsl(var(--accent))"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.path
            d="M195 85 C235 70, 270 105, 260 155 C250 205, 195 225, 145 205 C95 185, 85 130, 110 85 C135 40, 185 55, 210 80"
            stroke="hsl(var(--accent))"
            strokeWidth="11"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          />
          <motion.path
            d="M170 100 C210 80, 255 100, 250 145 C245 190, 200 210, 155 195 C110 180, 100 135, 120 95 C140 55, 180 65, 195 90"
            stroke="hsl(var(--accent))"
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          />
          <motion.path
            d="M185 90 C225 70, 265 95, 258 145 C251 195, 200 218, 148 200 C96 182, 88 132, 112 88 C136 44, 178 58, 198 82"
            stroke="hsl(var(--accent))"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          {/* Inner strokes for more chaos */}
          <motion.path
            d="M175 110 C205 95, 235 110, 230 145 C225 180, 195 195, 165 185 C135 175, 125 145, 140 115 C155 85, 180 95, 190 110"
            stroke="hsl(var(--accent))"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.g>

        {/* Dashed curved line connecting problem to solution */}
        <motion.path
          d="M260 180 C300 220, 320 300, 300 370"
          stroke="hsl(var(--foreground))"
          strokeWidth="3"
          strokeDasharray="12 12"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />

        {/* Solution - Long wavy line with glow */}
        <motion.g filter="url(#blueGlow)">
          <motion.path
            d="M200 400 C230 370, 260 420, 290 390 C320 360, 350 410, 380 380 C410 350, 440 400, 470 370"
            stroke="hsl(var(--primary))"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.8 }}
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default ProblemSolutionIllustration;