import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { TabstrLogo } from "../assets/logos/TabstrLogo";
import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";

const navbarLinks = [
  { label: "Inicio", href: "/", ariaLabel: "Inicio" },
  { label: "Características", href: "/caracteristicas/", ariaLabel: "Características de Tabstr POS" },
  { label: "Precios", href: "/precios/", ariaLabel: "Precios de Tabstr POS" },
  { label: "Blog", href: "/blog/", ariaLabel: "Blog" },
  { label: "FAQ", href: "/faq/", ariaLabel: "Preguntas frecuentes" },
  { label: "Contacto", href: "/contacto/", ariaLabel: "Contacto" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61592499518532",
    label: "Facebook",
    Icon: FacebookIcon,
    className: "p-2 pt-[0.55rem]",
  },
  {
    href: "https://www.instagram.com/tabstrpos/",
    label: "Instagram",
    Icon: InstagramIcon,
    className: "p-2 pt-[0.55rem] pl-[0.55rem]",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full h-20 flex flex-col justify-center items-center fixed bg-bgDark1 lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
          className="flex-shrink-0"
        >
          <a href="/" aria-label="Tabstr POS Costa Rica">
            <div className="flex justify-start items-center">
              <div className="text-white mr-2">
                <TabstrLogo />
                <span className="text-white text-xs w-full block text-center">Lightning Fast POS</span>
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
          className="flex-1 flex justify-center"
        >
          <div className="hidden lg:flex h-full pb-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="text-white lg:text-sm xl:text-base leading-6 mx-3 xl:mx-4 2xl:mx-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
          className="flex-shrink-0 w-[120px]"
        >
        </motion.div>
        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-bgDark1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="text-white lg:text-base text-2xl  leading-6 mr-4 ml-4   2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                {socialLinks.map(({ href, label, Icon, className }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`inline-flex w-10 h-10 items-center justify-center outlined-button ${className}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
