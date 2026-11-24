import { useState } from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface CabinShowcaseProps {
  whatsappUrl: string;
}

export function CabinShowcase({ whatsappUrl }: CabinShowcaseProps) {
  const { cabins, capacityLabel, bedroomsLabel, unitsCount } = siteConfig;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentSpace = cabins.spaces[selectedIndex];

  return (
    <section id="casas" className="scroll-mt-20 py-24 sm:py-32 bg-cal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
        {/* Encabezado de sección + fichas editables */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs uppercase tracking-[0.24em] text-terracota font-semibold">
              {cabins.eyebrow} — {unitsCount} unidades exclusivas
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-algarrobo leading-[1.08]">
              {cabins.title}{' '}
              <span className="italic font-normal text-tierra">{cabins.titleItalic}</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <p className="text-tierra text-base leading-relaxed">{cabins.summary}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-full bg-arena border border-piedra text-xs text-algarrobo font-medium">
                {capacityLabel}
              </span>
              <span className="px-3 py-1 rounded-full bg-arena border border-piedra text-xs text-algarrobo font-medium">
                {bedroomsLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Selector numerado estilo Lingers (01 · 02 · 03) */}
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3 border-b border-piedra pb-5">
            {cabins.spaces.map((space, idx) => {
              const active = idx === selectedIndex;
              return (
                <button
                  key={space.id}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`inline-flex items-baseline gap-2.5 px-5 py-3 rounded-full text-left transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota ${
                    active
                      ? 'bg-algarrobo text-cal-light shadow-xs'
                      : 'bg-arena/70 text-algarrobo hover:bg-arena'
                  }`}
                >
                  <span
                    className={`font-display text-lg italic ${
                      active ? 'text-terracota' : 'text-tierra'
                    }`}
                  >
                    {space.number}
                  </span>
                  <span className="text-xs sm:text-sm font-medium tracking-wide">
                    {space.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Vista detallada del espacio activo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-piedra bg-arena">
                <img
                  src={currentSpace.image}
                  alt={currentSpace.imageAlt}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-terracota font-semibold">
                  Ambiente {currentSpace.number} · {currentSpace.subtitle}
                </p>
                <h3 className="font-display text-3xl sm:text-4xl text-algarrobo">
                  {currentSpace.title}
                </h3>
              </div>

              <p className="text-tierra text-base leading-relaxed">
                {currentSpace.description}
              </p>

              <ul className="space-y-2.5 pt-2">
                {currentSpace.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-algarrobo">
                    <span className="w-5 h-5 rounded-full bg-aguaribay/15 text-aguaribay flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-terracota text-cal-light text-xs uppercase tracking-[0.18em] font-medium hover:bg-terracota-dark transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracota"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar disponibilidad</span>
                </a>
                <span className="text-xs text-tierra">
                  Tarifa directa por WhatsApp
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Ficha integral de comodidades anclada a retícula editorial */}
        <div className="pt-12 border-t border-piedra">
          <h3 className="text-xs uppercase tracking-[0.22em] text-tierra font-semibold mb-6">
            Servicios incluidos en tu estadía
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-l border-piedra rounded-xl overflow-hidden">
            {cabins.amenities.map((amenity) => (
              <div
                key={amenity.title}
                className="p-5 bg-cal-light border-r border-b border-piedra space-y-1"
              >
                <p className="font-display text-xl text-algarrobo font-medium">
                  {amenity.title}
                </p>
                <p className="text-xs text-tierra">{amenity.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
