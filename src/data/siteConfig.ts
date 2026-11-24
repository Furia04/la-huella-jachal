export interface HeroSlide {
  number: string;
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
}

export interface DayMoment {
  id: string;
  period: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  detail: string;
}

export interface CabinSpace {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export interface GalleryItem {
  number: string;
  src: string;
  alt: string;
  caption: string;
  aspect: 'wide' | 'tall' | 'standard';
  cropTop?: boolean;
}

export const siteConfig = {
  name: 'La Huella',
  tagline: 'Casas de Campo',
  locationShort: 'San José de Jáchal · San Juan',
  regionLabel: 'Valle de Jáchal · Precordillera Sanjuanina',
  distanceToCenter: 'A solo 2 km del centro de San José de Jáchal',

  // =========================================================================
  // DATOS RÁPIDOS DE ACTUALIZAR UNA VEZ APROBADO EL PROYECTO:
  // =========================================================================
  whatsappPhone: '5492640000000',
  whatsappDisplay: '+54 9 264 · Atención directa',
  unitsCount: 3,
  capacityLabel: 'Capacidad familiar · Consultar plazas',
  bedroomsLabel: 'Casa completa equipada · Ambientes amplios',
  checkInOutHint: 'Estadías flexibles todo el año · Consulta directa sin intermediarios',

  hero: {
    eyebrow: 'Tu refugio entre montañas en Jáchal',
    headlineMain: 'Quédate un poco más.',
    headlineItalic: 'Donde el silencio abraza la montaña.',
    badgeTop: 'Trato directo con sus dueños',
    badgeCta: 'Consultar estadía',
    slides: [
      {
        number: '01',
        src: '/images/4.png',
        alt: 'Fachada terracota de una casa de campo en La Huella rodeada de árboles al atardecer',
        caption: 'Arquitectura regional entre senderos arbolados',
        objectPosition: 'center center',
      },
      {
        number: '02',
        src: '/images/6.png',
        alt: 'Galería techada en caña con llamador de viento mirando al parque y las montañas de Jáchal',
        caption: 'Galerías de caña pensadas para mirar sin apuro',
        objectPosition: 'center center',
      },
      {
        number: '03',
        src: '/images/2.png',
        alt: 'Pileta de agua cristalina rodeada de aguaribayes y vegetación en La Huella',
        caption: 'Un oasis fresco bajo la arboleda sanjuanina',
        objectPosition: 'center center',
      },
      {
        number: '04',
        src: '/images/1.png',
        alt: 'Galería exterior privada con parrillero individual de ladrillo visto y techo de rollizos',
        caption: 'Parrillero propio en la galería de cada casa',
        objectPosition: 'center center',
      },
    ] as HeroSlide[],
  },

  intro: {
    eyebrow: 'El espíritu del lugar',
    title: 'Pequeño, sereno y auténtico.',
    titleItalic: 'Solo tres casas en medio de la calma.',
    lead: 'La Huella no es un complejo masivo de paso. Es un rincón retirado al pie de los cerros de San José de Jáchal, con apenas tres casas de campo iguales donde el silencio tiene lugar propio.',
    body: 'Nos gusta así: pocas unidades significan más espacio, más intimidad en la pileta y tiempo real para recibir a cada huésped como en casa. Estás lo suficientemente lejos para desconectar de todo el ruido cotidiano, y a la vez a solo 2 kilómetros del centro de Jáchal cuando quieras salir a recorrer.',
    stats: [
      { value: '03', label: 'Casas de campo iguales' },
      { value: '2 km', label: 'Del centro de Jáchal' },
      { value: '100%', label: 'Atendido por sus dueños' },
    ],
  },

  dayRhythm: {
    eyebrow: 'El ritmo del día',
    title: 'Mañanas lentas, tardes de agua',
    titleItalic: 'y noches al calor de las brasas.',
    description:
      'Aquí el verdadero lujo está en la simpleza: despertar sin horarios, alternar entre la sombra de los árboles y la pileta, armar un partido en la cancha de vóley y cerrar el día frente al fuego.',
    moments: [
      {
        id: 'manana',
        period: 'Por la mañana',
        title: 'El primer mate bajo el techo de caña',
        description:
          'La luz limpia de San Juan entra suave entre los algarrobos y aguaribayes. La galería fresca invita a desayunar afuera, leer un rato o simplemente escuchar el viento en los llamadores de madera.',
        image: '/images/6.png',
        imageAlt: 'Vista desde la mesa exterior bajo el techo de caña hacia el parque soleado',
        detail: 'Sombra natural y aire puro de precordillera',
      },
      {
        id: 'tarde',
        period: 'Por la tarde',
        title: 'Pileta entre árboles y cancha de vóley',
        description:
          'Cuando el sol jachallero se hace sentir, la pileta rodeada de verde se vuelve el corazón del predio. Y cuando cae la tarde, la cancha de vóley reúne a la familia o los amigos antes del atardecer.',
        image: '/images/2.png',
        imageAlt: 'Pileta amplia rodeada de arboleda verde con cancha de vóley al fondo',
        detail: 'Pileta compartida entre solo 3 unidades + Cancha de vóley',
      },
      {
        id: 'noche',
        period: 'Al caer el sol',
        title: 'Parrillero propio bajo el cielo estrellado',
        description:
          'Cada casa cuenta con su propia galería techada y un generoso asador de ladrillo visto con mesada de apoyo. Sin turnos ni apuros: tus brasas, tu mesa y la noche despejada de montaña.',
        image: '/images/1.png',
        imageAlt: 'Galería privada techada con parrillero de ladrillo visto y farol colonial',
        detail: 'Asador individual techado en cada casa',
      },
    ] as DayMoment[],
  },

  cabins: {
    eyebrow: 'Nuestras unidades',
    title: 'Tres casas iguales,',
    titleItalic: 'pensadas para habitar sin prisa.',
    summary:
      'Construidas con muros cálidos que conservan la frescura en verano y el abrigo en invierno, techos altos de rollizos de madera y ambientes amplios tipo casa para descansar con total independencia.',
    spaces: [
      {
        id: 'galeria',
        number: '01',
        title: 'Galería Techada & Parrillero',
        subtitle: 'Vida al aire libre privada',
        description:
          'Una extensión natural de la casa bajo caizo y rollizos de madera. Equipada con parrillero propio de ladrillo visto, mesada lateral, iluminación cálida de hierro forjado y salida directa al parque.',
        highlights: [
          'Parrillero individual de ladrillo visto',
          'Techo de caña y rollizos con sombra fresca',
          'Cochera cómoda dentro del predio',
        ],
        image: '/images/1.png',
        imageAlt: 'Galería exterior con parrillero de ladrillo visto y carpintería de madera maciza',
      },
      {
        id: 'estar',
        number: '02',
        title: 'Estar Luminoso en Madera',
        subtitle: 'Amplitud de verdadera casa de campo',
        description:
          'Techos altos inclinados en madera a la vista, muros texturados a la cal y carpintería repartida que deja pasar la luz del parque. Un ambiente fresco y despejado con aire acondicionado, TV y Wi-Fi.',
        highlights: [
          'Techos altos de rollizos y machimbre',
          'Aire acondicionado y conexión Wi-Fi',
          'Televisión y mobiliario en madera maciza',
        ],
        image: '/images/5.png',
        imageAlt: 'Estar interior con techo de rollizos de madera, futón y ventanales luminosos',
      },
      {
        id: 'descanso',
        number: '03',
        title: 'Dormitorio & Silencio de Montaña',
        subtitle: 'Descanso profundo lejos del ruido',
        description:
          'Cuando cae la noche en esta zona retirada de Jáchal, el silencio es absoluto. Habitaciones serenas de tonos tierra con iluminación puntual cálida para dormir de corrido y despertar renovado.',
        highlights: [
          'Entorno silencioso alejado del tránsito',
          'Iluminación cálida de lectura en cabecera',
          'Postigones oscuros para un descanso pleno',
        ],
        image: '/images/3.png',
        imageAlt: 'Dormitorio con cama matrimonial blanca, paredes cálidas y apliques de madera y hierro',
      },
    ] as CabinSpace[],
    amenities: [
      { title: 'Parrillero propio', detail: 'Techado en cada galería' },
      { title: 'Pileta arbolada', detail: 'Rodeada de sombra natural' },
      { title: 'Cochera', detail: 'Estacionamiento en el predio' },
      { title: 'Aire acondicionado', detail: 'Climatización interior' },
      { title: 'Wi-Fi incluido', detail: 'Conectividad en el complejo' },
      { title: 'Televisión', detail: 'En el área de estar' },
      { title: 'Cancha de vóley', detail: 'Espacio recreativo al aire libre' },
      { title: 'Dueños en el lugar', detail: 'Atención cercana permanente' },
    ],
  },

  hostsQuote: {
    quote:
      'Vivimos en el mismo predio porque nos gusta recibir en persona, cuidar la tranquilidad de cada rincón y estar cerca cuando nuestros huéspedes necesitan una recomendación.',
    author: 'Anfitriones de La Huella · San José de Jáchal',
    closingTitle: 'Aquí el tiempo baja un cambio.',
    closingBody:
      'Ya sea una escapada de fin de semana o varios días de descanso en familia, escríbenos directo por WhatsApp para consultar disponibilidad y coordinar tu llegada sin comisiones ni intermediarios.',
  },

  gallery: [
    {
      number: '01',
      src: '/images/4.png',
      alt: 'Casa de campo color terracota entre árboles y palmeras al atardecer',
      caption: 'Arquitectura cuyana entre senderos verdes',
      aspect: 'wide',
    },
    {
      number: '02',
      src: '/images/2.png',
      alt: 'Pileta de verano rodeada de árboles frondosos',
      caption: 'La pileta bajo la frescura de los árboles',
      aspect: 'wide',
    },
    {
      number: '03',
      src: '/images/5.png',
      alt: 'Interior de estar con techos de rollizos y luz de tarde',
      caption: 'Calidez interior en madera y muros a la cal',
      aspect: 'tall',
    },
    {
      number: '04',
      src: '/images/1.png',
      alt: 'Galería con techo de caña y parrillero individual',
      caption: 'Galería privada y parrillero de ladrillo visto',
      aspect: 'standard',
    },
    {
      number: '05',
      src: '/images/6.png',
      alt: 'Llamador de viento en la galería mirando hacia los árboles y cerros',
      caption: 'Tardes doradas frente al parque',
      aspect: 'standard',
    },
    {
      number: '06',
      src: '/images/3.png',
      alt: 'Dormitorio matrimonial con luz tenue cálida',
      caption: 'Habitaciones serenas para desconectar',
      aspect: 'tall',
    },
    {
      number: '07',
      src: '/images/7.png',
      alt: 'Ingreso a La Huella con la cordillera de San José de Jáchal de fondo',
      caption: 'Rodeados por la imponente cordillera de Jáchal',
      aspect: 'wide',
      cropTop: true,
    },
  ] as GalleryItem[],
};
