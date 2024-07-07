import { useTranslation } from "react-i18next";
import MainHeading from "./MainHeading";

const navigationItems = [
  {
    destination: "O NAMA",
    fillerText: "vizija za uspeh",
    link: "https://veleprodaja.dvgcompany.com/o-nama",
  },
  {
    destination: "DVG PROIZVODI",
    fillerText: "naši proizvodi",
    link: "https://veleprodaja.dvgcompany.com/nasi-proizvodi",
  },
  {
    destination: "BRENDOVI",
    fillerText: "koje zasupamo",
    link: "https://veleprodaja.dvgcompany.com/brendovi",
  },
  {
    destination: "DISTRIBUCIJA",
    fillerText: "logistika i operativa",
    link: "https://veleprodaja.dvgcompany.com/distribucija",
  },

  {
    destination: "SARADNJA",
    fillerText: "proširenje ponude",
    link: "https://veleprodaja.dvgcompany.com/postanite-nas-partner",
  },
  {
    destination: "NOVOSTI",
    fillerText: "aktuelnosti",
    link: "https://veleprodaja.dvgcompany.com/novosti",
  },
  {
    destination: "WEBSHOP",
    fillerText: "Online kupovina",
    link: "https://dvgcompany.com/",
  },
  {
    destination: "KONTAKT",
    fillerText: "kontaktirajte nas",
    link: "https://veleprodaja.dvgcompany.com/dvg-company-doo",
  },
];

function Footer() {
  const [t, i18n] = useTranslation("global");
  const translatedNavigationItems = t("navigationItems");
  return (
    <div className="relative">
      <div className=" xl:divide-x-2 lg:grid lg:grid-cols-2  xl:divide-white/50 xl:flex-row xl:flex py-32  xl:py-32 lg:px-24 xl:justify-between md:grid bg-black footerImage flex px-4 items-center justify-center gap-20  flex-col                                ">
        <div className="flex xl:h-72 items-center justify-center xl:justify-normal xl:items-start">
          <img
            className="h-24 w-24 "
            src="/assets/footer/logo1.png"
            alt="logo"
          />
        </div>
        <div className="flex  xl:h-72 justify-center  xl:justify-normal items-center xl:pl-16 xl:items-start flex-col">
          <MainHeading type="footer">D.V.G COMPANY</MainHeading>
          <div className="flex flex-row mt-8 gap-4">
            {" "}
            <img
              className="h-[32px] "
              alt="ikonica"
              src="assets/footer/location.png"
            />
            <p className="text-white text-xl font-['Roboto']">
              Čantavirski put bb 24000 Subotica, Srbija
            </p>
          </div>
          <div className="flex flex-row mt-8 gap-4">
            {" "}
            <img
              className="h-[32px] "
              alt="ikonica"
              src="assets/footer/telephone.png"
            />
            <a
              href="/"
              className="text-[#bf0f0f] font-['Roboto'] hover:underline hover:text-[#792c2c] duration-150 transition-colors text-xl"
            >
              +381 24 568 555{" "}
            </a>
          </div>
          <div className="flex flex-row mt-8 gap-4">
            {" "}
            <img
              className="h-[32px] "
              alt="ikonica"
              src="assets/footer/email.png"
            />
            <a
              href="/"
              className="text-[#bf0f0f] font-['Roboto'] hover:text-[#792c2c] duration-150 transition-colors hover:underline text-xl"
            >
              office@dvgcomapny.com{" "}
            </a>
          </div>
        </div>
        <div
          className="pl-8  xl:h-72
       flex flex-col md:items-center xl:items-start gap-2"
        >
          {translatedNavigationItems.map((item) => (
            <a
              href={item.link}
              className=" text-white font-['Roboto_Condensed'] hover:underline capitalize text-xl semibold"
            >
              {" "}
              {item.destination}
            </a>
          ))}
        </div>

        <div className="flex  xl:h-72 flex-col items-center text-center xl:text-start justify-center xl:items-start xl:justify-normal xl:pl-4">
          <div className="flex  flex-col">
            <p className="text-white text-lg font-['Roboto']">
              {t("footer.followusHeading")}
            </p>
            <div className="flex flex-row items-center justify-center gap-4 mt-4">
              <a href="/">
                <img
                  className="h-6 transform 
                  transition duration-250 
                  hover:scale-110"
                  src="assets/footer/facebook.png"
                  alt="facebook"
                />
              </a>
              <a href="/">
                <img
                  className="h-6 transform 
                  transition duration-250 
                  hover:scale-110"
                  src="assets/footer/twitter.png"
                  alt="twitter"
                />
              </a>
              <a href="/">
                <img
                  className="h-6 transform 
                  transition duration-250 
                  hover:scale-110"
                  src="assets/footer/youtube.png"
                  alt="youtube"
                />
              </a>
              <a href="/">
                <img
                  className="h-6 transform 
                  transition duration-250 
                  hover:scale-110"
                  src="assets/footer/chat.png"
                  alt="chat"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 gap-2  py-8 px-4 lg:px-16 flex flex-col md:flex-row justify-between bg-black/40 w-full">
        <p className="text-white/30 text-base font-['Roboto']">
          Copyright © 2021 DVG Company, Subotica d.o.o. {t("footer.copyright")}
        </p>
        <a
          className="text-white/30 font-['Roboto'] cursor-pointer hover:text-white transition-colors duration-250 hover:underline text-base"
          href="https://veleprodaja.dvgcompany.com/privatnost-podatka"
        >
          {t("footer.privacy")}
        </a>
        <a
          className="text-white/30 font-['Roboto'] cursor-pointer hover:text-white transition-colors duration-250 text-base hover:underline"
          href="https://veleprodaja.dvgcompany.com/uslovi-koriscenja"
        >
          {t("footer.rules")}
        </a>
        <p className="text-white/30 font-['Roboto'] text-base">
          {" "}
          Powered by:
          <a
            className="text-white/40 hover:underline font-['Roboto'] cursor-pointer text-base "
            href="https://www.studiopresent.com/"
          >
            StudioPresent
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
