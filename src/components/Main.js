import BigBreaker from "./BigBreaker";
import GrayBreaker from "./GrayBreaker";
import Items from "./Items";
import MainButton from "./MainButton";
import MainHeading from "./MainHeading";
import Partner from "./Partner";
import StatsItem from "./StatsItem";
import SubHeading from "./SubHeading";
import { SplideSlide } from "@splidejs/react-splide";
import { useTranslation } from "react-i18next";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// const articles = [
//   {
//     image: "/assets/srednja1.png",
//     text: "Postanite nas partner",
//   },
//   {
//     image: "/assets/srednja2.png",
//     text: "Nasi proizvodi",
//   },
//   {
//     image: "/assets/srednja3.png",
//     text: "Uvoz iz madjarske",
//   },
// ];

// const products = [
//   {
//     image: "/assets/male slike/kese.png",
//     text: "kese i folije",
//   },
//   {
//     image: "/assets/male slike/zaKuhinju.png",
//     text: "za kuhinju",
//   },
//   {
//     image: "/assets/male slike/Ubrusi.png",
//     text: "Ubrusi i toalet papiri",
//   },
//   {
//     image: "/assets/male slike/Kozmetika.png",
//     text: "kozmetika",
//   },
//   {
//     image: "/assets/male slike/plasticneKante.png",
//     text: "Plastične kante",
//   },
// ];

// const stats = [
//   { value: 3000, text: "magacinskog prostora" },
//   { value: 20, text: "vozila" },
//   { value: 8, text: "komercijalista" },
//   { value: 170, text: "proizvoda" },
// ];

// const partners = [
//   {
//     image: "/assets/Partneri/dove.png",
//     text: "Dove",
//   },
//   {
//     image: "/assets/Partneri/nivea.png",
//     text: "Nivea",
//   },
//   {
//     image: "/assets/Partneri/palmolive.png",
//     text: "Palmolive",
//   },
//   {
//     image: "/assets/Partneri/vanish.png",
//     text: "Vanish",
//   },
//   {
//     image: "/assets/Partneri/ajax.png",
//     text: "Ajax",
//   },
//   {
//     image: "/assets/Partneri/cif.png",
//     text: "Cif",
//   },
// ];

function Main() {
  const [t, i18n] = useTranslation("global");

  const translatedArticles = t("articles");
  const translatedStats = t("stats");
  const transaltedProducts = t("products");
  const transaltedPartners = t("partners");

  return (
    <div className="scroll-smooth">
      <section className="relative">
        <video controls="controls" autoplay="autoplay" muted>
          <source src="/assets/video.mp4" />
        </video>
        <a href="#proizvodi" className="absolute bottom-10 left-[48%] ">
          <img src="/assets/arrow-down.png" alt="arrow-down" />
        </a>
      </section>
      <section className=" flex gap-16 py-16 xl:py-32 flex-col xl:flex-row items-center">
        <div className="w-full lg:basis-1/2">
          {" "}
          <img src="/assets/factory.png" alt="slika fab" />
        </div>
        <div className="p-4 xl:basis-1/2 xl:text-left flex text-center xl:items-start items-center justify-center lg:justify-start flex-col">
          <MainHeading type="black">DVG Company</MainHeading>
          <BigBreaker />
          <SubHeading> {t("sectionIntro.subheading")}</SubHeading>
          <GrayBreaker />
          <p className="text-[24px] font-['Roboto'] text-center xl:text-start text-[#474747]">
            {" "}
            {t("sectionIntro.paragraph")}
          </p>

          <MainButton>{t("button")}</MainButton>
        </div>
      </section>
      <section className="items-center justify-center highway-image">
        <div className=" flex items-center justify-center text-center flex-col bg-black/50 py-64">
          <MainHeading>{t("distributionHeading")}</MainHeading>
          <BigBreaker />
        </div>
      </section>
      <section className="pt-16 px-4">
        <div className="flex justify-center items-center flex-col lg:flex-row gap-10">
          {translatedArticles.map((item) => (
            <Items image={item.image} text={item.text} />
          ))}
        </div>
      </section>
      <section className="flex py-16 xl:gap-6 lg:py-32 justify-center items-center  flex-col">
        <MainHeading type="black">DVG Comapny</MainHeading>
        <div className="flex flex-col justify-center items-center ">
          <SubHeading>{t("statsSection.subheading")}</SubHeading>
          <BigBreaker />
        </div>
      </section>
      <section className="lg:py-32 py-16 stats-image  flex items-center  justify-center">
        <div className="flex flex-col md:grid-cols-2 md:grid lg:flex lg:flex-row lg:divide-x-2 lg:divide-white/50 items-center  justify-center lg:px-8 lg:gap-0 gap-12">
          {translatedStats.map((item, i) => (
            <StatsItem value={item.value} text={item.text} />
          ))}
        </div>
      </section>
      <section
        id="proizvodi"
        className="flex flex-col lg:py-32  items-center py-16 justify-center bg-[#F4F4F4] px-4 relative"
      >
        <div className="flex lg:w-1/2 items-center text-center flex-col justify-center lg:gap-12">
          <SubHeading>{t("productSection.heading")}</SubHeading>
          <GrayBreaker />
          <p className="text-xl lg:text-xl font-['Roboto'] text-[#474747] text-center">
            {" "}
            {t("productSection.paragraph")}
          </p>
        </div>
        <div className="flex justify-center mt-8 lg:mt-24">
          {" "}
          <Splide
            className="splide"
            options={{
              rewind: true,
              width: "90vw",
              interval: 3000,
              autoplay: true,

              breakpoints: {
                560: {
                  perPage: 1,
                },
                1100: {
                  perPage: 2,
                },
                2000: {
                  perPage: 3,
                },
                3000: {
                  perPage: 4,
                },
              },
              heightAuto: true,
              perMove: 1,
            }}
            aria-label="React Splide Example"
          >
            {transaltedProducts.map((item) => (
              <SplideSlide>
                {" "}
                <div className="p-4">
                  <Items type="products" image={item.image} text={item.text} />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <img
          className="absolute left-0 bottom-0"
          src="assets/whiteLogo.png"
          alt="logo"
        />
      </section>
      <section className="py-16 lg:py-32 flex flex-col items-center px-4">
        <div className="flex items-center flex-col text-center justify-center">
          <SubHeading>{t("partnersSection.heading")} </SubHeading>
          <GrayBreaker />
        </div>
        <div className="flex flex-col gap-16 md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-48 xl:grid-cols-6 xl:gap-x-24 my-8 xl:gap-16 xl:my-16 md:gap-y-16 px-4 ">
          {transaltedPartners.map((item) => (
            <Partner image={item.image} text={item.text} />
          ))}
        </div>
        <MainButton>{t("buttonPartner")}</MainButton>
      </section>
    </div>
  );
}

export default Main;
