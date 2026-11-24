import { siteConfig } from '../data/siteConfig';

export function EditorialIntro() {
  const { intro } = siteConfig;

  return (
    <section id="espiritu" className="scroll-mt-20 py-24 sm:py-32 bg-cal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna narrativa 7/12 */}
          <div className="lg:col-span-7 space-y-8">
            <span className="inline-block text-xs uppercase tracking-[0.24em] text-terracota font-semibold">
              {intro.eyebrow}
            </span>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-algarrobo leading-[1.08] tracking-tight">
              <span className="block">{intro.title}</span>
              <span className="block italic text-tierra font-normal mt-1">
                {intro.titleItalic}
              </span>
            </h2>

            <div className="space-y-5 max-w-2xl text-algarrobo/90 leading-relaxed">
              <p className="text-lg sm:text-xl font-normal text-algarrobo">{intro.lead}</p>
              <p className="text-base text-tierra leading-relaxed">{intro.body}</p>
            </div>

            {/* Métricas editoriales limpias ancladas a retícula */}
            <dl className="grid grid-cols-3 gap-6 pt-8 border-t border-piedra max-w-xl">
              {intro.stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <dt className="text-xs uppercase tracking-[0.14em] text-tierra">
                    {stat.label}
                  </dt>
                  <dd className="font-display text-3xl sm:text-4xl text-algarrobo font-medium">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Composición fotográfica asimétrica 5/12 */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-piedra/80 bg-arena">
              <img
                src="images/4.png"
                alt="Vista exterior de una casa de campo en La Huella al atardecer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Marco superpuesto secundario con aire editorial */}
            <div className="hidden sm:block w-56 -mt-24 -ml-8 relative z-10 rounded-xl overflow-hidden border-4 border-cal bg-arena shadow-md">
              <div className="aspect-[4/3]">
                <img
                  src="images/6.png"
                  alt="Detalle de galería techada en caña y vegetación autóctona"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="px-3 py-2 bg-cal-light text-[11px] text-tierra tracking-wide">
                San José de Jáchal · Precordillera
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
