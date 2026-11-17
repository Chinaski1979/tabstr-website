import { useEffect, useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { TabstrLogo } from "../assets/logos/TabstrLogo";
import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";

type NavLink = { label: string; href: string; ariaLabel: string };
type SocialLink = { href: string; label: string; Icon: ComponentType; className: string };

const navbarLinks: NavLink[] = [
  { label: "Inicio", href: "/", ariaLabel: "Inicio" },
  { label: "Características", href: "/caracteristicas/", ariaLabel: "Características de Tabstr POS" },
  { label: "Precios", href: "/precios/", ariaLabel: "Precios de Tabstr POS" },
  { label: "Blog", href: "/blog/", ariaLabel: "Blog" },
  { label: "FAQ", href: "/faq/", ariaLabel: "Preguntas frecuentes" },
  { label: "Contacto", href: "/contacto/", ariaLabel: "Contacto" },
];

const socialLinks: SocialLink[] = [
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

const isActive = (href: string, pathname: string): boolean =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 flex justify-center transition-all duration-300 ${
        isScrolled ? "pt-2" : "pt-3 sm:pt-4"
      }`}
      aria-label="Main navigation"
    >
      <div className="relative w-11/12 max-w-6xl">
        <div
          className={`glow-border relative flex items-center rounded-2xl px-4 sm:px-5 backdrop-blur-xl transition-all duration-300 ${
            isScrolled ? "h-14 bg-bgDark1/85 shadow-glow-sm" : "h-16 bg-bgDark1/60"
          }`}
        >
          <a href="/" aria-label="Tabstr POS Costa Rica" className="flex-shrink-0 text-white">
            <TabstrLogo className={`w-auto transition-all duration-300 ${isScrolled ? "h-8" : "h-9"}`} />
            <span className="block text-center text-[0.6rem] leading-none text-secondaryText">
              Lightning Fast POS
            </span>
          </a>

          <div className="hidden lg:flex flex-1 justify-center gap-1 xl:gap-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => {
              const active = isActive(href, pathname);
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={ariaLabel}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition hover:text-primaryText hover:bg-white/[0.05] ${
                    active ? "text-primaryText" : "text-secondaryText"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="ml-auto lg:ml-0 flex items-center gap-2">
            <div className="hidden sm:block">
              <a href="/contacto/" className="contained-button h-10 px-4 text-sm">
                Probar gratis
              </a>
            </div>
            <button
              type="button"
              className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-solid border-mainBorder hover:bg-white/[0.05] transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              <span
                className={`block h-0.5 w-5 bg-secondaryText transition duration-300 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span className={`block h-0.5 w-5 bg-secondaryText transition duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-5 bg-secondaryText transition duration-300 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute inset-x-0 top-full mt-2 glow-border rounded-2xl bg-bgDark1/95 backdrop-blur-xl p-6 flex flex-col items-center gap-6"
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={ariaLabel}
                  aria-current={isActive(href, pathname) ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-medium transition hover:text-primaryText ${
                    isActive(href, pathname) ? "text-gradient-brand" : "text-primaryText/80"
                  }`}
                >
                  {label}
                </a>
              ))}
              <a href="/contacto/" className="contained-button h-12 w-full max-w-xs" onClick={() => setIsOpen(false)}>
                Probar 1 mes gratis
              </a>
              <div className="flex items-center gap-2">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
