import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Bannerhome } from "../components/home/Banner"
import { AboutUsHome } from "../components/home/AboutUs"
import { IndustriesHome } from "../components/home/Industries"
import { WhyHome } from "../components/home/Why"
import { WhatWeDoHome } from "../components/home/WhatWeDo"
import { PlantsHome } from "../components/home/Plants"
import { useTranslation } from "react-i18next";

export const Home = ({ language }: { language: string }) => {
  const {t, i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])

  return(
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("seo.home.title")}</title>
        <meta name="description" content={t("seo.home.description")} />
        <link rel="canonical" href={`https://www.mgfiltration.com/${language}`} />
      </Helmet>

      <section className="">
        <Bannerhome />
        <AboutUsHome />
        <WhatWeDoHome />
        <IndustriesHome />
        <WhyHome />
        <PlantsHome />
      </section>
    </>
  )
}