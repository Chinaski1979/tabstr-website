export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, vi Tabstr en la web y me gustaría recibir más información sobre el plan para mi negocio.";

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const phone = import.meta.env.PUBLIC_WHATSAPP_PHONE;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
