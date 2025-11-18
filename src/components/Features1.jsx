import { motion } from "framer-motion";
import forAllDevices from "../assets/images/for-all-devices.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-24 -mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0    md:pt-[12vw] lg:pt-16"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">¿Licencias por dispositivo?</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                Eso quedó en los 90s
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                No importa si es Android, iOS, Windows, Linux, Mac. 
                Tabstr es compatible con cualquier dispositivo y sistema operativo.
                Un POS que corre en cualquier pantalla. Fácil, rápido y sin cobros ridículos.<br/>
                Diseñado para ser fácil, estético y accesible. Todo lo que los demás nunca fueron.
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Visualiza tus ventas en tiempo real</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Administra tu negocio desde cualquier lugar</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Sin licencias, sin instalaciones, sin complicaciones</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <img src={forAllDevices.src} alt="Tabs Management for all devices" className="rounded-xl  main-border-gray mx-auto sm:mx-unset" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
