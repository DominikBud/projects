import { useState } from "react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

function BurgerMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden p-4 flex items-center justify-between relative">
      <div onClick={() => setIsOpen(!isOpen)}>
        <img
          className="h-6 cursor-pointer"
          src={`${
            isOpen
              ? "assets/burgerMenuIcons/close.png"
              : "assets/burgerMenuIcons/menu.png"
          }`}
          alt="ikonica"
        />
      </div>

      {isOpen && (
        <>
          <div className="flex flex-col top-12 absolute z-10 bg-white left-0">
            <div className="flex  justify-center p-4">
              <Logo />
            </div>
            {children}
          </div>
        </>
      )}
      <LanguageSwitcher />
    </div>
  );
}

export default BurgerMenu;
