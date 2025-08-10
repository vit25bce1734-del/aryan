import React, { useEffect, useState } from 'react';

// 3D Interactive Racing Car Component
export const Racing3DCar = ({ className = '', style = {} }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setRotation(prev => ({
          x: Math.sin(Date.now() * 0.001) * 5,
          y: Math.cos(Date.now() * 0.0008) * 10
        }));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseMove = (e) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateY = ((e.clientX - centerX) / rect.width) * 30;
    const rotateX = ((centerY - e.clientY) / rect.height) * 30;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  return (
    <div 
      className={`racing-3d-car ${className}`}
      style={{
        ...style,
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'none' : 'transform 0.1s ease-out',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="w-16 h-8 bg-gradient-to-r from-lime-400 to-lime-600 rounded-lg relative shadow-lg">
        {/* Car body 3D effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg"></div>
        <div className="absolute bottom-1 left-2 w-2 h-2 bg-gray-800 rounded-full"></div>
        <div className="absolute bottom-1 right-2 w-2 h-2 bg-gray-800 rounded-full"></div>
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-700 rounded-sm"></div>
      </div>
    </div>
  );
};

// 3D Floating Speed Indicator
export const Speed3DIndicator = ({ speed = 0, className = '' }) => {
  const [displaySpeed, setDisplaySpeed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplaySpeed(prev => {
        const diff = speed - prev;
        if (Math.abs(diff) < 1) return speed;
        return prev + diff * 0.1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className={`speed-3d-indicator ${className}`}>
      <div 
        className="relative w-20 h-20 bg-gray-900 rounded-full border-4 border-lime-400 flex items-center justify-center interactive-3d"
        style={{
          background: `conic-gradient(from 0deg, #d9fb06 0deg, #d9fb06 ${(displaySpeed / 400) * 360}deg, #374151 ${(displaySpeed / 400) * 360}deg, #374151 360deg)`
        }}
      >
        <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center depth-layer-2">
          <span className="text-lime-400 font-bold text-sm">{Math.round(displaySpeed)}</span>
        </div>
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-lime-400 rounded-full depth-layer-3" 
             style={{
               transform: `translateX(-50%) rotate(${(displaySpeed / 400) * 180 - 90}deg)`,
               transformOrigin: 'bottom center'
             }}>
        </div>
      </div>
    </div>
  );
};

// 3D Racing Track Path
export const RacingTrack3D = ({ className = '' }) => {
  return (
    <div className={`racing-track-3d-container ${className}`}>
      <svg 
        viewBox="0 0 200 100" 
        className="w-full h-full opacity-30"
        style={{ 
          transform: 'perspective(500px) rotateX(60deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        <defs>
          <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d9fb06" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3f4816" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d9fb06" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Racing track path */}
        <path 
          d="M20,50 Q50,20 100,50 Q150,80 180,50" 
          stroke="url(#trackGradient)" 
          strokeWidth="8" 
          fill="none"
          strokeDasharray="10,5"
          className="racing-track-path"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            values="0;15;0" 
            dur="2s" 
            repeatCount="indefinite"
          />
        </path>
        
        {/* Racing car moving along track */}
        <circle r="3" fill="#d9fb06" className="racing-car-dot">
          <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
            <mpath href="#track" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
};

// 3D Interactive Trophy
export const Trophy3D = ({ position = 1, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getTrophyColor = () => {
    switch(position) {
      case 1: return '#FFD700'; // Gold
      case 2: return '#C0C0C0'; // Silver  
      case 3: return '#CD7F32'; // Bronze
      default: return '#d9fb06'; // Lime
    }
  };

  return (
    <div 
      className={`trophy-3d ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'perspective(500px) rotateY(20deg) rotateX(10deg) translateZ(20px)' : 'perspective(500px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
        transformStyle: 'preserve-3d',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        cursor: 'pointer'
      }}
    >
      <div className="relative w-12 h-16">
        {/* Trophy cup */}
        <div 
          className="w-8 h-8 mx-auto rounded-t-full border-4 depth-layer-3"
          style={{ 
            borderColor: getTrophyColor(),
            background: `linear-gradient(45deg, ${getTrophyColor()}20, ${getTrophyColor()}40)`
          }}
        ></div>
        
        {/* Trophy stem */}
        <div 
          className="w-2 h-4 mx-auto border-2 depth-layer-2"
          style={{ borderColor: getTrophyColor() }}
        ></div>
        
        {/* Trophy base */}
        <div 
          className="w-6 h-2 mx-auto border-2 depth-layer-1"
          style={{ 
            borderColor: getTrophyColor(),
            background: `linear-gradient(45deg, ${getTrophyColor()}30, ${getTrophyColor()}50)`
          }}
        ></div>
        
        {/* Floating particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full floating-3d"
                style={{
                  backgroundColor: getTrophyColor(),
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 10}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// 3D Mouse Follower Effect
export const MouseFollower3D = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed pointer-events-none z-50 transition-all duration-100 ease-out"
      style={{
        left: mousePos.x - 10,
        top: mousePos.y - 10,
        transform: 'perspective(500px) rotateX(45deg) rotateY(45deg) translateZ(10px)',
        transformStyle: 'preserve-3d'
      }}
    >
      <Racing3DCar className="opacity-70" />
    </div>
  );
};