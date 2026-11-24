import { useState } from 'react';
import { Compass, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface LocationAndEnquiryProps {
  checkIn: string;
  checkOut: string;
  guests: number;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
  onGuestsChange: (value: number) => void;
}

export function LocationAndEnquiry({
  checkIn,
  checkOut,
  guests,
  onCheckInChange,
  onCheckOutChange,
  onGuestsChange,
}: LocationAndEnquiryProps) {
  const [guestName, setGuestName] = useState('');
  const [notes, setNotes] = useState('');

  const directEnquiryUrl = buildWhatsAppUrl({
    phone: siteConfig.whatsappPhone,
    checkIn,
    checkOut,
    guests,
    guestName,
    notes,
  });

  return (
    <section
      id="ubicacion"
      className="scroll-mt-20 py-24 sm:py-32 bg-arena/70 border-t border-piedra pb-36 sm:pb-40"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columna izquierda: Ubicación en San José de Jáchal */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.24em] text-aguaribay font-semibold">
                Ubicación estratégica
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-algarrobo leading-[1.08]">
                Lejos del ruido.{' '}
                <span className="italic font-normal text-tierra">
                  A 2 km del centro de Jáchal.
                </span>
              </h2>
              <p className="text-tierra text-base leading-relaxed">
                Ubicadas en una zona serena rodeada por los cerros de{' '}
                <strong className="font-medium text-algarrobo">San José de Jáchal</strong>,
                nuestras casas ofrecen desconexión absoluta sin perder la comodidad de llegar en
                menos de 5 minutos a comercios, restaurantes y rutas turísticas de la región.
              </p>
            </div>

            {/* Postal panorámica de cordillera */}
            <div className="overflow-hidden rounded-2xl border border-piedra bg-cal aspect-[16/9] relative">
              <img
                src="images/7.png"
                alt="Paisaje de montañas en el ingreso a La Huella en San José de Jáchal"
                className="w-full h-full object-cover object-[70%_20%] scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-cal-light text-xs">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-terracota" />
                  San José de Jáchal, Provincia de San Juan
                </span>
                <span className="hidden sm:inline text-arena/90">RN 150 / RN 40</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-cal border border-piedra space-y-1.5">
                <div className="flex items-center gap-2 text-aguaribay text-xs uppercase tracking-[0.16em] font-semibold">
                  <Compass className="w-4 h-4" />
                  <span>Cercanía real</span>
                </div>
                <p className="text-sm text-algarrobo font-medium">
                  A 2 km de la plaza principal de Jáchal
                </p>
                <p className="text-xs text-tierra">
                  Acceso rápido y entorno natural despejado.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-cal border border-piedra space-y-1.5">
                <div className="flex items-center gap-2 text-terracota text-xs uppercase tracking-[0.16em] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Trato de dueños</span>
                </div>
                <p className="text-sm text-algarrobo font-medium">
                  Coordinación directa de llegada
                </p>
                <p className="text-xs text-tierra">
                  Te enviamos ubicación exacta por WhatsApp al confirmar.
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha: Consulta directa sin compromiso */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-10 rounded-3xl bg-cal-light border border-piedra shadow-xs space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.22em] text-terracota font-semibold">
                  Consulta sin compromiso
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-algarrobo">
                  Prepara tu consulta por WhatsApp
                </h3>
                <p className="text-sm text-tierra leading-relaxed">
                  Completa los datos estimados de tu viaje y se abrirá una conversación directa
                  con los dueños de La Huella con el mensaje listo para enviar.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="block text-xs uppercase tracking-[0.16em] text-tierra font-medium mb-1.5"
                  >
                    Tu nombre
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Ej. Laura Gómez"
                    className="w-full px-4 py-3 rounded-xl bg-cal border border-piedra text-sm text-algarrobo placeholder:text-tierra/50 focus:outline-none focus:ring-2 focus:ring-terracota"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-checkin"
                      className="block text-xs uppercase tracking-[0.16em] text-tierra font-medium mb-1.5"
                    >
                      Fecha de ingreso
                    </label>
                    <input
                      id="enquiry-checkin"
                      type="date"
                      value={checkIn}
                      onChange={(e) => onCheckInChange(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-cal border border-piedra text-sm text-algarrobo focus:outline-none focus:ring-2 focus:ring-terracota"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="enquiry-checkout"
                      className="block text-xs uppercase tracking-[0.16em] text-tierra font-medium mb-1.5"
                    >
                      Fecha de salida
                    </label>
                    <input
                      id="enquiry-checkout"
                      type="date"
                      min={checkIn || undefined}
                      value={checkOut}
                      onChange={(e) => onCheckOutChange(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-cal border border-piedra text-sm text-algarrobo focus:outline-none focus:ring-2 focus:ring-terracota"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-guests"
                    className="block text-xs uppercase tracking-[0.16em] text-tierra font-medium mb-1.5"
                  >
                    Cantidad de personas
                  </label>
                  <select
                    id="enquiry-guests"
                    value={guests}
                    onChange={(e) => onGuestsChange(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl bg-cal border border-piedra text-sm text-algarrobo focus:outline-none focus:ring-2 focus:ring-terracota"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'persona' : 'personas'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-notes"
                    className="block text-xs uppercase tracking-[0.16em] text-tierra font-medium mb-1.5"
                  >
                    Mensaje adicional (opcional)
                  </label>
                  <textarea
                    id="enquiry-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ej. Viajamos en familia, quisiéramos saber disponibilidad y tarifa por noche..."
                    className="w-full px-4 py-3 rounded-xl bg-cal border border-piedra text-sm text-algarrobo placeholder:text-tierra/50 focus:outline-none focus:ring-2 focus:ring-terracota resize-none"
                  />
                </div>
              </div>

              <a
                href={directEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-terracota text-cal-light text-xs uppercase tracking-[0.2em] font-semibold hover:bg-terracota-dark transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracota"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar consulta por WhatsApp</span>
              </a>

              <p className="text-center text-xs text-tierra">
                {siteConfig.checkInOutHint}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
