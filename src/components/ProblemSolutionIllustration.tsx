import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

// Problem points data
const problemPoints = [
  { id: 1, x: 130, y: 100, label: "Bottleneck", description: "ข้อจำกัดในกระบวนการ" },
  { id: 2, x: 180, y: 145, label: "Miscommunication", description: "สื่อสารผิดพลาด" },
  { id: 3, x: 145, y: 175, label: "Delays", description: "ความล่าช้าสะสม" },
  { id: 4, x: 165, y: 120, label: "Redundancy", description: "ขั้นตอนซ้ำซ้อน" },
];

const ProblemSolutionIllustration = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [phase, setPhase] = useState<"idle" | "zoomIn" | "highlight" | "unravel" | "zoomOut">("idle");
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const handleProblemClick = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setPhase("zoomIn");

    // Phase 1: Zoom in (0.8s)
    setTimeout(() => {
      setPhase("highlight");
      
      // Phase 2: Highlight each point sequentially
      let pointIndex = 0;
      const highlightInterval = setInterval(() => {
        if (pointIndex < problemPoints.length) {
          setActivePoint(problemPoints[pointIndex].id);
          pointIndex++;
        } else {
          clearInterval(highlightInterval);
          
          // Phase 3: Unravel animation (after all points highlighted)
          setTimeout(() => {
            setPhase("unravel");
            
            // Phase 4: Zoom out back to normal
            setTimeout(() => {
              setPhase("zoomOut");
              
              // Reset to idle
              setTimeout(() => {
                setPhase("idle");
                setActivePoint(null);
                setIsAnimating(false);
              }, 800);
            }, 2000);
          }, 500);
        }
      }, 800);
    }, 800);
  }, [isAnimating]);

  return (
    <div className="relative w-full h-full bg-card rounded-lg overflow-hidden">
      {/* Grid pattern background */}
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

      {/* Main container with zoom animation */}
      <motion.div
        className="relative w-full h-full"
        animate={{
          scale: phase === "zoomIn" || phase === "highlight" || phase === "unravel" ? 2.2 : 1,
          x: phase === "zoomIn" || phase === "highlight" || phase === "unravel" ? "25%" : 0,
          y: phase === "zoomIn" || phase === "highlight" || phase === "unravel" ? "35%" : 0,
        }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
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
            
            {/* Highlight glow for problem points */}
            <filter id="orangeGlow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feFlood floodColor="#FF4500" floodOpacity="0.8" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Problem Label - hide during zoom */}
          <AnimatePresence>
            {phase === "idle" && (
              <motion.text
                x="260"
                y="65"
                className="text-xl font-[900] fill-foreground uppercase"
                style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.01em" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                PROBLEM
              </motion.text>
            )}
          </AnimatePresence>

          {/* Solution Label - hide during zoom */}
          <AnimatePresence>
            {phase === "idle" && (
              <motion.text
                x="175"
                y="460"
                className="text-xl font-[900] fill-foreground uppercase"
                style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.01em" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                SOLUTION
              </motion.text>
            )}
          </AnimatePresence>

          {/* Problem - Clickable scribble area */}
          <motion.g
            onClick={handleProblemClick}
            style={{ cursor: isAnimating ? "default" : "pointer" }}
            whileHover={!isAnimating ? { scale: 1.02 } : {}}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Scribble ellipses */}
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
                animate={{
                  opacity: phase === "unravel" ? 0.3 : 1,
                }}
                transition={{ duration: 0.5 }}
              />
            ))}

            {/* Invisible clickable area */}
            <circle
              cx="160"
              cy="140"
              r="80"
              fill="transparent"
              style={{ cursor: isAnimating ? "default" : "pointer" }}
            />
          </motion.g>

          {/* Problem Points - show during highlight phase */}
          <AnimatePresence>
            {(phase === "highlight" || phase === "unravel") && problemPoints.map((point, index) => (
              <motion.g
                key={point.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: activePoint !== null && activePoint >= point.id ? 1 : 0,
                  scale: activePoint !== null && activePoint >= point.id ? 1 : 0,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              >
                {/* Highlight circle */}
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r="12"
                  fill="hsl(var(--accent))"
                  filter={activePoint === point.id ? "url(#orangeGlow)" : "none"}
                  animate={{
                    scale: activePoint === point.id ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    scale: { duration: 0.5, repeat: activePoint === point.id ? Infinity : 0 },
                  }}
                />
                
                {/* Label */}
                <motion.text
                  x={point.x + 20}
                  y={point.y - 5}
                  className="text-[8px] font-bold fill-foreground"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {point.label}
                </motion.text>
                <motion.text
                  x={point.x + 20}
                  y={point.y + 6}
                  className="text-[5px] fill-muted-foreground"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {point.description}
                </motion.text>
              </motion.g>
            ))}
          </AnimatePresence>

          {/* Unravel solution line - connecting through points */}
          <AnimatePresence>
            {phase === "unravel" && (
              <motion.g filter="url(#blueGlow)">
                <motion.path
                  d={`M ${problemPoints[0].x} ${problemPoints[0].y} 
                      Q ${problemPoints[1].x - 20} ${problemPoints[1].y - 30} ${problemPoints[1].x} ${problemPoints[1].y}
                      Q ${problemPoints[2].x + 30} ${problemPoints[2].y - 20} ${problemPoints[2].x} ${problemPoints[2].y}
                      Q ${problemPoints[3].x - 10} ${problemPoints[3].y + 40} ${problemPoints[3].x} ${problemPoints[3].y}
                      Q 220 200 280 250
                      Q 350 300 400 280
                      Q 450 260 460 240`}
                  stroke="#0055FF"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              </motion.g>
            )}
          </AnimatePresence>

          {/* Dashed curved connector - hide during animation */}
          <AnimatePresence>
            {phase === "idle" && (
              <motion.path
                d="M 235 175 C 320 175, 280 325, 255 330"
                stroke="hsl(var(--foreground))"
                strokeWidth="3.5"
                strokeDasharray="9 9"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, delay: 1.2 }}
              />
            )}
          </AnimatePresence>

          {/* Solution - Static blue line - hide during animation */}
          <AnimatePresence>
            {phase === "idle" && (
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
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, delay: 1.6 }}
                />
              </motion.g>
            )}
          </AnimatePresence>

          {/* Orange Dots - hide during animation */}
          <AnimatePresence>
            {phase === "idle" && (
              <>
                <motion.circle
                  cx="235"
                  cy="75"
                  r="16"
                  fill="hsl(var(--accent))"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
                />
                <motion.circle
                  cx="225"
                  cy="175"
                  r="16"
                  fill="hsl(var(--accent))"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                />
              </>
            )}
          </AnimatePresence>
        </svg>
      </motion.div>

      {/* Click hint - show only in idle state */}
      <AnimatePresence>
        {phase === "idle" && !isAnimating && (
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              👆
            </motion.span>
            Click problem to explore
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProblemSolutionIllustration;
