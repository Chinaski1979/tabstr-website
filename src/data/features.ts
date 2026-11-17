export type FeatureIcon =
  | "receipt"
  | "offline"
  | "phone"
  | "xml"
  | "printer"
  | "globe"
  | "calendar"
  | "face"
  | "bitcoin"
  | "megaphone";

export type FeatureVisual = "invoice" | "offline" | "sinpe";

/** `xl` spans two columns and two rows, `lg` spans two columns. */
export type FeatureSize = "sm" | "lg" | "xl";

export type Feature = {
  title: string;
  description: string;
  icon: FeatureIcon;
  href?: string;
  size: FeatureSize;
  visual?: FeatureVisual;
};

export const FEATURES: Feature[] = [
  {
    title: "Facturación electrónica Hacienda 4.4",
    description:
      "Facturas y tiquetes electrónicos con el API versión 4.4 de Hacienda, desde el mismo POS. Sin GTI aparte, sin exportar a otra app.",
    icon: "receipt",
    href: "/facturacion-electronica-hacienda-4-4/",
    size: "xl",
    visual: "invoice",
  },
  {
    title: "Importá facturas XML",
    description: "Cargá la factura XML del proveedor y el inventario se actualiza solo.",
    icon: "xml",
    size: "sm",
  },
  {
    title: "Impresoras sin amarres",
    description: "TCP, USB y Bluetooth, también en iPad.",
    icon: "printer",
    href: "/impresoras-pos-ipad/",
    size: "sm",
  },
  {
    title: "SINPE móvil en la venta",
    description:
      "Capturá y registrá el comprobante del pago por SINPE en el mismo flujo de venta. Nada de fotos sueltas en el chat del personal.",
    icon: "phone",
    href: "/sinpe-movil-pos/",
    size: "lg",
    visual: "sinpe",
  },
  {
    title: "Reservas",
    description: "Creálas en Tabstr o compartí el link del local para que el cliente reserve solo.",
    icon: "calendar",
    href: "/reservas-restaurantes/",
    size: "sm",
  },
  {
    title: "Si se va el internet, sigue funcionando",
    description:
      "Vendés y cobrás sin conexión. Cuando vuelve la red, Tabstr sincroniza todo. El turno no se detiene.",
    icon: "offline",
    size: "lg",
    visual: "offline",
  },
  {
    title: "Pedidos en línea por API",
    description: "Los pedidos del sitio o de otra app entran directo al POS.",
    icon: "globe",
    href: "/pedidos-en-linea-pos/",
    size: "sm",
  },
  {
    title: "Asistencia con el rostro",
    description: "El personal marca entrada y salida con reconocimiento facial, con reporte de horas.",
    icon: "face",
    href: "/control-asistencia-pos/",
    size: "sm",
  },
  {
    title: "Pagos con Bitcoin",
    description: "Junto a efectivo, tarjeta y SINPE, en el mismo POS.",
    icon: "bitcoin",
    size: "sm",
  },
  {
    title: "Avisos para el turno",
    description: "El mensaje del admin aparece en el encabezado del POS para que todo el equipo lo vea.",
    icon: "megaphone",
    size: "sm",
  },
];
