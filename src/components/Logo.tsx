import React from 'react';

interface LogoProps {
  className?: string; // Tailwind height/style class for alignment
  iconOnly?: boolean;
  lightText?: boolean;
}

export default function Logo({ className = 'h-10', iconOnly = false, lightText = false }: LogoProps) {
  // Brand Colors matching the uploaded corporate identity precisely
  const darkTeal = lightText ? '#e2f1f3' : '#0B3B46'; // Deep premium corporate pine/teal from the uploaded image
  const brightCyan = lightText ? '#38bdf8' : '#14b8a6'; // High-contrast rising cyan arrow accent
  const vibrantOrange = '#e37213'; // High-contrast success orange / gold
  const primaryTextColor = lightText ? '#ffffff' : '#0B3B46';
  const secondaryTextColor = lightText ? '#38bdf8' : '#e37213';

  // Crisp, symmetrical vector SVG mark of the "N" with the diagonal progress bars and cyan breakout arrow
  const logoIcon = (
    <svg
      className={`${iconOnly ? className : 'h-10 w-10'} shrink-0`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 1. Left Vertical Pillar of N */}
      <rect
        x="20"
        y="20"
        width="12"
        height="60"
        rx="3.5"
        fill={darkTeal}
      />

      {/* 2. Right Vertical Pillar of N */}
      <rect
        x="68"
        y="20"
        width="12"
        height="60"
        rx="3.5"
        fill={darkTeal}
      />

      {/* 3. Segmented Diagonal Success Path in Vibrant Orange (Three perfectly aligned rounded squares rotated at 45 degrees) */}
      <rect
        x="32"
        y="62"
        width="10"
        height="10"
        rx="2.5"
        transform="rotate(-45 32 62)"
        fill={vibrantOrange}
      />
      <rect
        x="45"
        y="49"
        width="10"
        height="10"
        rx="2.5"
        transform="rotate(-45 45 49)"
        fill={vibrantOrange}
      />
      <rect
        x="58"
        y="36"
        width="10"
        height="10"
        rx="2.5"
        transform="rotate(-45 58 36)"
        fill={vibrantOrange}
      />

      {/* 4. Rising Success Arrow in Bright Cyan */}
      <path
        d="M 64 26 L 76 14"
        stroke={brightCyan}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M 66 14 L 76 14 L 76 24"
        stroke={brightCyan}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (iconOnly) {
    return logoIcon;
  }

  return (
    <div className={`flex items-center select-none gap-3 ${className}`}>
      {logoIcon}
      <div className="flex flex-col justify-center">
        <span
          className="font-sans font-extrabold text-xl leading-none tracking-[0.16em]"
          style={{ color: primaryTextColor }}
        >
          NVARAA
        </span>
        <span
          className="font-sans font-bold text-[8.5px] tracking-[0.44em] mt-1.5 uppercase"
          style={{ color: secondaryTextColor }}
        >
          SOLUTIONS
        </span>
      </div>
    </div>
  );
}
