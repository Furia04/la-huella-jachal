import { useMemo, useState } from 'react';
import { siteConfig } from './data/siteConfig';
import { buildWhatsAppUrl } from './utils/whatsapp';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { EditorialIntro } from './components/EditorialIntro';
import { DayRhythmSection } from './components/DayRhythmSection';
import { CabinShowcase } from './components/CabinShowcase';
import { HostsQuoteSection } from './components/HostsQuoteSection';
import { PhotoGallery } from './components/PhotoGallery';
import { LocationAndEnquiry } from './components/LocationAndEnquiry';
import { StickyBookingBar } from './components/StickyBookingBar';
import { Footer } from './components/Footer';

export default function App() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const whatsappUrl = useMemo(
    () =>
      buildWhatsAppUrl({
        phone: siteConfig.whatsappPhone,
        checkIn,
        checkOut,
        guests,
      }),
    [checkIn, checkOut, guests]
  );

  return (
    <div className="min-h-screen flex flex-col bg-cal text-algarrobo">
      <Navbar whatsappUrl={whatsappUrl} />

      <main className="flex-1">
        <HeroCarousel whatsappUrl={whatsappUrl} />
        <EditorialIntro />
        <DayRhythmSection />
        <CabinShowcase whatsappUrl={whatsappUrl} />
        <HostsQuoteSection />
        <PhotoGallery />
        <LocationAndEnquiry
          checkIn={checkIn}
          checkOut={checkOut}
          guests={guests}
          onCheckInChange={setCheckIn}
          onCheckOutChange={setCheckOut}
          onGuestsChange={setGuests}
        />
      </main>

      <Footer whatsappUrl={whatsappUrl} />

      <StickyBookingBar
        checkIn={checkIn}
        checkOut={checkOut}
        guests={guests}
        whatsappUrl={whatsappUrl}
        onCheckInChange={setCheckIn}
        onCheckOutChange={setCheckOut}
        onGuestsChange={setGuests}
      />
    </div>
  );
}
