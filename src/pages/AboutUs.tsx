import { useTranslation } from "react-i18next"
import { Header } from "../components/elements/Headers";
import { CommitmentCard } from "../components/elements/Cards";
import { TitleSection } from "../components/elements/Titles";
import { Timeline } from "../components/elements/Timelines";

import { MdOutlineRecycling } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { PiHandshakeFill } from "react-icons/pi";
import { IoWater } from "react-icons/io5";

import ImageWho from "../assets/plants/nanofiltration/nanofiltration-mgfiltration-advantages.jpg";
import { FaSearch } from "react-icons/fa";
import { RiTestTubeFill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";

export const AboutUs = () => {
  const {t} = useTranslation();

  const arrayTimeline = [
    {
      icon: <FaSearch />,
      title: t("aboutUs.timeline.steps.step1.title"),
      text: t("aboutUs.timeline.steps.step1.text")
    },
    {
      icon: <RiTestTubeFill />,
      title: t("aboutUs.timeline.steps.step2.title"),
      text: t("aboutUs.timeline.steps.step2.text")
    },
    {
      icon: <FaTools />,
      title: t("aboutUs.timeline.steps.step3.title"),
      text: t("aboutUs.timeline.steps.step3.text")
    },
    {
      icon: <SiAdguard />,
      title: t("aboutUs.timeline.steps.step4.title"),
      text: t("aboutUs.timeline.steps.step4.text")
    },
  ]

  return(
    <div>
      <Header 
        text={t("aboutUs.title")}
        description={t("aboutUs.subtitle")}
      />

      <div className="mx-auto w-[70rem] max-w-[95vw] max-md:w-11/12">

        {/* Who */}
        <div className="mb-20 mt-12">

          {/* Title */}
          {/* <TitleSection 
            text={t("aboutUs.who.title")}
            textConfig="text-center"
          /> */}

          <div className="mt-20 flex gap-12 max-lg:m-auto max-lg:flex-col-reverse max-lg:w-11/12">
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

        {/* Timeline */}
        <div className="min-lg:py-20 mx-auto w-[70rem] max-w-[95vw] max-md:w-11/12">

          {/* Title */}
          <TitleSection 
            text={t("aboutUs.timeline.title")}
            textConfig="text-center"
          />

          <div className="mt-16">
            <Timeline 
              array={arrayTimeline}
            />
          </div>
        </div>

        {/* Commitment */}
        <div className="my-20">

          {/* Title */}
          <TitleSection 
            text={t("aboutUs.commitment.title")}
            textConfig="text-center"
          />

          {/* Content */}
          <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-4 gap-6 mt-16">
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

      {/* Call to action */}
      <div className="mt-20 bg-[url(./assets/contact-calltoaction.jpg)] bg-center bg-cover py-16">

        <div className="mx-auto w-[70rem] max-w-[95vw] max-md:w-11/12">

          {/* Title */}
          <TitleSection 
            text={t("aboutUs.callToAction.title")}
            textConfig="text-center text-white"
          />

          {/* Subtitle */}
          <p className="mt-4 text-center text-xl text-white max-md:text-lg">
            {t("aboutUs.callToAction.subtitle")}
          </p>

          {/* Button */}
          <a 
            href="mailto:info@mgfiltration.com" 
            className="text-3xl text-center mx-auto border-4 border-white hover:text-white px-8 py-4 
              rounded-full flex w-fit mt-14 font-bold font-raleway hover:bg-transparent hover:shadow-none
              transition-all ease-in duration-100
              bg-white text-red-mg shadow-2xl
              max-md:text-2xl"
          >
            {t("aboutUs.callToAction.textButton")}
          </a>

        </div>
      </div>

    </div>
  )
}