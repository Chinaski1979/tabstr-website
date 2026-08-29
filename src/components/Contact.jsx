import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getSupabaseClient } from "../lib/supabaseClient.js";

const CONSENT_VERSION = "2026-07-31";

const CONSENT_TEXT_EMAIL =
  "Acepto recibir comunicaciones comerciales por correo electrónico de Tabstr / Hermosa Software.";

const CONSENT_TEXT_WHATSAPP =
  "Acepto recibir mensajes de WhatsApp de Tabstr / Hermosa Software al número indicado.";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  useEffect(() => {
    const form = document.getElementById("contact-form");

    if (!form) {
      return;
    }

    const handleSubmit = async (event) => {
      event.preventDefault();

      setSubmitStatus({ type: null, message: "" });
      setIsSubmitting(true);

      const formData = new FormData(form);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const company = String(formData.get("company") || "").trim();
      const phone = String(formData.get("phone") || "").trim();
      const message = String(formData.get("message") || "").trim();
      const operation = String(formData.get("operation") || "").trim();
      const optInEmail = formData.get("opt_in_email") === "on";
      const optInWhatsapp = formData.get("opt_in_whatsapp") === "on";

      if (optInWhatsapp && !phone) {
        setIsSubmitting(false);
        setSubmitStatus({
          type: "error",
          message:
            "Por favor indica tu número de teléfono para recibir mensajes de WhatsApp.",
        });
        document.getElementById("phone")?.focus();
        return;
      }

      const emailPayload = {
        name,
        email,
        company,
        phone,
        message,
        operation,
        opt_in_email: optInEmail,
        opt_in_whatsapp: optInWhatsapp,
      };

      try {
        const emailResponse = await fetch(
          "https://form-email-sender-omega.vercel.app/tabstr",
          {
            method: "POST",
            body: JSON.stringify(emailPayload),
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!emailResponse.ok) {
          throw new Error("Email endpoint failed");
        }

        const supabase = getSupabaseClient();
        const hasOptIn = optInEmail || optInWhatsapp;

        if (supabase) {
          const { error } = await supabase.from("communication_opt_ins").insert({
            contact_name: name,
            company_name: company || null,
            email,
            phone: phone || null,
            opt_in_email: optInEmail,
            opt_in_whatsapp: optInWhatsapp,
            consent_text_email: optInEmail ? CONSENT_TEXT_EMAIL : null,
            consent_text_whatsapp: optInWhatsapp ? CONSENT_TEXT_WHATSAPP : null,
            consent_version: CONSENT_VERSION,
            source: "website-contact",
            page_url: window.location.href,
            user_agent: navigator.userAgent,
            message: message || null,
          });

          if (error) {
            console.error("Supabase consent insert failed:", error);
            if (hasOptIn) {
              setIsSubmitting(false);
              setSubmitStatus({
                type: "error",
                message:
                  "Tu mensaje se envió, pero no pudimos registrar el consentimiento. Por favor inténtalo de nuevo o escríbenos a contact@hermosasoftware.io.",
              });
              return;
            }
          }
        } else if (hasOptIn) {
          setIsSubmitting(false);
          setSubmitStatus({
            type: "error",
            message:
              "Tu mensaje se envió, pero el registro de consentimiento no está configurado. Contacta a support.",
          });
          return;
        }

        form.reset();
        setIsSubmitting(false);
        setSubmitStatus({
          type: "success",
          message: "Mensaje enviado correctamente.",
        });
      } catch (error) {
        console.error("Contact form submit failed:", error);
        setIsSubmitting(false);
        setSubmitStatus({
          type: "error",
          message: "Error al enviar el mensaje. Por favor inténtalo de nuevo.",
        });
      }
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <section
      id="contact"
      className="isolate px-6 py-14 pb-10 sm:py-16 sm:pb-16 lg:px-8 bg-bgDark2 relative"
    >
      <div
        className="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-10rem] -z-10"
        aria-hidden="true"
      >
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
                autoComplete="name"
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
              <label
                htmlFor="operation"
                className="contact-label"
                title="¿Cómo planea usar Tabstr?"
              >
                Uso previsto de Tabstr
              </label>
              <select
                name="operation"
                id="operation"
                className="contact-input"
                defaultValue=""
              >
                <option value="">Selecciona (opcional)</option>
                <option value="restaurant-1">
                  Restaurante o bar — 1 dispositivo
                </option>
                <option value="restaurant-multi">
                  Restaurante o bar — 2 o más dispositivos
                </option>
                <option value="retail-1">Tienda o retail — 1 dispositivo</option>
                <option value="retail-multi">
                  Tienda o retail — 2 o más dispositivos
                </option>
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

            <div className="flex flex-col gap-4 sm:col-span-2">
              <label className="flex items-start gap-3 text-sm leading-6 text-secondaryText cursor-pointer">
                <input
                  type="checkbox"
                  name="opt_in_email"
                  id="opt_in_email"
                  className="mt-1 h-4 w-4 shrink-0 rounded border-gray-500 bg-bgDark3 text-primaryColor focus:ring-primaryColor"
                />
                <span>{CONSENT_TEXT_EMAIL}</span>
              </label>

              <label className="flex items-start gap-3 text-sm leading-6 text-secondaryText cursor-pointer">
                <input
                  type="checkbox"
                  name="opt_in_whatsapp"
                  id="opt_in_whatsapp"
                  className="mt-1 h-4 w-4 shrink-0 rounded border-gray-500 bg-bgDark3 text-primaryColor focus:ring-primaryColor"
                />
                <span>{CONSENT_TEXT_WHATSAPP}</span>
              </label>
            </div>
          </div>

          {submitStatus.type && (
            <div
              className={`mt-5 p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-900/20 border border-green-500/30 text-green-400"
                  : "bg-red-900/20 border border-red-500/30 text-red-400"
              }`}
            >
              <div className="flex items-start gap-3">
                {submitStatus.type === "success" ? (
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                <p className="text-sm leading-relaxed">{submitStatus.message}</p>
              </div>
            </div>
          )}

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-secondaryText sm:max-w-md">
              Al enviar este formulario, aceptas nuestras{" "}
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
              className={`contained-button h-11 w-full shrink-0 px-6 text-base font-bold sm:w-auto sm:min-w-[10.5rem] flex items-center justify-center gap-2 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Enviando...</span>
                </>
              ) : (
                "Enviar mensaje"
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
