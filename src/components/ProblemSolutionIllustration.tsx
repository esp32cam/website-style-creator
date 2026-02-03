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
          backgroundSize: '45px 45px'
        }}
      />

      {/* Problem Label */}
      <motion.div 
        className="absolute top-8 right-8 text-base font-bold text-foreground tracking-widest uppercase"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        PROBLEM
      </motion.div>

      {/* Solution Label */}
      <motion.div 
        className="absolute bottom-8 right-8 text-base font-bold text-foreground tracking-widest uppercase"
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
            <feGaussianBlur stdDeviation="12" result="blur1"/>
            <feFlood floodColor="hsl(220, 100%, 55%)" floodOpacity="0.5" result="color"/>
            <feComposite in="color" in2="blur1" operator="in" result="glow"/>
            <feMerge>
              <feMergeNode in="glow"/>
              <feMergeNode in="glow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Problem - Multiple intersecting circles/loops (not overlapping strokes) */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Outer loops - various sizes intersecting */}
          <motion.ellipse
            cx="160"
            cy="120"
            rx="55"
            ry="45"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.ellipse
            cx="140"
            cy="150"
            rx="50"
            ry="40"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            fill="none"
            transform="rotate(-20, 140, 150)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          />
          <motion.ellipse
            cx="180"
            cy="140"
            rx="45"
            ry="50"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            fill="none"
            transform="rotate(30, 180, 140)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          <motion.ellipse
            cx="150"
            cy="170"
            rx="40"
            ry="35"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            fill="none"
            transform="rotate(-40, 150, 170)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          />
          <motion.ellipse
            cx="175"
            cy="110"
            rx="35"
            ry="45"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            fill="none"
            transform="rotate(50, 175, 110)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
          <motion.ellipse
            cx="130"
            cy="130"
            rx="42"
            ry="38"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            fill="none"
            transform="rotate(-60, 130, 130)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          />
          <motion.ellipse
            cx="165"
            cy="160"
            rx="38"
            ry="42"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            fill="none"
            transform="rotate(70, 165, 160)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          />
          <motion.ellipse
            cx="145"
            cy="100"
            rx="48"
            ry="35"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            fill="none"
            transform="rotate(-30, 145, 100)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          />
          <motion.ellipse
            cx="190"
            cy="155"
            rx="32"
            ry="40"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            fill="none"
            transform="rotate(45, 190, 155)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />
          
          {/* Orange dots */}
          <motion.circle
            cx="210"
            cy="95"
            r="12"
            fill="hsl(var(--accent))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
          />
          <motion.circle
            cx="205"
            cy="185"
            r="12"
            fill="hsl(var(--accent))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
          />
        </motion.g>

        {/* Dashed curved line connecting problem to solution */}
        <motion.path
          d="M210 190 C250 220, 280 280, 260 340"
          stroke="hsl(var(--foreground))"
          strokeWidth="3"
          strokeDasharray="10 10"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />

        {/* Solution - Diagonal wave going up-right with 3 curves */}
        <motion.g filter="url(#blueGlow)">
          <motion.path
            d="M230 400 C250 370, 280 380, 300 350 C320 320, 350 330, 370 300 C390 270, 420 280, 450 250"
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