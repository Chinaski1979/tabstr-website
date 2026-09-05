export type ComparisonColumnId = "tabstr" | "licensed" | "cloud";

export type ComparisonRow = {
  feature: string;
  tabstr: string;
  licensed: string;
  cloud: string;
};

export const COMPARISON_COLUMNS: ReadonlyArray<{
  id: ComparisonColumnId;
  label: string;
}> = [
  { id: "tabstr", label: "Tabstr POS" },
  { id: "licensed", label: "POS con licencia por dispositivo" },
  { id: "cloud", label: "POS en la nube típico" },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Dispositivos",
    tabstr: "Ilimitados: celular, tablet o PC, sin licencia por pantalla",
    licensed: "Una licencia (y un cobro) por cada caja o tablet",
    cloud: "A veces ilimitados; a menudo un extra por sede o usuario",
  },
  {
    feature: "Hacienda 4.4",
    tabstr: "Nativa en el mismo POS, sin GTI ni app aparte",
    licensed: "Módulo aparte o parche de un tercero",
    cloud: "Variable: a veces nativa, a veces un conector extra",
  },
  {
    feature: "SINPE móvil",
    tabstr: "Captura y registra el comprobante en la venta",
    licensed: "Rara vez nativo; suele quedar fuera del sistema",
    cloud: "Depende del proveedor y del país",
  },
  {
    feature: "Pagos con Bitcoin",
    tabstr: "Nativo en el mismo POS, junto a efectivo, tarjeta y SINPE",
    licensed: "Casi nunca; si existe, es un parche o otra app",
    cloud: "Poco frecuente en POS de Costa Rica",
  },
  {
    feature: "IA para stock",
    tabstr: "Sugerencias según ventas, temporadas y fechas especiales",
    licensed: "No forma parte del producto",
    cloud: "Poco frecuente o como add-on",
  },
  {
    feature: "Hardware",
    tabstr: "Usá el equipo que ya tenés si es compatible",
    licensed: "Amarre frecuente al hardware del proveedor",
    cloud: "Variable; a veces impresoras “aprobadas”",
  },
  {
    feature: "Migración y capacitación",
    tabstr: "Catálogo por Excel y capacitación incluida",
    licensed: "Lenta, cara y a menudo cobrada aparte",
    cloud: "Onboarding extra o curso pago",
  },
  {
    feature: "Primer mes",
    tabstr: "Un mes gratis para operar el local, no solo una demo",
    licensed: "Cobro desde el día uno, a menudo más capacitación",
    cloud: "Prueba corta o tarjeta obligatoria desde el inicio",
  },
];

export const AUDIENCE_FIT = {
  for: [
    "Restaurantes, bares, cafés y comercios en Costa Rica que necesitan un POS con Hacienda 4.4.",
    "Dueños que quieren ver ventas y cambiar precios desde el celular, sin una licencia extra.",
    "Negocios cansados de pagar por cada pantalla o de amarrarse al hardware del proveedor.",
    "Quienes quieren migrar con el catálogo listo el día uno y capacitación incluida.",
  ],
  notFor: [
    "Empresas fuera de Costa Rica que necesitan otro régimen fiscal o de facturación.",
    "Operaciones que buscan un ERP completo (nómina, contabilidad avanzada, planta industrial).",
    "Quienes necesitan un sistema 100% local, sin nube, y no van a emitir comprobantes a Hacienda.",
  ],
} as const;
