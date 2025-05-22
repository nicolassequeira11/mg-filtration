import { TitleSection } from "../elements/Titles"
import { useTranslation } from "react-i18next";
import ImageAboutUs from "../../assets/image-about-us.jpg"

export const AboutUsHome = () => {
  const { t } = useTranslation();

  return(
    <div className="flex flex-col mx-auto max-md:w-full w-[70rem] max-w-[95vw] mb-20 mt-14">

      {/* Title */}
      <TitleSection 
        text={t('aboutUs.title')}
        textConfig={"text-center"}
      />

      {/* Content */}
      <div className="mt-12 flex gap-12 max-lg:m-auto max-lg:flex-col-reverse max-lg:w-11/12">
        <div className="w-1/2 max-lg:w-full">
          <p className="max-lg:-mt-6">
            {t("aboutUs.text1")}
          </p>
          <p className="mt-6">
            {t("aboutUs.text2")}
          </p>
          <p className="mt-6">
            {t("aboutUs.text3")}
          </p>
          <p className="mt-6">
            {t("aboutUs.text4")}
          </p>
        </div>

        {/* Image */}
        <div className="w-1/2 max-lg:w-full flex max-lg:mt-8">
          <img 
            src={ImageAboutUs} 
            alt=""
            className="rounded-bl-4xl rounded-tr-4xl h-full object-cover object-center flex w-full
              max-sm:h-[200px]
              max-lg:h-[300px] 
              " 
          />
        </div>
      </div>
    </div>
  )
}