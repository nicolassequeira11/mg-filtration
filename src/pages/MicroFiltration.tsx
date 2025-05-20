import { HeaderMembrane } from "../components/elements/Headers"
import { useTranslation } from "react-i18next"
import { ApplicationsLayout } from "../components/membranes/Applications"
import { AdvantagesLayout } from "../components/membranes/Advantages"
import { BenefitsLayout } from "../components/membranes/Benefits"

import Image from "../assets/plants/microfiltration/microfiltration-mgfiltration-advantages.jpg"

export const MicroFiltration = () => {
  const {t} = useTranslation()

  return(
    <div>
      {/* Header */}
      <HeaderMembrane 
        text={t("plants.cards.card1.title")}
        description={t("plants.cards.card1.subtitleContent")}
      />

      {/* Applications */}
      <ApplicationsLayout 
        title1={t("industries.text1")}
        title2={t("industries.text2")}
        title3={t("industries.text3")}
        array1={t("plants.cards.card1.content.applications.eonology", { returnObjects: true }) as string[]}
        array2={t("plants.cards.card1.content.applications.beveragesAndFood", { returnObjects: true }) as string[]}
        array3={t("plants.cards.card1.content.applications.pharmaceuticals", { returnObjects: true }) as string[]}
      />

      {/* Advantages */}
      <AdvantagesLayout 
        image={Image}
        array={t("plants.cards.card1.content.advantages.list", { returnObjects: true }) as string[]}
        textList2={t('plants.cards.card1.content.advantages.list2.text')}
        arrayList2={t("plants.cards.card1.content.advantages.list2.list", { returnObjects: true }) as string[]}
      />

      {/* Benefits */}
      <BenefitsLayout 
        newArray={t("plants.cards.card1.content.benefits.list", { returnObjects: true }) as string[]}
      />
    </div>
  )
}