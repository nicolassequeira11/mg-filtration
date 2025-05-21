import { useTranslation } from "react-i18next"
import { Header } from "../components/elements/Headers";
import { CommitmentCard } from "../components/elements/Cards";
import { TitleSection } from "../components/elements/Titles";

import { MdOutlineRecycling } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { PiHandshakeFill } from "react-icons/pi";
import { IoWater } from "react-icons/io5";

import ImageWho from "../assets/plants/nanofiltration/nanofiltration-mgfiltration-advantages.jpg";


export const AboutUs = () => {
  const {t} = useTranslation();

  return(
    <div>
      <Header 
        text={t("aboutUs.title")}
        description={t("aboutUs.subtitle")}
      />

      <div className="mx-auto w-[70rem] max-w-[95vw] max-md:w-11/12">

        {/* Who */}
        <div className="mb-28 mt-12">

          {/* Title */}
          <TitleSection 
            text={t("aboutUs.who.title")}
            textConfig="text-center"
          />

          <div className="mt-12 flex gap-12 max-lg:m-auto max-lg:flex-col-reverse max-lg:w-11/12">
            <div className="w-1/2 max-lg:w-full">
              <p className="max-lg:-mt-6">
                {t("aboutUs.who.text1")}
              </p>
              <p className="mt-6">
                {t("aboutUs.who.text2")}
              </p>
              <p className="mt-6">
                {t("aboutUs.who.text3")}
              </p>
              <p className="mt-6">
                {t("aboutUs.who.text4")}
              </p>
            </div>

            {/* Image */}
            <div className="w-1/2 max-lg:w-full flex max-lg:mt-8">
              <img 
                src={ImageWho} 
                alt=""
                className="rounded-bl-4xl rounded-tr-4xl h-full object-cover object-center flex w-full
                  max-sm:h-[200px]
                  max-lg:h-[300px] 
                  " 
              />
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="my-28">

          {/* Title */}
          <TitleSection 
            text={t("aboutUs.commitment.title")}
            textConfig="text-center"
          />

          {/* Content */}
          <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-4 gap-10 mt-12">
            <CommitmentCard 
              image={<MdOutlineRecycling />}
              title={t("aboutUs.commitment.cards.card1.title")}
              subtitle={t("aboutUs.commitment.cards.card1.text")}
              style="text-green-600"
            />
            <CommitmentCard 
              image={<IoIosRocket />}
              title={t("aboutUs.commitment.cards.card2.title")}
              subtitle={t("aboutUs.commitment.cards.card2.text")}
              style="text-gray-400"
            />
            <CommitmentCard 
              image={<PiHandshakeFill />}
              title={t("aboutUs.commitment.cards.card3.title")}
              subtitle={t("aboutUs.commitment.cards.card3.text")}
              style="text-yellow-500"
            />
            <CommitmentCard 
              image={<IoWater />}
              title={t("aboutUs.commitment.cards.card4.title")}
              subtitle={t("aboutUs.commitment.cards.card4.text")}
              style="text-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}