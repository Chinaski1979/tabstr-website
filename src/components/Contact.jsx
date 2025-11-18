import { motion } from "framer-motion";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    const form = document.getElementById('contact-form');
    
    if (form) {
      const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Email sending functionality commented out for now
        
        // const formData = new FormData(form);
        
        // try {
        //   const response = await fetch('https://form-email-sender-omega.vercel.app/herso', {
        //     method: 'POST',
        //     body: JSON.stringify(Object.fromEntries(formData)),
        //     headers: { 'Content-Type': 'application/json' }
        //   });
          
        //   if (response.ok) {
        //     form.reset();
        //     alert('Message sent successfully! ✅');
        //   } else {
        //     alert('Error sending message ❌');
        //   }
        // } catch (error) {
        //   alert('Error sending message ❌');
        // }
        
        // Temporary success message for testing
        alert('Form submitted! (Email sending disabled temporarily) ℹ️');
        form.reset();
      };
      
      form.addEventListener('submit', handleSubmit);
      
      return () => {
        form.removeEventListener('submit', handleSubmit);
      };
    }
  }, []);

  return (
    <section id="contact" className="isolate px-6 py-16 pb-10 sm:py-20 sm:pb-20 lg:px-8 bg-bgDark2 relative">
      <div className="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-10rem] -z-10" aria-hidden="true">
        <div className="contact-gradient-element"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto"
      >
        <div className="text-center pb-10 pt-8">
          <span className="block-subtitle">Ponte en contacto</span>
          <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
            Escríbenos
          </h2>
          <p className="text-secondaryText max-w-2xl mx-auto">
            Listo para modernizar la gestión de tu negocio? Escríbenos y aprende cómo Tabstr puede mejorar tu operación y mejorar la experiencia de tus clientes.
          </p>
        </div>

        <form 
          id="contact-form" 
          className="mx-auto max-w-2xl pt-12 lg:pt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="block sm:col-span-2">
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

            <div className="block sm:col-span-2">
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

            <div className="block sm:col-span-2">
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
              <label htmlFor="message" className="contact-label">
                Mensaje *
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="contact-input"
                placeholder="Cómo podemos ayudarte?"
              ></textarea>
            </div>

            <div className="flex gap-x-4 sm:col-span-2">
              <label className="text-sm leading-6 text-secondaryText">
                Al enviar este formulario, aceptas nuestras{" "}
                <a href="/privacy" className="font-semibold text-primaryColor hover:text-secondaryColor transition">
                  políticas de privacidad
                </a>
                .
              </label>
            </div>
          </div>

          <div className="flex pt-10">
            <button
              type="submit"
              className="contained-button w-full max-w-52 h-12 text-lg font-bold"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
