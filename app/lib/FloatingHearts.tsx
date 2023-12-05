"use client";

import { useMemo, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingHearts({ n = 50 }: { n: number }): ReactNode {
  const [screenWidth, screenHeight] = useMemo(() => {
    if (typeof window !== "undefined") {
      return [window.innerWidth, window.innerHeight];
    }
    return [1000, 1000];
  }, []);

  return (
    <div className="absolute z-100 h-full">
      {Array(n)
        .fill(0)
        .map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            initial={{
              scale: 0.5,
              y: screenHeight,
              x: Math.random() * screenWidth,
            }}
            animate={{ scale: 2, y: -1.5 * screenHeight }}
            transition={{
              type: "ease-in-out",
              duration: 5,
              delay: Math.random() * 1,
            }}
          >
            ❤️
          </motion.div>
        ))}
    </div>
  );
}
