export default function Preloader() {
  return (
    <div className="preloader" data-preloader aria-hidden="true">
      <svg className="preloader__trail" viewBox="0 0 200 120" width="220" height="132" aria-hidden="true">
        <path
          d="M14,96 C56,96 62,40 100,40 C138,40 144,96 186,96"
          fill="none"
          stroke="rgba(232,235,239,.12)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="live"
          d="M14,96 C56,96 62,40 100,40 C138,40 144,96 186,96"
          fill="none"
          stroke="#00D1B2"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <div className="preloader__pin">
        <svg viewBox="0 0 128 128" width="52" height="52" aria-hidden="true">
          <defs>
            <linearGradient id="ppin" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#35E8CE" />
              <stop offset=".52" stopColor="#00D1B2" />
              <stop offset="1" stopColor="#159BDD" />
            </linearGradient>
          </defs>
          <path
            d="M64,16 C40,16 22,34 22,58 C22,90 64,121 64,121 C64,121 106,90 106,58 C106,34 88,16 64,16 Z"
            fill="url(#ppin)"
          />
          <g fill="none" stroke="#0B0E13" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M48,55 L64,44 L80,55" />
            <path d="M48,69 L64,58 L80,69" />
            <path d="M48,83 L64,72 L80,83" />
          </g>
        </svg>
      </div>
      <div className="preloader__word">
        CONV<span style={{ color: '#00D1B2' }}>Y</span>O
      </div>
      <div className="preloader__track">
        <div className="preloader__bar" />
      </div>
      <div className="preloader__meta">
        <span>Plotting route</span>
        <span data-preload-pct>0%</span>
      </div>
    </div>
  );
}
