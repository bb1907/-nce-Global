/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export function Logo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
        <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Premium Rounded Square Container */}
      <rect 
        x="5" y="5" width="90" height="90" 
        rx="24" 
        fill="#0A0A0F" 
        stroke="url(#logo-gradient)" 
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />
      
      <g filter="url(#logo-glow)">
        {/* Minimalist Bear Claw Motif (4 elegant abstract strokes) */}
        <path 
          d="M32 58 C 36 38, 44 32, 50 28 L 50 54 C 44 56, 36 58, 32 58 Z" 
          fill="url(#logo-gradient)" 
          opacity="0.8"
        />
        <path 
          d="M45 57 C 50 32, 58 24, 64 20 L 64 54 C 58 56, 50 57, 45 57 Z" 
          fill="url(#logo-gradient)" 
          opacity="1"
        />
        <path 
          d="M58 58 C 64 35, 72 30, 78 28 L 78 56 C 72 58, 64 60, 58 58 Z" 
          fill="url(#logo-gradient)" 
          opacity="0.9"
        />
        <path 
          d="M72 62 C 78 45, 84 42, 88 42 L 88 64 C 84 66, 78 64, 72 62 Z" 
          fill="url(#logo-gradient)" 
          opacity="0.7"
        />
        
        {/* Abstract Base Curve representing the paw edge */}
        <path 
          d="M25 62 Q 55 78, 85 64" 
          stroke="url(#logo-gradient)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          opacity="0.2"
        />
      </g>
    </svg>
  );
}
