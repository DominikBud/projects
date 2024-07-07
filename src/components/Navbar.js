import BurgerMenu from "./BurgerMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import NavigationItem from "./NavigationItem";
import { useTranslation } from "react-i18next";

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

function Navbar() {
  const [t, i18n] = useTranslation("global");
  const translatedNavigationItems = t("navigationItems");
  return (
    <>
      <BurgerMenu>
        {translatedNavigationItems.map((item, i) => (
          <a
            href={item.link}
            key={i}
            className="text-black p-2 w-full text-center text-lg"
          >
            {item.destination}
          </a>
        ))}
      </BurgerMenu>
      <div className="hidden lg:flex lg:flex-col ">
        <div className="flex py-4 px-16 justify-between items-center bg-[#D9D9D9]">
          <Logo />
          <LanguageSwitcher />
        </div>
        <div className="flex flex-row px-10 divide-x-2 ">
          {translatedNavigationItems.map((item, i) => (
            <NavigationItem
              destinationText={item.destination}
              fillerText={item.fillerText}
              link={item.link}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
