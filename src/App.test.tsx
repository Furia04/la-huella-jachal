import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('La Huella editorial landing page', () => {
  it('renders brand identity and core Jáchal value proposition without mentioning eventos', () => {
    const { container } = render(<App />);
    expect(screen.getAllByText(/La Huella/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/2 km/i).length).toBeGreaterThan(0);
    expect(container.textContent?.toLowerCase()).not.toContain('evento');
  });

  it('switches between the 01, 02, and 03 cabin spaces interactively', () => {
    render(<App />);
    const tab02 = screen.getByRole('button', { name: /02.*Estar Luminoso en Madera/i });
    fireEvent.click(tab02);
    expect(screen.getByText(/Amplitud de verdadera casa de campo/i)).toBeInTheDocument();

    const tab03 = screen.getByRole('button', { name: /03.*Dormitorio & Silencio/i });
    fireEvent.click(tab03);
    expect(screen.getByText(/Descanso profundo lejos del ruido/i)).toBeInTheDocument();
  });

  it('opens and closes the numbered photo gallery lightbox with keyboard Escape', () => {
    render(<App />);
    const openPhotoBtn = screen.getByRole('button', {
      name: /Abrir fotografía 01/i,
    });
    fireEvent.click(openPhotoBtn);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('updates WhatsApp link in sticky booking bar when dates and guests change', () => {
    render(<App />);
    const checkInInput = screen.getByLabelText('Ingreso en barra rápida');
    const checkOutInput = screen.getByLabelText('Salida en barra rápida');
    fireEvent.change(checkInInput, { target: { value: '2026-12-10' } });
    fireEvent.change(checkOutInput, { target: { value: '2026-12-15' } });

    const stickyCta = screen.getByTestId('sticky-whatsapp-cta') as HTMLAnchorElement;
    const decoded = decodeURIComponent(stickyCta.href);
    expect(decoded).toContain('10/12/2026');
    expect(decoded).toContain('15/12/2026');
  });
});
