import { Header } from "../components/elements/Headers"
import { useTranslation } from "react-i18next"
import { BenefitsLayout } from "../components/membranes/Benefits"
import { TitleSection } from "../components/elements/Titles"

export const Stabilization = () => {
  const {t} = useTranslation()

  return(
    <div>
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
        <div className="mx-auto w-[70rem] max-w-[95vw] mt-12">         
          <p className="text-lg">
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
        <div className="mx-auto w-[70rem] max-w-[95vw] mt-12">         
          <p className="text-lg">
            {t("plants.cards.card5.content.howWork.text1")}
          </p>
          <p className="mt-4 text-lg">
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
        <div className="mx-auto w-[70rem] max-w-[95vw] mt-12">         
          <p className="text-lg">
            {t("plants.cards.card5.content.version.text")}
          </p>
        </div>
      </div>

      {/* Benefits */}
      <BenefitsLayout 
        newArray={t("plants.cards.card5.content.benefits.list", { returnObjects: true }) as string[]}
      />
    </div>
  )
}