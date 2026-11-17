export const SITE_URL = "https://tabstr.net";

export const SITE_NAME = "Tabstr";

export const BRAND_ALTERNATE_NAMES = [
  "Tabstr POS",
  "Tabstr punto de venta",
  "Tabstr Costa Rica",
  "Tabstr Hacienda 4.4",
  "Tabstr restaurantes",
] as const;

export const ENTITY_SENTENCE =
  "Tabstr es un sistema de punto de venta (POS) para restaurantes y comercios en Costa Rica. Corre en celular, tablet o computadora, no cobra licencia por dispositivo e incluye facturación electrónica Hacienda 4.4.";

export const ENTITY_DESCRIPTION =
  "Sistema POS para restaurantes y comercios en Costa Rica, con facturación electrónica Hacienda 4.4.";

export const HOME_TITLE = "Tabstr POS Costa Rica | Punto de venta con Hacienda 4.4";

export const HOME_DESCRIPTION =
  "Tabstr es un POS para restaurantes y comercios en Costa Rica. Facturación electrónica Hacienda 4.4, sin licencia por dispositivo, en celular, tablet o PC.";

export const FREE_MONTH_SENTENCE =
  "Los negocios pueden usar Tabstr un mes gratis para operar de verdad: caja, Hacienda 4.4 y el local en marcha, no una demo de diez minutos.";

export const SOCIAL_PROFILES = [
  "https://www.facebook.com/profile.php?id=61592499518532",
  "https://www.instagram.com/tabstrpos/",
] as const;

export const COMPANY = {
  legalName: "Herso Software Company S.A.",
  parentName: "Hermosa Software",
  parentUrl: "https://hermosasoftware.io",
  email: "contacto@tabstr.net",
  logoPath: "/tabstr-logo-transparent.png",
  ogImagePath: "/Tabstr.png",
  address: {
    addressLocality: "Bahía Ballena",
    addressRegion: "Puntarenas",
    addressCountry: "CR" as const,
  },
};

export const FOUNDER = {
  name: "Jorge Cascante",
  jobTitle: "Fundador",
};

export type JsonLd = Record<string, unknown>;

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, `${SITE_URL}/`).href;
}

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: [...BRAND_ALTERNATE_NAMES],
    legalName: COMPANY.legalName,
    url: SITE_URL,
    logo: absoluteUrl(COMPANY.logoPath),
    email: COMPANY.email,
    description: ENTITY_DESCRIPTION,
    parentOrganization: {
      "@type": "Organization",
      name: COMPANY.parentName,
      url: COMPANY.parentUrl,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.address.addressLocality,
      addressRegion: COMPANY.address.addressRegion,
      addressCountry: COMPANY.address.addressCountry,
    },
    areaServed: {
      "@type": "Country",
      name: "Costa Rica",
    },
    sameAs: [...SOCIAL_PROFILES],
    founder: {
      "@type": "Person",
      name: FOUNDER.name,
      jobTitle: FOUNDER.jobTitle,
    },
  };
}

export function softwareSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    alternateName: [...BRAND_ALTERNATE_NAMES],
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Point of Sale",
    operatingSystem: "Android, iOS, iPadOS, Windows, macOS, Linux",
    url: SITE_URL,
    description: ENTITY_DESCRIPTION,
    offers: {
      "@type": "Offer",
      priceCurrency: "CRC",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: COMPANY.parentName,
      url: COMPANY.parentUrl,
    },
    featureList: [
      "Facturación electrónica 4.4 integrada con Hacienda",
      "Compatible con cualquier dispositivo",
      "Sin licencias por dispositivo",
      "Migración de productos vía Excel",
      "Capacitación incluida",
      "SINPE móvil",
      "Pagos con Bitcoin",
      "Importación de facturas XML para inventario",
      "Sugerencias de stock con IA",
      "Reservas con link propio para que el cliente reserve solo",
      "Control de asistencia con reconocimiento facial",
      "Compatible con iPad",
      "Impresoras por TCP, USB y Bluetooth",
      "API para pedidos del sitio web y de apps de pedidos",
      "Mensajes internos en el encabezado del POS",
    ],
    areaServed: {
      "@type": "Country",
      name: "Costa Rica",
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqPageSchema(
  faqs: ReadonlyArray<{ question: string; answer: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function webPageSchema(options: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    inLanguage: "es-CR",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function articleSchema(options: {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.headline,
    description: options.description,
    image: options.image.startsWith("http")
      ? options.image
      : absoluteUrl(options.image),
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    inLanguage: "es-CR",
    author: {
      "@type": "Person",
      name: FOUNDER.name,
      jobTitle: FOUNDER.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.parentName,
      url: COMPANY.parentUrl,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(COMPANY.logoPath),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(options.path),
    },
  };
}

export const RELATED_PAGES: ReadonlyArray<{
  href: string;
  title: string;
  description: string;
}> = [
  {
    href: "/pos-costa-rica/",
    title: "POS Costa Rica",
    description: "Sistema de punto de venta pensado para el mercado tico.",
  },
  {
    href: "/facturacion-electronica-hacienda-4-4/",
    title: "Hacienda 4.4",
    description: "Facturas y tiquetes electrónicos nativos, sin GTI aparte.",
  },
  {
    href: "/pos-para-restaurantes/",
    title: "POS para restaurantes",
    description: "Mesas, cocina, reservas, SINPE y control de dueño en el mismo sistema.",
  },
  {
    href: "/reservas-restaurantes/",
    title: "Reservas para restaurantes",
    description: "Link propio para Instagram y reservas que caen en el POS.",
  },
  {
    href: "/control-asistencia-pos/",
    title: "Control de asistencia",
    description: "Entrada y salida con reconocimiento facial y reporte de horas.",
  },
  {
    href: "/pedidos-en-linea-pos/",
    title: "Pedidos en línea",
    description: "El sitio o la app manda la orden al POS; el encargado acepta.",
  },
  {
    href: "/impresoras-pos-ipad/",
    title: "iPad e impresoras",
    description: "Tabstr en iPad. Impresoras por TCP, USB y Bluetooth.",
  },
  {
    href: "/pos-para-comercios/",
    title: "POS para comercios",
    description: "Caja, inventario, asistencia y facturación para tiendas, cafés y bares.",
  },
  {
    href: "/migrar-de-pos/",
    title: "Migrar de POS",
    description: "Catálogo por Excel, capacitación incluida y hardware que ya tenés.",
  },
  {
    href: "/sinpe-movil-pos/",
    title: "SINPE móvil",
    description: "Registrá comprobantes de SINPE desde el mismo flujo de venta.",
  },
  {
    href: "/vs-otros-pos/",
    title: "Tabstr vs otros POS",
    description: "Licencias por dispositivo, Hacienda 4.4, reservas, asistencia y hardware.",
  },
  {
    href: "/precios/",
    title: "Precios y planes",
    description: "Sin licencia por pantalla. Cotización según tu operación.",
  },
  {
    href: "/caracteristicas/",
    title: "Características",
    description: "Caja, inventario, reservas, asistencia y facturación en el mismo POS.",
  },
  {
    href: "/faq/",
    title: "Preguntas frecuentes",
    description: "Respuestas directas antes de cambiar de punto de venta.",
  },
];
