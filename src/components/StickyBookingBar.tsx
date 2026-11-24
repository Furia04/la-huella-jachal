import { useState } from 'react';
import { Calendar, ChevronUp, MessageCircle, Minus, Plus, Users } from 'lucide-react';

interface StickyBookingBarProps {
  checkIn: string;
  checkOut: string;
  guests: number;
  whatsappUrl: string;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
  onGuestsChange: (value: number) => void;
}

export function StickyBookingBar({
  checkIn,
  checkOut,
  guests,
  whatsappUrl,
  onCheckInChange,
  onCheckOutChange,
  onGuestsChange,
}: StickyBookingBarProps) {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  return (
    <aside
      aria-label="Barra rápida de consulta de fechas"
      className="fixed bottom-0 inset-x-0 z-30 pointer-events-none px-3 sm:px-6 pb-3 sm:pb-5"
    >
      <div className="max-w-5xl mx-auto pointer-events-auto">
        {/* Barra Desktop inspirada en Lingers */}
        <div className="hidden md:flex items-center justify-between gap-4 px-6 py-3.5 rounded-2xl bg-algarrobo/95 backdrop-blur-md text-cal-light border border-cal-light/15 shadow-xl">
          <div className="flex items-center gap-6 flex-1">
            <label className="flex flex-col flex-1 cursor-pointer">
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-arena/75">
                <Calendar className="w-3 h-3 text-terracota" />
                Ingreso
              </span>
              <input
                type="date"
                aria-label="Ingreso en barra rápida"
                value={checkIn}
                onChange={(e) => onCheckInChange(e.target.value)}
                className="bg-transparent text-sm text-cal-light font-medium pt-0.5 focus:outline-none scheme-dark"
              />
            </label>

            <div className="h-8 w-px bg-cal-light/15" aria-hidden="true" />

            <label className="flex flex-col flex-1 cursor-pointer">
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-arena/75">
                <Calendar className="w-3 h-3 text-terracota" />
                Salida
              </span>
              <input
                type="date"
                aria-label="Salida en barra rápida"
                min={checkIn || undefined}
                value={checkOut}
                onChange={(e) => onCheckOutChange(e.target.value)}
                className="bg-transparent text-sm text-cal-light font-medium pt-0.5 focus:outline-none scheme-dark"
              />
            </label>

            <div className="h-8 w-px bg-cal-light/15" aria-hidden="true" />

            <div className="flex flex-col">
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-arena/75">
                <Users className="w-3 h-3 text-terracota" />
                Huéspedes
              </span>
              <div className="flex items-center gap-2.5 pt-0.5">
                <button
                  type="button"
                  aria-label="Disminuir huéspedes"
                  onClick={() => onGuestsChange(Math.max(1, guests - 1))}
                  className="w-6 h-6 rounded-full bg-cal-light/10 hover:bg-cal-light/20 flex items-center justify-center text-cal-light transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-sm font-medium min-w-[1.25rem] text-center">
                  {guests}
                </span>
                <button
                  type="button"
                  aria-label="Aumentar huéspedes"
                  onClick={() => onGuestsChange(Math.min(12, guests + 1))}
                  className="w-6 h-6 rounded-full bg-cal-light/10 hover:bg-cal-light/20 flex items-center justify-center text-cal-light transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          <a
            href={whatsappUrl}
            data-testid="sticky-whatsapp-cta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-terracota hover:bg-terracota-dark text-cal-light text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200 active:scale-[0.98] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arena"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

        {/* Barra Compacta Expandible para Móviles */}
        <div className="md:hidden rounded-2xl bg-algarrobo/95 backdrop-blur-md text-cal-light border border-cal-light/15 shadow-xl overflow-hidden">
          {mobileExpanded && (
            <div className="p-4 space-y-3 border-b border-cal-light/15">
              <div className="grid grid-cols-2 gap-3">
                <label className="flex flex-col text-xs text-arena/80">
                  <span>Ingreso</span>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => onCheckInChange(e.target.value)}
                    className="mt-1 px-2.5 py-2 rounded-lg bg-white/10 text-cal-light text-xs scheme-dark"
                  />
                </label>
                <label className="flex flex-col text-xs text-arena/80">
                  <span>Salida</span>
                  <input
                    type="date"
                    min={checkIn || undefined}
                    value={checkOut}
                    onChange={(e) => onCheckOutChange(e.target.value)}
                    className="mt-1 px-2.5 py-2 rounded-lg bg-white/10 text-cal-light text-xs scheme-dark"
                  />
                </label>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-arena/80">Personas: {guests}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onGuestsChange(Math.max(1, guests - 1))}
                    className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onGuestsChange(Math.min(12, guests + 1))}
                    className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="p-2.5 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => setMobileExpanded((prev) => !prev)}
              className="px-3 py-2 text-left flex items-center gap-2 text-xs text-arena"
            >
              <ChevronUp
                className={`w-4 h-4 transition-transform ${
                  mobileExpanded ? 'rotate-180' : ''
                }`}
              />
              <span>{mobileExpanded ? 'Ocultar fechas' : 'Elegir fechas'}</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-terracota text-cal-light text-xs uppercase tracking-[0.15em] font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Consultar</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
