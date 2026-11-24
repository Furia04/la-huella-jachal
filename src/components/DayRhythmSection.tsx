import { siteConfig } from '../data/siteConfig';

export function DayRhythmSection() {
  const { dayRhythm } = siteConfig;

  return (
    <section id="experiencia" className="scroll-mt-20 py-24 sm:py-32 bg-arena/65 border-y border-piedra/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-20">
        {/* Encabezado asimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs uppercase tracking-[0.24em] text-aguaribay font-semibold">
              {dayRhythm.eyebrow}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-algarrobo leading-[1.08]">
              {dayRhythm.title}{' '}
              <span className="italic font-normal text-tierra">{dayRhythm.titleItalic}</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base text-tierra leading-relaxed">
            {dayRhythm.description}
          </p>
        </div>

        {/* Secuencia editorial alternada (evita las 3 tarjetas idénticas en fila) */}
        <div className="space-y-16 lg:space-y-24">
          {dayRhythm.moments.map((moment, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <article
                key={moment.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                <div
                  className={`lg:col-span-7 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="overflow-hidden rounded-2xl border border-piedra bg-cal aspect-[16/10] group">
                    <img
                      src={moment.image}
                      alt={moment.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-5 space-y-4 ${
                    reversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-terracota font-semibold">
                    <span>0{idx + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span>{moment.period}</span>
                  </span>

                  <h3 className="font-display text-3xl sm:text-4xl text-algarrobo leading-tight">
                    {moment.title}
                  </h3>

                  <p className="text-tierra text-base leading-relaxed">
                    {moment.description}
                  </p>

                  <div className="pt-3 border-t border-piedra/80">
                    <span className="text-xs uppercase tracking-[0.15em] text-aguaribay font-medium">
                      {moment.detail}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
