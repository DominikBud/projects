import i18next, { changeLanguage } from "i18next";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation("global");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="flex gap-4 items-center ">
      <button
        onClick={() => {
          changeLanguage("srb");
        }}
        className="text-[#595959] font-['Roboto'] focus:underline "
      >
        Srpski
      </button>
      <button
        onClick={() => {
          changeLanguage("mg");
        }}
        className="text-[#595959] font-['Roboto'] focus:underline"
      >
        Magyar
      </button>
      <button
        onClick={() => {
          changeLanguage("en");
        }}
        className="text-[#595959]  focus:underline font-['Roboto']"
      >
        English
      </button>
    </div>
  );
}

export default LanguageSwitcher;
