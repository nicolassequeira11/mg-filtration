import { TitleSection } from "../elements/Titles"
import { useTranslation } from "react-i18next"
import { PlantsCard } from "../elements/Cards"

// Images
import CoverMicrofiltration from "../../assets/plants/microfiltration/microfiltration-mgfiltration-cover.jpg"
import CoverUltrafiltration from "../../assets/plants/ultrafiltration/ultrafiltration-mgfiltration-cover.jpg"
import CoverNanofiltration from "../../assets/plants/nanofiltration/nanofiltration-mgfiltration-cover.jpg"
import CoverReverseOsmosis from "../../assets/plants/reverse-osmosis/reverse-osmosis-mgfiltration-cover.jpg"
import CoverStabilization from "../../assets/plants/stabilization/stabilization-mgfiltration-cover.jpg"

export const PlantsHome = () => {
  const { t } = useTranslation()

  return(
    <div className="flex flex-col mx-auto w-[70rem] max-w-[95vw] my-20">

      {/* Title */}
      <TitleSection 
        text={t('plants.title')}
        textConfig={"text-center mx-auto"}
      />

      {/* Content */}
      <div 
        className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 mx-auto 
          gap-6 max-md:gap-12 mt-12 max-md:mt-8"
      >
        <PlantsCard 
          image={CoverMicrofiltration}
          title={t("plants.cards.card1.title")}
          subtitle={t("plants.cards.card1.subtitle")}
          textButton={t("plants.button")}
          linkButton="/membranes/microfiltration"
        />
        <PlantsCard 
          image={CoverUltrafiltration}
          title={t("plants.cards.card2.title")}
          subtitle={t("plants.cards.card2.subtitle")}
          textButton={t("plants.button")}
          linkButton="/membranes/ultrafiltration"
        />
        <PlantsCard 
          image={CoverNanofiltration}
          title={t("plants.cards.card3.title")}
          subtitle={t("plants.cards.card3.subtitle")}
          textButton={t("plants.button")}
          linkButton="/membranes/nanofiltration"
        />
        <PlantsCard 
          image={CoverReverseOsmosis}
          title={t("plants.cards.card4.title")}
          subtitle={t("plants.cards.card4.subtitle")}
          textButton={t("plants.button")}
          linkButton="/membranes/reverse-osmosis"
        />
        <PlantsCard 
          image={CoverStabilization}
          title={t("plants.cards.card5.title")}
          subtitle={t("plants.cards.card5.subtitle")}
          textButton={t("plants.button")}
          linkButton="/membranes/stabilization"
        />
      </div>
    </div>
  )
}