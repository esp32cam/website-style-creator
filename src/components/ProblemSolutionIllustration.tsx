import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

// Problem points data - positioned to be visible when zoomed
const problemPoints = [
  { id: 1, x: 130, y: 100, label: "Bottleneck" },
  { id: 2, x: 185, y: 125, label: "Redundancy" },
  { id: 3, x: 175, y: 170, label: "Miscommunication" },
  { id: 4, x: 120, y: 155, label: "Delays" },
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
          
          // Phase 3: Unravel animation
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
            }, 2200);
          }, 500);
        }
      }, 700);
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

      {/* Main container with zoom animation - centered on problem area */}
      <motion.div
        className="relative w-full h-full"
        animate={{
          scale: phase === "zoomIn" || phase === "highlight" || phase === "unravel" ? 2.8 : 1,
          x: phase === "zoomIn" || phase === "highlight" || phase === "unravel" ? "40%" : 0,
          y: phase === "zoomIn" || phase === "highlight" || phase === "unravel" ? "45%" : 0,
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
              <feGaussianBlur stdDeviation="6" result="blur" />
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

          {/* Problem - Original messy ellipses style */}
          <motion.g
            onClick={handleProblemClick}
            style={{ cursor: isAnimating ? "default" : "pointer" }}
            whileHover={!isAnimating ? { scale: 1.02 } : {}}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Original messy scribble ellipses */}
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

          {/* Problem Points - fade in smoothly, no bounce */}
          <AnimatePresence>
            {(phase === "highlight" || phase === "unravel") && problemPoints.map((point) => (
              <motion.g
                key={point.id}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activePoint !== null && activePoint >= point.id ? 1 : 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Highlight circle - fade in only */}
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r="10"
                  fill="hsl(var(--accent))"
                  filter={activePoint === point.id ? "url(#orangeGlow)" : "none"}
                />
                
                {/* Large Label - English only */}
                <motion.text
                  x={point.x + 16}
                  y={point.y + 5}
                  className="text-[12px] font-bold fill-foreground"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {point.label}
                </motion.text>
              </motion.g>
            ))}
          </AnimatePresence>

          {/* Unravel solution line - same shape as original */}
          <AnimatePresence>
            {phase === "unravel" && (
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
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </motion.g>
            )}
          </AnimatePresence>

          {/* Original dashed curved connector */}
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

          {/* Solution - Static blue line */}
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

          {/* Orange Dots - original positions */}
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
    </div>
  );
};

export default ProblemSolutionIllustration;
