import { motion } from "framer-motion";

import salesStats from "../assets/images/sales-stats.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section className="w-full bg-bgDark2 mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <img
              src={salesStats.src}
              alt="Feature image 5"
              className="rounded-xl  main-border-gray"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="block-subtitle">Tecnología moderna, no fósiles digitales</span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Funciones que resuelven, no que estorban.
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
              Cada detalle de este POS existe por una razón: Resolver los problemas reales que tienen los negocios todos los días.
              Desde importar tus facturas XML para actualizar el inventario, hasta mostrar mensajes internos al equipo o 
              guardar comprobantes de pagos por SINPE móvil.<br/>
            </p>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Importa facturas XML y de forma automática actualiza tu inventario</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Soporte para Sinpe móvil. Captura y registra comprobante de los pagos</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Facturación electrónica con el API versión 4.4 de Hacienda.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
