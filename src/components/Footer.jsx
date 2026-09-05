import { TabstrLogo } from "../assets/logos/TabstrLogo";
import hermosaSoftwareLogo from "../assets/images/hermosa-software-logo.png";
import { ENTITY_SENTENCE, RELATED_PAGES } from "../data/seo";
import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";

const legalLinks = [
  { label: "Términos y Condiciones", href: "/terminos-y-condiciones/" },
  { label: "Políticas de Privacidad", href: "/politicas-de-privacidad/" },
  { label: "Soporte", href: "/soporte/" },
];

export const Footer = () => {
  return (
    <footer aria-label="Pie de sitio de Tabstr POS">
      <div className="pt-10 lg:pt-10 lg:pb-10 bg-bgDark1 radius-for-skewed">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2">
                  <TabstrLogo />
                </div>
              </div>
              <p className="mb-6 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                {ENTITY_SENTENCE}
              </p>
              <p className="mb-1 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Un producto de{" "}
                <a
                  href="https://hermosasoftware.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300"
                >
                  Hermosa Software
                  
                </a>
                <p>Hecho con orgullo y estilo en en el hub tecnológico de CR: Bahía Ballena, Osa.</p>
                <br />
                <p>Herso Software Company S.A</p>
                <a href="mailto:contacto@tabstr.net" className="text-gray-400 hover:text-gray-300">
                  contacto@tabstr.net
                </a>
              </p>
            </div>
            <div className="w-full lg:w-2/3 lg:pl-16 flex flex-wrap justify-start">
              <div className="w-full md:w-1/2 mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">Tabstr POS</h3>
                <ul>
                  {RELATED_PAGES.slice(0, 8).map((item) => (
                    <li key={item.href} className="mb-3">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.href}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  Links importantes
                </h3>
                <ul>
                  {legalLinks.map((item) => (
                    <li key={item.href} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.href}
                        aria-label={item.label}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href="/contacto/">
                      Contacto
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-400 hover:text-gray-300" href="/blog/">
                      Blog
                    </a>
                  </li>
                </ul>
                <div className="w-36 mx-auto lg:mx-0">
                  <a
                    className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] outlined-button"
                    href="https://www.facebook.com/profile.php?id=61592499518532"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                    href="https://www.instagram.com/tabstrpos/"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-t border-bgDark3 mt-16 pt-8">
            <div className="w-full flex justify-center mb-4">
              <span className="text-gray-400 text-sm">
                ©{new Date().getFullYear()} Tabstr — Tabstr POS Costa Rica
              </span>
            </div>
            <div className="w-full flex items-center flex-col">
              <p className="text-gray-500 text-xs">Powered by</p>
              <a
                href="https://hermosasoftware.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 block"
              >
                <img
                  src={hermosaSoftwareLogo.src}
                  alt="Hermosa Software, empresa de Tabstr POS en Costa Rica"
                  className="w-20"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
