import React from 'react';

const ScrollIndicator = () => {
  return (
      <div className="scroll-indicator">
        <style jsx>{`
          @keyframes scroll {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(8px);
            }
          }

          .scroll-indicator {
            animation: scroll 1.5s infinite;
          }
        `}</style>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          transform="rotate(-90)"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l-7-7 7-7m8 14l-7-7 7-7"
          />
        </svg>
      </div>
  );
};

export default ScrollIndicator;
