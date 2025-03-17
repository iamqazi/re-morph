"use client";

import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [stars, setStars] = useState<
    {
      id: number;
      size: number;
      left: number;
      duration: number;
      delay: number;
      rotation: number;
    }[]
  >([]);

  useEffect(() => {
    const numStars = 100;
    const newStars = Array.from({ length: numStars }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // Random size between 2px and 6px
      left: Math.random() * 100, // Positioning in viewport width
      duration: Math.random() * 9 + 5, // Animation duration between 5s and 14s
      delay: Math.random() * 4, // Random delay up to 4s
      rotation: Math.random() * 360, // Random rotation for stars
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="w-full inset-0 overflow-hidden bg-[#02102700]">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute mix-blend-screen animate-float"
          style={{
            width: `${star.size * 2}px`,
            height: `${star.size * 2}px`,
            left: `${star.left}vw`,
            bottom: `-10vh`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            transform: `rotate(${star.rotation}deg)`,
          }}
        >
          {/* Star shape using clip-path with enhanced brightness and glow */}
          <div
            className="w-full h-full"
            style={{
              backgroundColor: "#50ffff", // Brighter color
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              boxShadow: "0 0 20px 8px rgba(31, 255, 255, 0.7)", // Stronger glow
              filter: "drop-shadow(0 0 12px #50ffff) brightness(1.2)", // Enhanced drop shadow and brightness
              opacity: 1,
            }}
          />
        </div>
      ))}
      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
