import { Header } from "../components/elements/Headers"
import { useTranslation } from "react-i18next"
import { ApplicationsLayout } from "../components/membranes/Applications"
import { AdvantagesLayout } from "../components/membranes/Advantages"
import { BenefitsLayout } from "../components/membranes/Benefits"

import Image from "../assets/plants/nanofiltration/nanofiltration-mgfiltration-advantages.jpg"

export const NanoFiltration = () => {
  const {t} = useTranslation()

  return(
    <div>
      {/* Header */}
      <Header 
        text={t("plants.cards.card3.title")}
      />

      {/* Applications */}
      <ApplicationsLayout 
        title1={t("industries.text1")}
        title2={t("industries.text2")}
        title3={t("industries.text3")}
        array1={t("plants.cards.card3.content.applications.eonology", { returnObjects: true }) as string[]}
        array2={t("plants.cards.card3.content.applications.beveragesAndFood", { returnObjects: true }) as string[]}
        array3={t("plants.cards.card3.content.applications.pharmaceuticals", { returnObjects: true }) as string[]}
      />

      {/* Advantages */}
      <AdvantagesLayout 
        image={Image}
        array={t("plants.cards.card3.content.advantages.list", { returnObjects: true }) as string[]}
        isList={false}
      />

      {/* Benefits */}
      <BenefitsLayout 
        newArray={t("plants.cards.card3.content.benefits.list", { returnObjects: true }) as string[]}
      />
    </div>
  )
}