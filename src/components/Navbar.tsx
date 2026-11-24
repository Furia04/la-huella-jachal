import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { BrandMark } from './BrandMark';

interface NavbarProps {
  whatsappUrl: string;
}

const navLinks = [
  { href: '#espiritu', label: 'El Lugar' },
  { href: '#experiencia', label: 'El Día' },
  { href: '#casas', label: 'Las Casas' },
  { href: '#galeria', label: 'Galería' },
  { href: '#ubicacion', label: 'Ubicación' },
];

export function Navbar({ whatsappUrl }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-cal/95 backdrop-blur-md border-b border-piedra/70 py-3 shadow-xs'
          : 'bg-gradient-to-b from-black/55 via-black/25 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        <a
          href="#inicio"
          aria-label="La Huella · Ir al inicio"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota rounded-md"
        >
          <BrandMark light={!scrolled && !menuOpen} compact />
        </a>

        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota rounded-xs ${
                scrolled
                  ? 'text-algarrobo/80 hover:text-terracota'
                  : 'text-cal-light/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracota ${
              scrolled
                ? 'bg-terracota text-cal-light hover:bg-terracota-dark'
                : 'bg-cal-light/95 text-algarrobo hover:bg-white'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Consultar</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className={`md:hidden p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota ${
            scrolled || menuOpen ? 'text-algarrobo' : 'text-cal-light'
          }`}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cal border-t border-piedra/60 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-sm uppercase tracking-[0.18em] text-algarrobo font-medium border-b border-piedra/40"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-terracota text-cal-light text-xs uppercase tracking-[0.16em] font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
