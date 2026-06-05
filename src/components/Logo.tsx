import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "h-12", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Monogram Graphic */}
      <svg
        viewBox="0 0 500 500"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Gold Gradient for main body */}
          <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="30%" stopColor="#FFC107" />
            <stop offset="50%" stopColor="#FFB300" />
            <stop offset="70%" stopColor="#FFA000" />
            <stop offset="100%" stopColor="#B57C1E" />
          </linearGradient>

          {/* Platinum / Silver Gradient */}
          <linearGradient id="silverMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5F5F5" />
            <stop offset="50%" stopColor="#E0E0E0" />
            <stop offset="100%" stopColor="#9E9E9E" />
          </linearGradient>

          {/* Luxury Reflection Highlight */}
          <linearGradient id="reflectionLayer" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFD54F" stopOpacity="0" />
          </linearGradient>

          {/* Asphalt Road Gradient */}
          <linearGradient id="asphaltGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E1E24" />
            <stop offset="100%" stopColor="#2D2E36" />
          </linearGradient>

          {/* Drop Shadow Filter */}
          <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.5" />
          </filter>
        </defs>

        <g filter="url(#logoShadow)">
          {/* 1. Golden Wings (Left Side) */}
          <path
            d="M200,165 C130,165 95,145 75,130 C120,200 230,195 240,195 M190,205 C140,205 110,190 95,180 C130,225 210,225 220,225 M180,240 C145,240 120,230 110,225 C135,260 190,260 195,260"
            stroke="url(#goldMetallic)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* 2. Golden Swooshing Tail / Bottom Leg */}
          <path
            d="M176,380 C190,380 230,300 248,272"
            stroke="url(#goldMetallic)"
            strokeWidth="24"
            strokeLinecap="round"
            fill="none"
          />

          {/* 3. Outer Road Loop (The 'P' curve) */}
          {/* Drawn as broad dark-asphalt band with gold trim */}
          <path
            d="M235,270 C235,270 290,270 340,230 C390,190 395,145 340,115 C285,85 200,110 200,110"
            stroke="url(#goldMetallic)"
            strokeWidth="38"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M235,270 C235,270 290,270 340,230 C390,190 395,145 340,115 C285,85 200,110 200,110"
            stroke="url(#asphaltGrad)"
            strokeWidth="26"
            strokeLinecap="round"
            fill="none"
          />

          {/* Road markings (White dashes) */}
          <path
            d="M235,270 C235,270 290,270 340,230 C390,190 395,145 340,115 C285,85 200,110 200,110"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeDasharray="14 12"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          {/* Golden outline highlights on the road edges */}
          <path
            d="M235,268 C285,268 335,232 380,190"
            stroke="url(#reflectionLayer)"
            strokeWidth="3"
            fill="none"
          />
        </g>
      </svg>

      {!iconOnly && (
        <div className="flex flex-col text-left leading-none">
          <span 
            className="font-sans font-black tracking-widest text-[#E5C158]"
            style={{ 
              fontSize: '1.4rem', 
              letterSpacing: '0.18em', 
              textShadow: '0px 2px 4px rgba(0,0,0,0.4)',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            PVS
          </span>
          <span 
            className="font-sans font-bold tracking-[0.25em] text-[#E5E7EB]"
            style={{ 
              fontSize: '0.62rem', 
              marginTop: '1.5px',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            TRANSPORTE
          </span>
          <div className="flex items-center justify-between w-full mt-1">
            <span className="h-[1px] bg-[#E5C158]/50 flex-grow mr-1" />
            <span 
              className="font-sans font-medium tracking-[0.16em] text-[#E5C158]"
              style={{ 
                fontSize: '0.45rem',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              EXECUTIVO
            </span>
            <span className="h-[1px] bg-[#E5C158]/50 flex-grow ml-1" />
          </div>
        </div>
      )}
    </div>
  );
}
