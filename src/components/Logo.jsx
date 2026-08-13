export default function Logo({ size = 26, gradientId = 'npin' }) {
  return (
    <svg viewBox="0 0 128 128" width={size} height={size} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#35E8CE" />
          <stop offset=".52" stopColor="#00D1B2" />
          <stop offset="1" stopColor="#159BDD" />
        </linearGradient>
      </defs>
      <path
        d="M64,16 C40,16 22,34 22,58 C22,90 64,121 64,121 C64,121 106,90 106,58 C106,34 88,16 64,16 Z"
        fill={`url(#${gradientId})`}
      />
      <g fill="none" stroke="#0B0E13" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M48,55 L64,44 L80,55" />
        <path d="M48,69 L64,58 L80,69" />
        <path d="M48,83 L64,72 L80,83" />
      </g>
    </svg>
  );
}
