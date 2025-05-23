import VideoBanner from "../../assets/video-banner-mg-filtration.mp4"
import { useTranslation } from "react-i18next"

export const Bannerhome = () => {
  const {t} = useTranslation();

  return(
    <div className="flex w-full relative">

      {/* Video */}
      <video
        src={VideoBanner}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[80vh] max-md:h-[40vh] object-cover brightness-75 object-center max-md:object-center"
      />

      {/* Text */}
      <div 
        className="absolute left-0 right-0 bottom-0 top-0 text-center flex 
          justify-center flex-col w-11/12 mx-auto"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="0"
      >
        <p className="text-5xl max-md:text-2xl text-white font-raleway font-bold">
          {t("banner.title")}
        </p>
        <p className="text-2xl max-md:text-lg text-white mt-6 font-raleway">
          {t("banner.subtitle")}
        </p>
      </div>
    </div>
  )
}