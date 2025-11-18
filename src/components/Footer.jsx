import { TabstrLogo } from "../assets/logos/TabstrLogo";
import hermosaSoftwareLogo from "../assets/images/hermosa-software-logo.png";
// import { InstagramIcon } from "../assets/icons/InstagramIcon";

const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories"],
  },
  {
    title: "Important Links",
    items: [
      "Terminos y Condiciones",
      "Politicas de Privacidad",
    ],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];

export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10 lg:pt-10 lg:pb-10 bg-bgDark1 radius-for-skewed">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2">
                  <TabstrLogo />
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Un producto de <a href="https://hermosasoftware.io" target="_blank" className="text-gray-400 hover:text-gray-300">Hermosa Software</a><br/>
                Hecho con orgullo y estilo en en el hub tecnológico de CR: Bahía Ballena, Osa.
              </p>
              {/* <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] outlined-button"
                  href="#"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="#"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="#"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div> */}
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-start">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  Links importantes
                </h3>
                <ul>
                  {footerData[1].items.map((item, index) => (
                    <li key={`${item}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label={item}
                      >
                        {item}
                    </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full border-t border-bgDark3 mt-16 pt-8">
            <div className="w-full flex justify-center mb-4">
              <span className="text-gray-400 text-sm">
                ©{new Date().getFullYear()} Tabstr
              </span>
            </div>
            <div className="w-full flex items-center flex-col">
              
              <p className="text-gray-500 text-xs">
                Powered by 
              </p>
              <a href="https://hermosasoftware.io" target="_blank" className="text-gray-400 hover:text-gray-300 block"><img src={hermosaSoftwareLogo.src} alt="Hermosa Software" className="w-20" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
