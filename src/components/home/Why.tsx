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
      className="mx-auto mt-28 justify-center flex overflow-hidden 
        bg-[url(./assets/background-why.jpg)] bg-center bg-cover"
    >
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
          A diferencia de métodos tradicionales de separación (precipitación química, fangos activos, destilación, evaporación, crio-separación, etc.), la tecnología de membranas ofrece beneficios clave.
        </p>

        {/* Content */}
        <div className="flex mt-14 max-lg:mt-8 max-lg:flex-col max-md:w-full max-lg:mx-auto">
          
          {/* Image */}
          <div className="w-1/2 mx-auto max-md:w-full justify-between flex flex-col">
            <img 
              src={ImageFilterMembrane} 
              alt="" 
              className="my-auto max-lg:mb-6"
            />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6 w-1/2 max-lg:w-full items-end max-lg:items-center">
            <WhyCard 
              image={<SlChemistry />}
              title={"Separación física"}
              subtitle={"Sin uso de químicos"}
            />
            <WhyCard 
              image={<SlEnergy />}
              title={"Bajo consumo energético"}
              subtitle={"Solo presión, no calor"}
            />
            <WhyCard 
              image={<HiOutlineRefresh />}
              title={"Reutilización del agua"}
              subtitle={"Agua lista para reusar"}
            />
            <WhyCard 
              image={<IoDiamondOutline />}
              title={"Recuperación de compuestos"}
              subtitle={"Valor añadido desde el residuo"}
            />    
          </div>  
        </div>
      </div>
    </div>
  )
}