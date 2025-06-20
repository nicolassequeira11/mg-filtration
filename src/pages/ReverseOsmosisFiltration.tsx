import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../components/elements/Headers"
import { useTranslation } from "react-i18next"
import { ApplicationsLayout } from "../components/membranes/Applications"
import { AdvantagesLayout } from "../components/membranes/Advantages"
import { BenefitsLayout } from "../components/membranes/Benefits"

import Image from "../assets/plants/reverse-osmosis/reverse-osmosis-mgfiltration-cover.jpg"

export const ReverseOsmosisFiltration = ({ language }: { language: string }) => {
  const {t, i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])

  return(
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("seo.reverseOsmosis.title")}</title>
        <meta name="description" content={t("seo.reverseOsmosis.description")} />
        <link rel="canonical" href={`https://www.mgfiltration.com/${language}`} />
      </Helmet>

      <section>
        {/* Header */}
        <Header 
          text={t("plants.cards.card4.title")}
        />

        {/* Applications */}
        <ApplicationsLayout 
          title1={t("industries.text1")}
          title2={t("industries.text2")}
          title3={t("industries.text3")}
          array1={t("plants.cards.card4.content.applications.eonology", { returnObjects: true }) as string[]}
          array2={t("plants.cards.card4.content.applications.beveragesAndFood", { returnObjects: true }) as string[]}
          array3={t("plants.cards.card4.content.applications.pharmaceuticals", { returnObjects: true }) as string[]}
        />

        {/* Advantages */}
        <AdvantagesLayout 
          image={Image}
          array={t("plants.cards.card4.content.advantages.list", { returnObjects: true }) as string[]}
          isList={false}
        />

        {/* Benefits */}
        <BenefitsLayout 
          newArray={t("plants.cards.card4.content.benefits.list", { returnObjects: true }) as string[]}
        />
      </section>
    </>
  )
}