import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export function HostsQuoteSection() {
  const { hostsQuote } = siteConfig;

  return (
    <section className="py-24 sm:py-32 bg-algarrobo text-cal-light">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center space-y-12">
        <blockquote className="space-y-6">
          <p className="font-display italic text-3xl sm:text-4xl lg:text-5xl leading-[1.22] text-cal-light">
            “{hostsQuote.quote}”
          </p>
          <footer className="text-xs uppercase tracking-[0.24em] text-arena/75 font-medium">
            — {hostsQuote.author}
          </footer>
        </blockquote>

        <div className="pt-12 border-t border-cal-light/15 max-w-2xl mx-auto space-y-5">
          <h2 className="font-display text-3xl sm:text-4xl text-arena">
            {hostsQuote.closingTitle}
          </h2>
          <p className="text-sm sm:text-base text-cal-light/80 leading-relaxed">
            {hostsQuote.closingBody}
          </p>
          <div className="pt-2">
            <a
              href="#ubicacion"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-terracota hover:text-arena transition-colors font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota rounded-xs"
            >
              <span>Hacer una consulta sin compromiso</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
