import { TitleSection } from "../elements/Titles"
import { useTranslation } from "react-i18next"
import { BenefitsCard } from "../elements/Cards";

type TypeBenefitsLayout = {
  newArray: string[];
}

export const BenefitsLayout = ({newArray}: TypeBenefitsLayout) => {
  const {t} = useTranslation();

  return(
    <div 
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
      className="my-20"
    >
      {/* Title */}
      <div className="my-10 max-md:w-11/12 mx-auto">
        <TitleSection 
          text={t('plants.cards.card1.content.benefits.title')}
          textConfig={"text-center"}
        />
      </div>
    
      {/* Content */}
      <div className="flex justify-center mx-auto w-[70rem] max-w-[95vw] mt-12 max-md:w-11/12">
        <BenefitsCard 
          array={newArray}
        />
      </div>
    </div>
  )
}