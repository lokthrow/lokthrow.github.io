export interface App {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  icon: string;
  screenshot?: string;
  accent: string;
  tech: string[];
  features: { title: string; text: string }[];
  appStore: string;
  googlePlay: string;
  website?: string;
  privacy: string;
  credits?: string;
}

export const apps: App[] = [
  {
    slug: 'mirabolsa',
    name: 'MiraBolsa',
    tagline: 'Tu puesto en las bolsas de interinos, sin revisar portales a mano.',
    summary:
      'MiraBolsa consulta las fuentes públicas de cada comunidad autónoma y te enseña tu posición en las bolsas docentes de primaria, secundaria, FP y otros cuerpos. Guarda el histórico en el propio móvil y lo dibuja en gráficas para que veas cómo avanzas.',
    icon: '/img/mirabolsa-icon.webp',
    screenshot: '/img/mirabolsa-screen.webp',
    accent: '#2563eb',
    tech: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Actualizaciones OTA'],
    features: [
      {
        title: 'Nueve comunidades',
        text: 'Andalucía, Castilla y León, Ceuta, Madrid, Extremadura, Galicia, Islas Baleares, Melilla y Navarra.',
      },
      {
        title: 'Varios candidatos y bolsas',
        text: 'Sigue a la vez tus bolsas y las de otras personas, cada una con su evolución.',
      },
      {
        title: 'Histórico en gráficas',
        text: 'Cada consulta se guarda en local y se muestra en una gráfica con la tendencia.',
      },
      {
        title: 'Datos en tu dispositivo',
        text: 'Las posiciones se guardan en SQLite y las credenciales en el llavero del sistema.',
      },
    ],
    appStore: 'https://apps.apple.com/es/app/mirabolsa/id6444266637',
    googlePlay: 'https://play.google.com/store/apps/details?id=es.jubilaciontranquila.mirabolsa',
    website: 'https://mirabolsa.es',
    privacy: 'https://mirabolsa.es/legal',
  },
  {
    slug: 'para-y-siente',
    name: 'Para y Siente',
    tagline: 'Un diario emocional para cuidar tu salud mental.',
    summary:
      'Para y Siente te ayuda a parar un momento, ponerle nombre a lo que sientes y entender por qué. Capturas una vivencia con una foto, eliges la emoción principal y la secundaria, reflexionas con ayuda de unas preguntas guiadas y escuchas una meditación pensada para esa emoción. Con el uso diario sumas puntos, subes de nivel y consigues insignias.',
    icon: '/img/para-y-siente-icon.webp',
    screenshot: '/img/para-y-siente-screen.webp',
    accent: '#0ea5a4',
    tech: ['React Native', 'Expo', 'TypeScript', 'Notificaciones locales', 'Biometría', 'Gamificación'],
    features: [
      {
        title: 'Un lugar íntimo',
        text: 'Se abre con tu huella o con un PIN, y lo que escribes no sale del teléfono.',
      },
      {
        title: 'Reflexión guiada',
        text: 'La «varita mágica» te hace preguntas para entender qué ha despertado cada emoción.',
      },
      {
        title: 'Meditaciones',
        text: 'Una meditación guiada por emoción, con ejercicios para integrarla y soltarla.',
      },
      {
        title: 'Protectores de la salud',
        text: 'Actividades diarias para mantener el equilibrio emocional, además del «emociómetro».',
      },
      {
        title: 'Niveles e insignias',
        text: 'La gamificación convierte el autocuidado en un hábito que apetece mantener.',
      },
    ],
    appStore: 'https://apps.apple.com/es/app/para-y-siente/id6474931925',
    googlePlay: 'https://play.google.com/store/apps/details?id=es.paraysiente',
    privacy: '/apps/para-y-siente/privacidad',
    credits:
      'La he creado junto a Mónica, psicóloga, que ha puesto el contenido y la base sobre emociones y desarrollo personal. Yo me he encargado del desarrollo y la gamificación.',
  },
  {
    slug: 'tdiary',
    name: 'TDiary',
    tagline: 'Tu diario de entrenamientos, tengas o no reloj inteligente.',
    summary:
      'TDiary nació para acercar el seguimiento deportivo a todo el mundo, tengas o no reloj inteligente y lleves el móvil encima o lo dejes en casa. Puedes registrar cualquier sesión, incluso días después de terminarla, apuntar cómo te has sentido y cualquier detalle que no quieras olvidar: un saque directo, una marca personal en los bolos o más peso que nunca en el gimnasio.',
    icon: '/img/tdiary-icon.png',
    screenshot: '/img/tdiary-screen.webp',
    accent: '#f97316',
    tech: ['Android (Java)', 'iOS (Swift)', 'HealthKit'],
    features: [
      {
        title: 'Cientos de actividades',
        text: 'Elige entre cientos de actividades e intensidades, desde correr hasta esgrima, con buscador.',
      },
      {
        title: 'Calorías y sensaciones',
        text: 'Calcula las calorías gastadas a partir de tu perfil y registra tu nivel de esfuerzo y tus notas.',
      },
      {
        title: 'Ejercicios aleatorios',
        text: 'Rutinas sugeridas suaves, moderadas o intensas para hacer cuando quieras.',
      },
      {
        title: 'Objetivos',
        text: 'Márcate objetivos semanales, mensuales o anuales de calorías, sesiones y peso.',
      },
      {
        title: 'Estadísticas',
        text: 'Resumen por semana, mes y año con gráficas para comprobar tu progreso.',
      },
      {
        title: 'Modo oscuro y compartir',
        text: 'Interfaz en modo oscuro y opción de compartir tus resultados por WhatsApp o Telegram.',
      },
    ],
    appStore: 'https://apps.apple.com/es/app/tdiary-diario-entrenamiento/id1484978288',
    googlePlay: 'https://play.google.com/store/apps/details?id=app.tdiary',
    privacy: '/apps/tdiary/privacidad',
  },
];

export const getApp = (slug: string) => apps.find((app) => app.slug === slug);
