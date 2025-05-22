import { TitleSection } from "../elements/Titles"
import { WhyCard } from "../elements/Cards"
import { useTranslation } from "react-i18next";

import { SlChemistry } from "react-icons/sl";
import { SlEnergy } from "react-icons/sl";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoDiamondOutline } from "react-icons/io5";

import ImageFilterMembrane from "../../assets/filter-membrane.png"


export const WhyHome = () => {
  const { t } = useTranslation()

  return(
    <div 
      className="mx-auto my-20 justify-center flex overflow-hidden relative
        bg-[url(./assets/background-why.jpg)] bg-center bg-cover"
    >
      {/* Gradiente inferior */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-t from-transparent to-white pointer-events-none" />

      <div 
        className="justify-center flex flex-col py-12
          w-[70rem] max-w-[95vw] max-lg:w-11/12 max-lg:m-auto"
      >
        {/* Title */}
        <TitleSection 
          text={t('why.title')}
          textConfig={"text-center"}
        />

        <p className="mt-6 w-[80%] max-md:w-full text-center mx-auto">
          {t("why.subtitle")}
        </p>

        {/* Content */}
        <div className="flex mt-14 max-lg:mt-8 max-lg:flex-col max-md:w-full max-lg:mx-auto">
          
          {/* Image */}
          <div className="w-1/2 mx-auto max-md:w-full justify-between flex flex-col">
            <img 
              src={ImageFilterMembrane} 
              alt="" 
              className="my-auto max-lg:mb-6 max-md:w-10/12 max-md:mx-auto"
            />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6 w-1/2 max-lg:w-full items-end max-lg:items-center">
            <WhyCard 
              image={<SlChemistry />}
              title={t("why.cards.card1.title")}
              subtitle={t("why.cards.card1.subtitle")}
            />
            <WhyCard 
              image={<SlEnergy />}
              title={t("why.cards.card2.title")}
              subtitle={t("why.cards.card2.subtitle")}
            />
            <WhyCard 
              image={<HiOutlineRefresh />}
              title={t("why.cards.card3.title")}
              subtitle={t("why.cards.card3.subtitle")}
            />
            <WhyCard 
              image={<IoDiamondOutline />}
              title={t("why.cards.card4.title")}
              subtitle={t("why.cards.card4.subtitle")}
            />    
          </div>  
        </div>
      </div>

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </div>
  )
}