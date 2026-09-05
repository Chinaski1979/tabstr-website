export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Qué es Tabstr?",
    answer:
      "Tabstr es un sistema de punto de venta (POS) para restaurantes y comercios en Costa Rica. Corre en celular, tablet o computadora, no cobra licencia por dispositivo e incluye facturación electrónica Hacienda 4.4. Lo diseñamos para que el dueño vea ventas, cambie precios y controle el local sin pagar una licencia extra ni amarrarse a un sistema operativo.",
  },
  {
    question: "¿Tabstr funciona con facturación electrónica 4.4 de Hacienda?",
    answer:
      "Sí. Tabstr emite facturas y tiquetes electrónicos en la versión 4.4 del Ministerio de Hacienda, con envío nativo, sin GTI aparte y desde el mismo POS. No hay que exportar a otra app ni mantener un parche de terceros. Si Hacienda actualiza el API, el cambio vive adentro del sistema, no en un módulo suelto.",
  },
  {
    question: "¿Tabstr cobra licencia por dispositivo?",
    answer:
      "No. En Tabstr POS no pagás una licencia por cada caja, tablet o pantalla. Podés tener el punto de venta en la barra, la cocina y el celular del dueño sin que el precio suba por cada dispositivo. Ese modelo es el que queríamos dejar atrás cuando fundamos el producto.",
  },
  {
    question: "¿Necesito comprar hardware nuevo para migrar?",
    answer:
      "No necesariamente. Tabstr funciona en cualquier dispositivo y se integra con el equipo que ya tenés cuando es compatible. Si necesitás impresoras u otros periféricos, te cotizamos opciones claras, sin amarrarte a hardware exclusivo del proveedor. El POS no debería decidir qué computadora podés usar en tu propio negocio.",
  },
  {
    question: "¿Qué tan difícil es migrar desde otro POS?",
    answer:
      "La migración está pensada para que empieces operando, no desde cero. Te pasamos un Excel, cargás tus productos, nosotros los importamos y el día que abrís Tabstr el catálogo ya está listo. La capacitación del personal está incluida. No cobramos un curso aparte para que tu equipo pueda vender el primer día.",
  },
  {
    question: "¿En qué dispositivos funciona Tabstr?",
    answer:
      "En Android, iOS, Windows, macOS y Linux. Un solo sistema en la caja, la cocina o desde donde administres el negocio, sin licencias por pantalla. Si tu mesero usa una tablet y vos una Mac en la casa, ambos entran al mismo Tabstr POS.",
  },
  {
    question: "¿Tabstr registra pagos por SINPE móvil?",
    answer:
      "Sí. Tabstr POS permite capturar y registrar el comprobante de un pago por SINPE móvil en el mismo flujo de venta. No es un apunte en un cuaderno ni una foto suelta en el chat del personal: queda atado a la cuenta. Eso importa en restaurantes y comercios de Costa Rica donde SINPE ya es parte de la caja.",
  },
  {
    question: "¿Sigue funcionando si se va el internet?",
    answer:
      "Sí. Si se cae la conexión, Tabstr sigue operando en el local. Vendés, cobrás y no paralizás el turno. Cuando vuelve la red, el sistema sincroniza. Un POS en Costa Rica que se apaga con el Wi-Fi no es una herramienta: es un riesgo.",
  },
  {
    question: "¿Tabstr es solo para restaurantes?",
    answer:
      "No. Tabstr POS sirve para restaurantes, bares, cafés y comercios en Costa Rica. El hilo común es caja, inventario, facturación electrónica Hacienda 4.4 y control del dueño. Si tu operación es una tienda, una soda o un local con mesas, el mismo sistema cubre el punto de venta.",
  },
  {
    question: "¿Puedo probar Tabstr un mes sin pagar?",
    answer:
      "Sí. Los negocios pueden usar Tabstr un mes gratis para operar de verdad: caja, Hacienda 4.4 y el local en marcha, no una demo de diez minutos. Si encaja, seguís con la suscripción. Si no, no te amarramos a un contrato para “probar”.",
  },
  {
    question: "¿Cómo puedo contactarlos o agendar una demo?",
    answer:
      "Escribinos por el formulario de contacto del sitio o por WhatsApp. Te mostramos cómo quedaría tu local con Tabstr POS y resolvemos dudas de migración, inventario y facturación electrónica Hacienda 4.4. También podés empezar con un mes gratis. No hace falta comprar hardware ni pagar una capacitación para ver si el sistema encaja.",
  },
];
