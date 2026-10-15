import React from "react";

interface SyntaxLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const SyntaxLogo: React.FC<SyntaxLogoProps> = ({
  size = 36,
  className = "",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={className}
      aria-label="Syntax Logo"
      {...props}
    >
      <defs>
        <linearGradient id="syntaxBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="45%" stopColor="#0a0f1d" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <linearGradient id="syntaxInnerGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
        </linearGradient>

        <linearGradient id="syntaxCyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>

        <linearGradient id="syntaxSlash" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>

        <linearGradient id="syntaxPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#e11d48" />
        </linearGradient>

        <filter id="syntaxAmbientGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="28" result="blur" />
        </filter>
      </defs>

      {/* Squircle Base */}
      <rect
        x="20"
        y="20"
        width="472"
        height="472"
        rx="112"
        fill="url(#syntaxBgGrad)"
      />
      <rect
        x="20"
        y="20"
        width="472"
        height="472"
        rx="112"
        fill="none"
        stroke="url(#syntaxInnerGlow)"
        strokeWidth="4"
      />

      {/* Ambient Glow */}
      <g filter="url(#syntaxAmbientGlow)" opacity="0.5">
        <path
          d="M 185 175 L 105 256 L 185 337"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="44"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 295 145 L 217 367"
          fill="none"
          stroke="#818cf8"
          strokeWidth="44"
          strokeLinecap="round"
        />
        <path
          d="M 327 175 L 407 256 L 327 337"
          fill="none"
          stroke="#f43f5e"
          strokeWidth="44"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Foreground Syntax Tokens */}
      <g>
        <path
          d="M 185 175 L 105 256 L 185 337"
          fill="none"
          stroke="url(#syntaxCyan)"
          strokeWidth="38"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 295 145 L 217 367"
          fill="none"
          stroke="url(#syntaxSlash)"
          strokeWidth="38"
          strokeLinecap="round"
        />
        <path
          d="M 327 175 L 407 256 L 327 337"
          fill="none"
          stroke="url(#syntaxPink)"
          strokeWidth="38"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default SyntaxLogo;
