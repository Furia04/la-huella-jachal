interface BrandMarkProps {
  light?: boolean;
  compact?: boolean;
}

export function BrandMark({ light = false, compact = false }: BrandMarkProps) {
  const strokeColor = light ? '#FAF7F1' : '#241B15';
  const subColor = light ? 'text-cal-light/85' : 'text-tierra';
  const mainColor = light ? 'text-cal-light' : 'text-algarrobo';

  return (
    <div className="inline-flex flex-col items-center select-none">
      <span
        className={`font-display italic font-medium leading-none tracking-tight ${
          compact ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'
        } ${mainColor}`}
      >
        La Huella
      </span>

      {/* Silueta lineal de las 3 casas de campo inspirada en el cartel de madera original */}
      <svg
        viewBox="0 0 160 18"
        fill="none"
        aria-hidden="true"
        className={`${compact ? 'w-28 h-3 mt-0.5' : 'w-36 h-4 mt-1'} transition-colors duration-200`}
      >
        <path
          d="M6 15 H28 L33 5 H51 L56 15 H64 L69 5 H91 L96 15 H104 L109 5 H127 L132 15 H154"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="39" y="9" width="6" height="6" stroke={strokeColor} strokeWidth="1.2" />
        <rect x="77" y="9" width="6" height="6" stroke={strokeColor} strokeWidth="1.2" />
        <rect x="115" y="9" width="6" height="6" stroke={strokeColor} strokeWidth="1.2" />
      </svg>

      <span
        className={`font-sans uppercase tracking-[0.26em] font-medium mt-1 ${
          compact ? 'text-[9px]' : 'text-[10px]'
        } ${subColor}`}
      >
        Casas de Campo
      </span>
    </div>
  );
}
