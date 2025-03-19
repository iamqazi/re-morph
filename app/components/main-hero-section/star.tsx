"use client";

import { useMemo } from "react";

const AnimatedBackground = () => {
  // Use useMemo to create stars only once
  const starCount = 60; // Reduced from 100 to 60 for better performance

  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      duration: Math.random() * 9 + 5,
      delay: Math.random() * 4,
      rotation: Math.random() * 360,
    }));
  }, []);

  // Use CSS variables for better performance
  const starStyle = `
    @keyframes float {
      from {
        transform: translateY(100vh) rotate(0deg);
        opacity: 1;
      }
      to {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
      }
    }
    .animate-float {
      animation: float linear infinite;
    }
    .star {
      position: absolute;
      mix-blend-mode: screen;
      animation: float linear infinite;
      bottom: -10vh;
    }
    .star-inner {
      width: 100%;
      height: 100%;
      background-color: #50ffff;
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      box-shadow: 0 0 20px 8px rgba(31, 255, 255, 0.7);
      filter: drop-shadow(0 0 12px #50ffff) brightness(1.2);
      opacity: 1;
    }
  `;

  return (
    <div className="w-full inset-0 overflow-hidden bg-[#02102700]">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size * 2}px`,
            height: `${star.size * 2}px`,
            left: `${star.left}vw`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            transform: `rotate(${star.rotation}deg)`,
          }}
        >
          <div className="star-inner" />
        </div>
      ))}
      <style jsx>{starStyle}</style>
    </div>
  );
};

export default AnimatedBackground;
