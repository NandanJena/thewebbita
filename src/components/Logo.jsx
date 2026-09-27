export const LogoMark = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="twb-g" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#6366F1" />
      </linearGradient>
    </defs>
    <path
      d="M11 7 3.5 16 11 25"
      stroke="url(#twb-g)"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 7 28.5 16 21 25"
      stroke="url(#twb-g)"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="16" r="2.6" fill="url(#twb-g)" />
  </svg>
);

export const Wordmark = ({ className = "" }) => (
  <span className={`font-display font-semibold tracking-tight text-white ${className}`}>
    theweb<span className="text-gradient">Bita</span>
  </span>
);
