import { useState } from "react";
import { motion } from "framer-motion";

export const FAQData = [
  {
    question: "¿Qué es Tabstr?",
    answer:
      "Tabstr es un sistema de punto de venta (POS) moderno para restaurantes y comercios en Costa Rica. Corre en celular, tablet o computadora, sin cobrarte por cada dispositivo, e incluye facturación electrónica 4.4 integrada con el Ministerio de Hacienda.",
  },
  {
    question: "¿Funciona con facturación electrónica 4.4 de Hacienda?",
    answer:
      "Sí. Tabstr tiene integración nativa con el API de facturación electrónica versión 4.4 del Ministerio de Hacienda. Facturás desde el mismo flujo de venta, sin GTI ni una segunda aplicación aparte.",
  },
  {
    question: "¿Necesito comprar hardware nuevo para migrar?",
    answer:
      "No necesariamente. Tabstr funciona en cualquier dispositivo y se integra con el equipo que ya tenés cuando es compatible. Si necesitás impresoras u otros periféricos, te cotizamos opciones claras — sin amarrarte a hardware exclusivo del proveedor.",
  },
  {
    question: "¿Qué tan difícil es migrar desde otro POS?",
    answer:
      "La migración está pensada para que empieces operando, no desde cero. Te pasamos un Excel, cargás tus productos, nosotros los importamos y el día que abrís Tabstr el catálogo ya está listo. La capacitación del personal está incluida.",
  },
  {
    question: "¿En qué dispositivos funciona Tabstr?",
    answer:
      "En Android, iOS, Windows, macOS y Linux. Un solo sistema en la caja, la cocina o desde donde administres el negocio — sin licencias por pantalla.",
  },
  {
    question: "¿Cómo puedo contactarlos o agendar una demo?",
    answer:
      "Escribinos por el formulario de contacto del sitio o por WhatsApp. Te mostramos cómo quedaría tu local con Tabstr y resolvemos dudas de migración, inventario y facturación.",
  },
];

export const FAQ = () => (
  <section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">Preguntas frecuentes</p>
          <h2 className="mb-16 block-big-title text-center">
            Todo lo que querés saber antes de cambiar de POS
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#EA580C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
