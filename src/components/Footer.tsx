import { BrandMark } from './BrandMark';
import { siteConfig } from '../data/siteConfig';

interface FooterProps {
  whatsappUrl: string;
}

export function Footer({ whatsappUrl }: FooterProps) {
  return (
    <footer className="bg-algarrobo text-cal-light border-t border-cal-light/10 pt-16 pb-32 sm:pb-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 pb-12 border-b border-cal-light/10">
          <div className="text-center md:text-left space-y-3">
            <BrandMark light />
            <p className="text-xs text-arena/75 max-w-xs pt-2 leading-relaxed">
              {siteConfig.locationShort} · {siteConfig.distanceToCenter}. Tres casas de campo
              atendidas directamente por sus dueños.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.18em] text-arena/80">
            <a href="#espiritu" className="hover:text-white transition-colors">
              El Lugar
            </a>
            <a href="#experiencia" className="hover:text-white transition-colors">
              El Día
            </a>
            <a href="#casas" className="hover:text-white transition-colors">
              Las Casas
            </a>
            <a href="#galeria" className="hover:text-white transition-colors">
              Galería
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracota hover:text-arena transition-colors font-semibold"
            >
              WhatsApp Directo
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-arena/60">
          <p>© {new Date().getFullYear()} La Huella · Casas de Campo · San José de Jáchal.</p>
          <p>Atención directa de sus anfitriones · Sin comisiones de intermediarios.</p>
        </div>
      </div>
    </footer>
  );
}
