import { TitleSection } from "../elements/Titles"
import { IndustriesCard } from "../elements/Cards"
import { useTranslation } from "react-i18next"

import ImageEnologia from "../../assets/enologia.jpg"
import ImageBebidas from "../../assets/bebidas-alimentos.jpg"
import ImageFarmaceutica from "../../assets/farmaceutica.jpg"


export const IndustriesHome = () => {
  const { t } = useTranslation()

  return(
    <div className="flex flex-col mx-auto w-[70rem] max-w-[95vw] my-28">
      <TitleSection 
        text={t('industries.title')}
        textConfig={"text-center"}
      />

      {/* Content */}
      <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-12 mt-12 max-md:mt-8">
        <IndustriesCard
          image={ImageEnologia}
          text={t("industries.text1")}
        />
        <IndustriesCard
          image={ImageBebidas}
          text={t("industries.text2")}
        />
        <IndustriesCard
          image={ImageFarmaceutica}
          text={t("industries.text3")}
        />
      </div>
    </div>
  )
}