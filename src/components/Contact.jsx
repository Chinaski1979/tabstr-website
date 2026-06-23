import { motion } from "framer-motion";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    const form = document.getElementById('contact-form');
    
    if (form) {
      const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        
        try {
          const response = await fetch('https://form-email-sender-omega.vercel.app/tabstr', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: { 'Content-Type': 'application/json' }
          });
          
          if (response.ok) {
            form.reset();
            alert('Message sent successfully! ✅');
          } else {
            alert('Error sending message ❌');
          }
        } catch (error) {
          alert('Error sending message ❌');
        }
      };
      
      form.addEventListener('submit', handleSubmit);
      
      return () => {
        form.removeEventListener('submit', handleSubmit);
      };
    }
  }, []);

  return (
    <section id="contact" className="isolate px-6 py-14 pb-10 sm:py-16 sm:pb-16 lg:px-8 bg-bgDark2 relative">
      <div className="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-10rem] -z-10" aria-hidden="true">
        <div className="contact-gradient-element"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto max-w-3xl"
      >
        <div className="text-center pb-6 pt-4 sm:pb-8">
          <span className="block-subtitle">Ponte en contacto</span>
          <h2 className="mt-4 mb-3 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
            Escríbenos
          </h2>
          <p className="text-secondaryText max-w-xl mx-auto text-sm sm:text-base">
            Cuéntanos sobre tu negocio y te mostramos cómo Tabstr puede ayudarte.
          </p>
        </div>

        <form 
          id="contact-form" 
          className="mx-auto rounded-2xl border border-bgDark3Hover bg-bgDark3/40 p-5 sm:p-6 lg:p-7"
        >
          <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
            <div className="block">
              <label htmlFor="name" className="contact-label">
                Nombre *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                required
                className="contact-input"
              />
            </div>

            <div className="block">
              <label htmlFor="email" className="contact-label">
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="contact-input"
              />
            </div>

            <div className="block">
              <label htmlFor="phone" className="contact-label">
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="contact-input"
                placeholder="+506 0000 0000"
              />
            </div>

            <div className="block">
              <label htmlFor="company" className="contact-label">
                Compañía
              </label>
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="contact-input"
              />
            </div>

            <div className="block sm:col-span-2">
              <label htmlFor="operation" className="contact-label" title="¿Cómo planea usar Tabstr?">
                Uso previsto de Tabstr
              </label>
              <select
                name="operation"
                id="operation"
                className="contact-input"
                defaultValue=""
              >
                <option value="">Selecciona (opcional)</option>
                <option value="restaurant-1">Restaurante o bar — 1 dispositivo</option>
                <option value="restaurant-multi">Restaurante o bar — 2 o más dispositivos</option>
                <option value="retail-1">Tienda o retail — 1 dispositivo</option>
                <option value="retail-multi">Tienda o retail — 2 o más dispositivos</option>
                <option value="multi-location">Varios locales o sucursales</option>
                <option value="exploring">Aún evaluando opciones</option>
              </select>
            </div>

            <div className="block sm:col-span-2">
              <label htmlFor="message" className="contact-label">
                Mensaje *
              </label>
              <textarea
                name="message"
                id="message"
                rows="3"
                required
                className="contact-input"
                defaultValue="Estoy interesado en utilizar Tabstr."
              ></textarea>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-secondaryText sm:max-w-md">
              Al enviar este formulario, aceptas nuestras{" "}
              <a href="/privacy" className="font-semibold text-primaryColor hover:text-secondaryColor transition">
                políticas de privacidad
              </a>
              .
            </p>
            <button
              type="submit"
              className="contained-button h-11 w-full shrink-0 px-6 text-base font-bold sm:w-auto sm:min-w-[10.5rem]"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
