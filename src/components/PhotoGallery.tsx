import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export function PhotoGallery() {
  const { gallery } = siteConfig;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      } else if (event.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % gallery.length));
      } else if (event.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? 0 : (prev - 1 + gallery.length) % gallery.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, gallery.length]);

  const activeItem = lightboxIndex !== null ? gallery[lightboxIndex] : null;

  return (
    <section id="galeria" className="scroll-mt-20 py-24 sm:py-32 bg-cal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.24em] text-terracota font-semibold">
              Recorrido visual
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-algarrobo">
              Galería fotográfica{' '}
              <span className="italic font-normal text-tierra">01 — 0{gallery.length}</span>
            </h2>
          </div>

          {/* Índice rápido numerado estilo Lingers */}
          <div className="flex flex-wrap gap-1.5">
            {gallery.map((item, idx) => (
              <button
                key={item.number}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="px-2.5 py-1 rounded-full text-xs font-medium text-tierra hover:text-algarrobo hover:bg-arena transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota"
              >
                {item.number}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla editorial asimétrica */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {gallery.map((item, idx) => {
            const spanClass =
              idx === 0
                ? 'md:col-span-7 aspect-[16/10]'
                : idx === 1
                  ? 'md:col-span-5 aspect-[4/3] md:aspect-auto'
                  : idx === 2
                    ? 'md:col-span-4 aspect-[4/5]'
                    : idx === 3
                      ? 'md:col-span-4 aspect-[4/5]'
                      : idx === 4
                        ? 'md:col-span-4 aspect-[4/5]'
                        : idx === 5
                          ? 'md:col-span-5 aspect-[4/3]'
                          : 'md:col-span-7 aspect-[16/9]';

            return (
              <button
                key={item.number}
                type="button"
                aria-label={`Abrir fotografía ${item.number}: ${item.caption}`}
                onClick={() => setLightboxIndex(idx)}
                className={`group relative overflow-hidden rounded-2xl border border-piedra bg-arena text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota ${spanClass}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
                    item.cropTop ? 'object-[65%_22%] scale-[1.08]' : 'object-center'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-4">
                  <div>
                    <span className="block font-display italic text-lg text-arena">
                      {item.number}
                    </span>
                    <span className="text-xs sm:text-sm text-cal-light font-medium">
                      {item.caption}
                    </span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-cal-light/20 backdrop-blur-xs text-cal-light flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Expand className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visor Lightbox a pantalla completa */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Fotografía ${activeItem.number}`}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="flex items-center justify-between text-cal-light max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs uppercase tracking-[0.22em] text-arena">
              {activeItem.number} / 0{gallery.length} — {activeItem.caption}
            </span>
            <button
              type="button"
              aria-label="Cerrar galería"
              onClick={() => setLightboxIndex(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-cal-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fotografía anterior"
              onClick={() =>
                setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length)
              }
              className="absolute left-0 sm:left-2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/75 text-cal-light transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <img
              src={activeItem.src}
              alt={activeItem.alt}
              className="max-h-[78vh] max-w-full object-contain rounded-lg"
            />

            <button
              type="button"
              aria-label="Fotografía siguiente"
              onClick={() => setLightboxIndex((lightboxIndex + 1) % gallery.length)}
              className="absolute right-0 sm:right-2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/75 text-cal-light transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center text-xs text-cal-light/65">
            Presiona ESC para salir o usa las flechas para recorrer
          </div>
        </div>
      )}
    </section>
  );
}
