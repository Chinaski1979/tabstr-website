import { motion } from "framer-motion";

import auraRest from "../assets/clients/aura-rest-logo.jpg";
import bakeryGelato from "../assets/clients/bakery-gelato.jpg";
import ballenaVibes from "../assets/clients/ballena-vibes-logo.jpg";
import caravana from "../assets/clients/caravana-logo.jpg";
import contramarea from "../assets/clients/contramarea-logo.jpg";
import fisti from "../assets/clients/fisti-logo.jpg";
import potz from "../assets/clients/potz-logo.jpg";
import sibu from "../assets/clients/sibu-logo.jpg";
import voraPizza from "../assets/clients/vora-pizza.jpg";

const clients = [
  { name: "Aura Rest", logo: auraRest },
  { name: "Bakery Gelato", logo: bakeryGelato },
  { name: "Ballena Vibes", logo: ballenaVibes },
  { name: "Caravana", logo: caravana },
  { name: "Contramarea", logo: contramarea },
  { name: "Fisti", logo: fisti },
  { name: "Potz", logo: potz },
  { name: "Sibu", logo: sibu },
  { name: "Vora Pizza", logo: voraPizza },
];

const ClientLogo = ({ name, logo }) => (
  <div className="clients-marquee-item shrink-0">
    <div className="w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 lg:w-[5.5rem] lg:h-[5.5rem] rounded-full overflow-hidden border border-bgDark3 bg-bgDark3">
      <img
        src={logo.src}
        alt={name}
        className="w-full h-full object-cover object-center"
        loading="lazy"
        width={88}
        height={88}
      />
    </div>
  </div>
);

export const Clients = () => {
  const loop = [...clients, ...clients];

  return (
    <section
      className="py-12 sm:py-20 bg-bgDark1 w-full lg:mt-8 mb-8 lg:mb-12"
      aria-label="Clientes que confían en Tabstr"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
          <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
            <div className="w-full lg:w-[42%] px-4 mb-10 lg:mb-0">
              <div className="flex flex-col">
                <h2 className="mb-2 text-3xl sm:text-4xl 2xl:text-5xl font-bold tracking-normal text-primaryText">
                  Clientes que confían
                </h2>
                <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold tracking-normal text-secondaryColor">
                  en Tabstr
                </h2>
              </div>
            </div>

            <div className="w-full lg:w-[58%] px-4 lg:pl-6">
              <div className="clients-marquee" aria-hidden="true">
                <div className="clients-marquee-track">
                  {loop.map(({ name, logo }, index) => (
                    <ClientLogo
                      key={`${name}-${index}`}
                      name={name}
                      logo={logo}
                    />
                  ))}
                </div>
              </div>
              <ul className="sr-only">
                {clients.map(({ name }) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
