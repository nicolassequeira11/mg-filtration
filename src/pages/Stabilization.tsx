import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../components/elements/Headers"
import { useTranslation } from "react-i18next"
import { BenefitsLayout } from "../components/membranes/Benefits"
import { TitleSection } from "../components/elements/Titles"

export const Stabilization = ({ language }: { language: string }) => {
  const {t, i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])

  return(
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("seo.stabilization.title")}</title>
        <meta name="description" content={t("seo.stabilization.description")} />
        <link rel="canonical" href={`https://www.mgfiltration.com/${language}`} />
      </Helmet>

      <section>
        {/* Header */}
        <Header 
          text={t("plants.cards.card5.title")}
        />

        {/* Why */}
        <div className="mb-28 mt-24">
          <div className="my-10">
            <TitleSection 
              text={t("plants.cards.card5.content.why.title")}
              textConfig={"text-center"}
            />
          </div>
          <div className="mx-auto w-[70rem] max-w-[95vw] max-md:w-10/12 mt-12">         
            <p 
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              className=""
            >
              {t("plants.cards.card5.content.why.text")}
            </p>
          </div>
        </div>

        {/* HowWork */}
        <div className="my-28">
          <div className="my-10">
            <TitleSection 
              text={t("plants.cards.card5.content.howWork.title")}
              textConfig={"text-center"}
            />
          </div>
          <div 
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
            className="mx-auto w-[70rem] max-w-[95vw] max-md:w-10/12 mt-12"
          >         
            <p className="">
              {t("plants.cards.card5.content.howWork.text1")}
            </p>
            <p className="mt-4">
              {t("plants.cards.card5.content.howWork.text2")}
            </p>
          </div>
        </div>

        {/* Version */}
        <div className="my-28">
          <div className="my-10">
            <TitleSection 
              text={t("plants.cards.card5.content.version.title")}
              textConfig={"text-center"}
            />
          </div>
          <div 
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
            className="mx-auto w-[70rem] max-w-[95vw] max-md:w-10/12 mt-12"
          >         
            <p className="">
              {t("plants.cards.card5.content.version.text")}
            </p>
          </div>
        </div>

        {/* Benefits */}
        <BenefitsLayout 
          newArray={t("plants.cards.card5.content.benefits.list", { returnObjects: true }) as string[]}
        />
      </section>
    </>
  )
}