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
      "No. Tabstr POS sirve para restaurantes, bares, cafés y comercios en Costa Rica. El hilo común es caja, inventario, facturación electrónica Hacienda 4.4 y control del dueño. Si tu operación es una tienda, una soda o un local con mesas, el mismo sistema cubre el punto de venta. Los restaurantes, además, tienen reservas. El control de asistencia del equipo está en el mismo POS.",
  },
  {
    question: "¿Tabstr incluye reservas para restaurantes?",
    answer:
      "Sí. En Tabstr POS podés crear la reserva desde el sistema y cada restaurante tiene su propio link de reservas para compartir en redes. El cliente se reserva solo y las nuevas aparecen en la pestaña de reservas, sin perseguir mensajes de WhatsApp.",
  },
  {
    question: "¿Cómo marca el personal la entrada y la salida?",
    answer:
      "Con reconocimiento facial. El empleado marca entrada y salida con el rostro, sin un PIN que se presta ni una tarjeta que se pierde. Después generás un reporte: quién llegó tarde, quién se fue más temprano y el total de horas, para que pagar el turno sea más claro.",
  },
  {
    question: "¿Tabstr funciona en iPad?",
    answer:
      "Sí. Tabstr POS corre en iPad, iPhone, Android, Windows, macOS y Linux. El iPad de la barra, la tablet de cocina y la computadora de la casa entran al mismo sistema, sin licencia por dispositivo. No hace falta un equipo “aprobado” por el proveedor.",
  },
  {
    question: "¿Qué conexiones de impresora soporta Tabstr?",
    answer:
      "Tabstr imprime por TCP (red), USB y Bluetooth, en iPad, Android, Windows, macOS y Linux. Si tu impresora térmica ya habla uno de esos tres caminos, se puede usar. Los drivers del fabricante están en la página de soporte.",
  },
  {
    question: "¿Puedo conectar pedidos de mi sitio web o de otra app al POS?",
    answer:
      "Sí. Tabstr expone un API para que apps de pedidos y el sitio web del restaurante manden la orden directo al POS. El pedido aparece en caja, no en un chat aparte. El encargado decide si lo acepta y cuánto tarda en estar listo.",
  },
  {
    question: "¿El encargado puede aceptar o rechazar un pedido en línea?",
    answer:
      "Sí. Cuando llega un pedido del sitio o de una app externa, la persona a cargo en Tabstr POS lo acepta o lo rechaza y puede indicar el tiempo de preparación. La orden no entra sola a cocina sin esa decisión.",
  },
  {
    question: "¿Cómo se enteran los empleados de un aviso importante?",
    answer:
      "El administrador crea el mensaje adentro de Tabstr y aparece en el encabezado del POS. El turno lo ve al usar el sistema, sin depender de un grupo de WhatsApp que nadie abre en hora pico.",
  },
  {
    question: "¿El reconocimiento facial reemplaza un PIN?",
    answer:
      "Sí. En el control de asistencia de Tabstr POS el empleado marca entrada y salida con el rostro. No hay un PIN que se presta ni una tarjeta que se pierde. El reporte muestra tardías, salidas tempranas y horas.",
  },
  {
    question: "¿El link de reservas es del restaurante o de Tabstr?",
    answer:
      "Es del restaurante. Cada local en Tabstr POS tiene su propio link de reservas para Instagram, Facebook o WhatsApp. El cliente reserva solo y la reserva aparece en la pestaña de reservas de ese restaurante.",
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

export const RESERVAS_FAQ = FAQ_ITEMS.filter((item) =>
  [
    "¿Tabstr incluye reservas para restaurantes?",
    "¿El link de reservas es del restaurante o de Tabstr?",
    "¿Tabstr es solo para restaurantes?",
  ].includes(item.question),
);

export const ASISTENCIA_FAQ = FAQ_ITEMS.filter((item) =>
  [
    "¿Cómo marca el personal la entrada y la salida?",
    "¿El reconocimiento facial reemplaza un PIN?",
    "¿Tabstr es solo para restaurantes?",
  ].includes(item.question),
);

export const PEDIDOS_FAQ = FAQ_ITEMS.filter((item) =>
  [
    "¿Puedo conectar pedidos de mi sitio web o de otra app al POS?",
    "¿El encargado puede aceptar o rechazar un pedido en línea?",
    "¿Cómo se enteran los empleados de un aviso importante?",
  ].includes(item.question),
);

export const HARDWARE_FAQ = FAQ_ITEMS.filter((item) =>
  [
    "¿Tabstr funciona en iPad?",
    "¿Qué conexiones de impresora soporta Tabstr?",
    "¿En qué dispositivos funciona Tabstr?",
    "¿Necesito comprar hardware nuevo para migrar?",
  ].includes(item.question),
);
