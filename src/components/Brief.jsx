import { motion } from "framer-motion";
import { useState } from "react";

const BRIEF_ENDPOINT = import.meta.env.DEV
  ? "http://localhost:3000/tabstr-brief"
  : "https://form-email-sender-omega.vercel.app/tabstr-brief";

const STEP_1_FIELDS = ["company", "contactName", "phone", "email"];

export const Brief = () => {
  const [step, setStep] = useState(1);
  const [showSocial, setShowSocial] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateStep1 = (form) => {
    return STEP_1_FIELDS.every((name) => {
      const field = form.elements.namedItem(name);
      return field instanceof HTMLInputElement && field.reportValidity();
    });
  };

  const handleContinue = (event) => {
    event.preventDefault();
    const form = event.currentTarget.form;
    if (form && validateStep1(form)) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      formType: "brief",
      ...Object.fromEntries(formData),
    };

    setIsSubmitting(true);
    try {
      const response = await fetch(BRIEF_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStep(1);
        setShowSocial(false);
        alert("Brief enviado correctamente.");
      } else {
        alert("Error al enviar el brief.");
      }
    } catch {
      alert("Error al enviar el brief.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="isolate px-6 py-14 pb-10 sm:py-16 sm:pb-16 lg:px-8 bg-bgDark2 relative">
      <div
        className="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-10rem] -z-10"
        aria-hidden="true"
      >
        <div className="contact-gradient-element"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto max-w-3xl pt-24 sm:pt-28"
      >
        <div className="text-center pb-6 sm:pb-8">
          <span className="block-subtitle">Brief comercial</span>
          <h1 className="mt-4 mb-3 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
            Cuéntanos sobre tu negocio
          </h1>
          <p className="text-secondaryText max-w-xl mx-auto text-sm sm:text-base">
            Un formulario corto para entender tu operación y recomendarte el plan
            adecuado. Toma alrededor de 2 minutos.
          </p>
        </div>

        <div className="mb-5">
          <div className="flex items-center justify-between text-xs text-secondaryText mb-2">
            <span>Paso {step} de 2</span>
            <span>{step === 1 ? "Contacto" : "Operación"}</span>
          </div>
          <div className="h-1.5 rounded-full bg-bgDark3 overflow-hidden">
            <div
              className="h-full rounded-full bg-primaryColor transition-all duration-300"
              style={{ width: step === 1 ? "50%" : "100%" }}
            />
          </div>
        </div>

        <form
          id="brief-form"
          onSubmit={handleSubmit}
          className="mx-auto rounded-2xl border border-bgDark3Hover bg-bgDark3/40 p-5 sm:p-6 lg:p-7"
        >
          <div className={step === 1 ? "block" : "hidden"}>
            <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
              <div className="block sm:col-span-2">
                <label htmlFor="company" className="contact-label">
                  Nombre de la compañía *
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  required
                  className="contact-input"
                />
              </div>

              <div className="block">
                <label htmlFor="contactName" className="contact-label">
                  Nombre del encargado *
                </label>
                <input
                  type="text"
                  name="contactName"
                  id="contactName"
                  autoComplete="name"
                  required
                  className="contact-input"
                />
              </div>

              <div className="block">
                <label htmlFor="phone" className="contact-label">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  required
                  className="contact-input"
                  placeholder="+506 0000 0000"
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
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={handleContinue}
                className="contained-button h-11 px-6 text-base font-bold"
              >
                Continuar
              </button>
            </div>
          </div>

          <div className={step === 2 ? "block" : "hidden"}>
            <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
              <div className="block sm:col-span-2">
                <label htmlFor="businessType" className="contact-label">
                  Tipo de negocio *
                </label>
                <select
                  name="businessType"
                  id="businessType"
                  required
                  className="contact-input"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona
                  </option>
                  <option value="bar">Bar</option>
                  <option value="restaurant">Restaurante</option>
                  <option value="ventanilla">Ventanilla / soda</option>
                  <option value="tienda">Tienda</option>
                  <option value="cafeteria">Cafetería</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className="block">
                <label htmlFor="teamSize" className="contact-label">
                  Personas en el equipo *
                </label>
                <select
                  name="teamSize"
                  id="teamSize"
                  required
                  className="contact-input"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona
                  </option>
                  <option value="solo">Solo yo</option>
                  <option value="2-5">2 a 5</option>
                  <option value="6-15">6 a 15</option>
                  <option value="16+">16 o más</option>
                </select>
              </div>

              <div className="block">
                <label htmlFor="devices" className="contact-label">
                  Dispositivos con Tabstr *
                </label>
                <select
                  name="devices"
                  id="devices"
                  required
                  className="contact-input"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona
                  </option>
                  <option value="1">1 dispositivo</option>
                  <option value="2-3">2 a 3 dispositivos</option>
                  <option value="4+">4 o más</option>
                </select>
              </div>

              <div className="block sm:col-span-2">
                <label htmlFor="printers" className="contact-label">
                  Impresoras *
                </label>
                <select
                  name="printers"
                  id="printers"
                  required
                  className="contact-input"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona
                  </option>
                  <option value="none">Ninguna</option>
                  <option value="1-caja">1 (caja)</option>
                  <option value="2-cocina-barra">2 (cocina + barra)</option>
                  <option value="3+">3 o más</option>
                </select>
              </div>

              <div className="block">
                <label htmlFor="taxRegime" className="contact-label">
                  Régimen tributario
                </label>
                <select
                  name="taxRegime"
                  id="taxRegime"
                  className="contact-input"
                  defaultValue=""
                >
                  <option value="">Selecciona (opcional)</option>
                  <option value="simplificado">Simplificado</option>
                  <option value="tradicional">Tradicional</option>
                  <option value="unsure">No estoy seguro</option>
                </select>
              </div>

              <div className="block">
                <label htmlFor="electronicInvoicing" className="contact-label">
                  Facturación electrónica *
                </label>
                <select
                  name="electronicInvoicing"
                  id="electronicInvoicing"
                  required
                  className="contact-input"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona
                  </option>
                  <option value="need">Sí, la necesito</option>
                  <option value="no-need">No la necesito</option>
                  <option value="have">Ya la tengo</option>
                </select>
              </div>
            </div>

            <div className="mt-5 border-t border-bgDark3Hover pt-5">
              <button
                type="button"
                onClick={() => setShowSocial(!showSocial)}
                className="flex w-full items-center justify-between text-left text-sm font-semibold text-primaryText hover:text-primaryColor transition"
                aria-expanded={showSocial}
              >
                <span>Presencia online (opcional)</span>
                <span className="text-secondaryText text-lg leading-none">
                  {showSocial ? "−" : "+"}
                </span>
              </button>
              <p className="mt-1 text-xs text-secondaryText">
                Si compartes tus redes, podemos conocer mejor tu negocio antes de
                la demo.
              </p>

              {showSocial && (
                <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-5">
                  <div className="block">
                    <label htmlFor="instagram" className="contact-label">
                      Instagram
                    </label>
                    <input
                      type="text"
                      name="instagram"
                      id="instagram"
                      className="contact-input"
                      placeholder="@tu_negocio"
                    />
                  </div>

                  <div className="block">
                    <label htmlFor="facebook" className="contact-label">
                      Facebook
                    </label>
                    <input
                      type="text"
                      name="facebook"
                      id="facebook"
                      className="contact-input"
                      placeholder="facebook.com/tu-negocio"
                    />
                  </div>

                  <div className="block sm:col-span-2">
                    <label htmlFor="website" className="contact-label">
                      Sitio web
                    </label>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      className="contact-input"
                      placeholder="www.tunegocio.com"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="outlined-button h-11 px-6 text-base font-semibold"
              >
                Atrás
              </button>
              <div className="flex flex-col gap-4 sm:items-end">
                <p className="text-xs leading-5 text-secondaryText sm:text-right sm:max-w-xs">
                  Al enviar, aceptas nuestras{" "}
                  <a
                    href="/politicas-de-privacidad"
                    className="font-semibold text-primaryColor hover:text-secondaryColor transition"
                  >
                    políticas de privacidad
                  </a>
                  .
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contained-button h-11 w-full px-6 text-base font-bold sm:w-auto sm:min-w-[10.5rem] disabled:opacity-60"
                >
                  {isSubmitting ? "Enviando..." : "Enviar brief"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
