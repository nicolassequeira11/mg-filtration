import { Header } from "../components/elements/Headers"
import { useTranslation } from "react-i18next"
import { TitleSection } from "../components/elements/Titles";
import { ContactCard } from "../components/elements/Cards";

import UmbertoCover from "../assets/umberto-cover.jpg"
import GospodinkaCover from "../assets/gospodinka-cover.jpg"

export const Contact = () => {
  const {t} = useTranslation();

  return(
    <div>
      <Header 
        text={t("contact.title")}
        description={t("contact.subtitle")}
      />

      {/* Contacts */}
      <div 
        className="flex mx-auto mt-14 justify-center gap-x-20 
          max-md:grid min-md:grid-cols-2 max-md:gap-y-10"
      >
        <ContactCard 
          image={UmbertoCover}
          title={t("contact.umberto.name")}
          subtitle={t("contact.umberto.position")}
          email={t("contact.umberto.email")}
          tel={t("contact.umberto.tel")}
          mailto="mailto:ramella@mgfiltration.com"
          telto="tel:+3484434004"
          textEmail="Enviar correo"
          textTel="Llamar"
        />
        <ContactCard 
          image={GospodinkaCover}
          title={t("contact.gospodinka.name")}
          subtitle={t("contact.gospodinka.position")}
          email={t("contact.gospodinka.email")}
          tel={t("contact.gospodinka.tel")}
          mailto="mailto:zhecheva@mgfiltration.com"
          telto="tel:+359884315151"
          textEmail="Enviar correo"
          textTel="Llamar"
        />
      </div>

      {/* Call to action */}
      <div className="mt-20 bg-[url(./assets/contact-calltoaction.jpg)] bg-center bg-cover py-16">

        <div 
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
          className="mx-auto w-[70rem] max-w-[95vw] max-md:w-11/12"
        >
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