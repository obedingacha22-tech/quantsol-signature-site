import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSlideshowProps {
  images: { src: string; alt: string }[];
  interval?: number;
}

const kenBurnsVariants = [
  { scale: [1, 1.15], x: ["0%", "3%"], y: ["0%", "2%"] },
  { scale: [1.1, 1], x: ["2%", "-2%"], y: ["-1%", "1%"] },
  { scale: [1, 1.12], x: ["-2%", "1%"], y: ["1%", "-2%"] },
];

const HeroSlideshow = ({ images, interval = 6000 }: HeroSlideshowProps) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  const kb = kenBurnsVariants[current % kenBurnsVariants.length];

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: kb.scale,
            x: kb.x,
            y: kb.y,
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: interval / 1000, ease: "linear" },
            x: { duration: interval / 1000, ease: "linear" },
            y: { duration: interval / 1000, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50 z-[1]" />
    </div>
  );
};

export default HeroSlideshow;
