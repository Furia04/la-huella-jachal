import { useEffect, useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface HeroCarouselProps {
  whatsappUrl: string;
}

export function HeroCarousel({ whatsappUrl }: HeroCarouselProps) {
  const { slides, eyebrow, headlineMain, headlineItalic, badgeTop, badgeCta } = siteConfig.hero;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[activeIndex];

  return (
    <section
      id="inicio"
      className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-end overflow-hidden bg-algarrobo"
    >
      {/* Secuencia fotográfica a pantalla completa */}
      {slides.map((slide, idx) => (
        <div
          key={slide.number}
          aria-hidden={idx !== activeIndex}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            idx === activeIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            style={{ objectPosition: slide.objectPosition || 'center' }}
            className="w-full h-full object-cover scale-[1.02] transition-transform duration-[6000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/35" />
        </div>
      ))}

      {/* Contenido editorial superpuesto */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 pb-28 sm:pb-32 pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 text-cal-light/90 text-xs uppercase tracking-[0.24em] font-medium">
              <MapPin className="w-3.5 h-3.5 text-terracota" />
              <span>{eyebrow}</span>
            </div>

            <h1 className="font-display text-cal-light text-5xl sm:text-6xl lg:text-7xl leading-[1.03] tracking-tight">
              <span className="block font-normal">{headlineMain}</span>
              <span className="block italic font-normal text-arena/95 mt-1">
                {headlineItalic}
              </span>
            </h1>

            <p className="text-cal-light/85 text-sm sm:text-base max-w-xl leading-relaxed pt-1">
              {siteConfig.locationShort} — {siteConfig.distanceToCenter}. Tres casas de campo
              rodeadas de montañas para descansar de verdad.
            </p>
          </div>

          {/* Sello lateral estilo Lingers ("Direct booking / hosts") */}
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col justify-between p-6 rounded-2xl bg-cal/95 backdrop-blur-md text-algarrobo border border-cal-light/40 max-w-xs w-full transition-all duration-200 hover:-translate-y-0.5 hover:bg-cal-light active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-tierra font-medium">
                {badgeTop}
              </span>
              <div className="mt-4 flex items-center justify-between gap-4 border-t border-piedra pt-3">
                <span className="font-display text-2xl italic text-algarrobo">
                  {badgeCta}
                </span>
                <span className="w-9 h-9 rounded-full bg-terracota text-cal-light flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Selector numerado inferior (01 — 04) + epígrafe de la toma actual */}
        <div className="mt-10 pt-5 border-t border-cal-light/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3" role="tablist" aria-label="Escenas de portada">
            {slides.map((slide, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={slide.number}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-xs tracking-[0.2em] uppercase px-2.5 py-1 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota ${
                    isActive
                      ? 'bg-cal-light text-algarrobo font-semibold'
                      : 'text-cal-light/70 hover:text-cal-light'
                  }`}
                >
                  {slide.number}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-cal-light/75 tracking-wide font-sans">
            {currentSlide.number} / 0{slides.length} — {currentSlide.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
