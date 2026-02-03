import { motion } from "framer-motion";

const ProblemSolutionIllustration = () => {
  return (
    <div className="relative w-full h-full bg-card rounded-lg overflow-hidden">
      {/* Grid pattern background - strictly at the back */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--grid-color)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--grid-color)) 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px'
        }}
      />

      {/* SVG Illustration */}
      <svg
        viewBox="0 0 500 500"
        className="relative w-full h-full z-10"
        fill="none"
      >
        {/* Glow filter for solution line */}
        <defs>
          <filter id="blueGlow" x="-100%" y="-100%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="12" result="blur1" />
            <feFlood floodColor="#0055FF" floodOpacity="0.7" result="color" />
            <feComposite in="color" in2="blur1" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Problem Label */}
        <motion.text
          x="260"
          y="65"
          className="text-xl font-[900] fill-foreground uppercase"
          style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.01em" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          PROBLEM
        </motion.text>

        {/* Solution Label */}
        <motion.text
          x="175"
          y="460"
          className="text-xl font-[900] fill-foreground uppercase"
          style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.01em" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          SOLUTION
        </motion.text>

        {/* Problem - Multiple intersecting circles/loops */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { cx: 160, cy: 120, rx: 55, ry: 45, r: 0 },
            { cx: 140, cy: 150, rx: 50, ry: 40, r: -20 },
            { cx: 180, cy: 140, rx: 45, ry: 50, r: 30 },
            { cx: 150, cy: 170, rx: 40, ry: 35, r: -40 },
            { cx: 175, cy: 110, rx: 35, ry: 45, r: 50 },
            { cx: 130, cy: 130, rx: 42, ry: 38, r: -60 },
            { cx: 165, cy: 160, rx: 38, ry: 42, r: 70 },
            { cx: 145, cy: 100, rx: 48, ry: 35, r: -30 },
            { cx: 190, cy: 155, rx: 32, ry: 40, r: 45 },
          ].map((item, i) => (
            <motion.ellipse
              key={i}
              cx={item.cx}
              cy={item.cy}
              rx={item.rx}
              ry={item.ry}
              stroke="hsl(var(--accent))"
              strokeWidth="5"
              fill="none"
              transform={`rotate(${item.r}, ${item.cx}, ${item.cy})`}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.05 }}
            />
          ))}

        </motion.g>

        {/* Dashed curved connector - SMOOTH S-CURVE */}
        <motion.path
          d="M 235 175 C 320 175, 280 325, 255 330"
          stroke="hsl(var(--foreground))"
          strokeWidth="3.5"
          strokeDasharray="9 9"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        />

        {/* Solution - SMOOTH ORGANIC WAVE */}
        <motion.g filter="url(#blueGlow)">
          <motion.path
            d="M 225 420 
               C 225 360, 240 330, 290 330 
               L 350 330 
               C 400 330, 410 290, 410 270 
               C 410 250, 430 240, 460 240"
            stroke="#0055FF"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.6 }}
          />
        </motion.g>

        {/* Orange Dots - Moved to end to overlay lines */}
        <motion.circle
          cx="235"
          cy="75"
          r="16"
          fill="hsl(var(--accent))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
        />
        <motion.circle
          cx="225"
          cy="175"
          r="16"
          fill="hsl(var(--accent))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
        />
      </svg>
    </div>
  );
};

export default ProblemSolutionIllustration;