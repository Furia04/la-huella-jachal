import { describe, expect, it } from 'vitest';
import { buildWhatsAppUrl, formatDateEs } from './whatsapp';

describe('formatDateEs', () => {
  it('converts ISO YYYY-MM-DD into DD/MM/YYYY format without timezone shift', () => {
    expect(formatDateEs('2026-12-15')).toBe('15/12/2026');
  });

  it('returns empty string for invalid or empty input', () => {
    expect(formatDateEs('')).toBe('');
    expect(formatDateEs('invalid')).toBe('');
  });
});

describe('buildWhatsAppUrl', () => {
  it('builds clean wa.me link with default greeting when only phone is provided', () => {
    const url = buildWhatsAppUrl({ phone: '+54 9 264 412-3456' });
    expect(url.startsWith('https://wa.me/5492644123456?text=')).toBe(true);
    const decoded = decodeURIComponent(url.split('?text=')[1]);
    expect(decoded).toContain('La Huella · Casas de Campo');
    expect(decoded).not.toContain('Ingreso:');
  });

  it('formats valid check-in and check-out dates when checkOut is after checkIn', () => {
    const url = buildWhatsAppUrl({
      phone: '5492640000000',
      checkIn: '2026-12-20',
      checkOut: '2026-12-26',
    });
    const decoded = decodeURIComponent(url.split('?text=')[1]);
    expect(decoded).toContain('• Ingreso: 20/12/2026');
    expect(decoded).toContain('• Salida: 26/12/2026');
  });

  it('guards against checkOut earlier than or equal to checkIn by only including checkIn', () => {
    const url = buildWhatsAppUrl({
      phone: '5492640000000',
      checkIn: '2026-12-20',
      checkOut: '2026-12-18',
    });
    const decoded = decodeURIComponent(url.split('?text=')[1]);
    expect(decoded).toContain('• Fecha estimada de ingreso: 20/12/2026');
    expect(decoded).not.toContain('• Salida:');
  });

  it('pluralizes guest count accurately and encodes Spanish accents', () => {
    const singleUrl = buildWhatsAppUrl({
      phone: '5492640000000',
      guests: 1,
      guestName: 'Martín',
      notes: 'Viajamos a Jáchal con niños',
    });
    const singleDecoded = decodeURIComponent(singleUrl.split('?text=')[1]);
    expect(singleDecoded).toContain('• Huéspedes: 1 persona');
    expect(singleDecoded).toContain('• Nombre: Martín');
    expect(singleDecoded).toContain('• Consulta: Viajamos a Jáchal con niños');

    const multiUrl = buildWhatsAppUrl({
      phone: '5492640000000',
      guests: 4,
    });
    const multiDecoded = decodeURIComponent(multiUrl.split('?text=')[1]);
    expect(multiDecoded).toContain('• Huéspedes: 4 personas');
  });
});
