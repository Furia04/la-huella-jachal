export interface EnquiryPayload {
  phone: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  guestName?: string;
  notes?: string;
}

export function formatDateEs(isoDate?: string): string {
  if (!isoDate) return '';
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate.trim());
  if (!match) return '';
  const [, year, month, day] = match;
  return `${day}/${month}/${year}`;
}

export function buildWhatsAppUrl(payload: EnquiryPayload): string {
  const cleanPhone = payload.phone.replace(/\D/g, '');
  const lines: string[] = [
    '¡Hola! Quisiera consultar disponibilidad y tarifa en *La Huella · Casas de Campo*.',
  ];

  if (payload.guestName?.trim()) {
    lines.push(`• Nombre: ${payload.guestName.trim()}`);
  }

  const formattedIn = formatDateEs(payload.checkIn);
  const formattedOut = formatDateEs(payload.checkOut);

  if (
    formattedIn &&
    formattedOut &&
    payload.checkIn &&
    payload.checkOut &&
    payload.checkOut > payload.checkIn
  ) {
    lines.push(`• Ingreso: ${formattedIn}`);
    lines.push(`• Salida: ${formattedOut}`);
  } else if (formattedIn) {
    lines.push(`• Fecha estimada de ingreso: ${formattedIn}`);
  }

  if (payload.guests && payload.guests > 0) {
    lines.push(
      `• Huéspedes: ${payload.guests} ${payload.guests === 1 ? 'persona' : 'personas'}`
    );
  }

  if (payload.notes?.trim()) {
    lines.push(`• Consulta: ${payload.notes.trim()}`);
  }

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(lines.join('\n'))}`;
}
