import { TitleSection } from "../elements/Titles"
import { useTranslation } from "react-i18next";
import ImageAboutUs from "../../assets/image-about-us.jpg"

export const AboutUsHome = () => {
  const { t } = useTranslation();

  return(
    <div className="flex flex-col mx-auto max-md:w-full w-[70rem] max-w-[95vw] mb-28 mt-14">

      {/* Title */}
      <TitleSection 
        text={t('aboutUs.title')}
        textConfig={"text-center"}
      />

      {/* Content */}
      <div className="mt-12 flex gap-12 max-lg:m-auto max-lg:flex-col-reverse max-lg:w-11/12">
        <div className="w-1/2 max-lg:w-full">
          <p className="max-lg:-mt-6">
            M.G. Filtration Technology Ltd. nace de un proyecto italiano destinado a diseñar y producir filtros con membrana mediante tecnología de filtración tangencial. Además, desarrollamos e implementamos las correspondientes instalaciones para cada necesidad.
          </p>
          <p className="mt-6">
            Nos enfocamos en brindar la máxima asistencia técnica y profesionalidad a nuestros clientes, desarrollando procesos y plantas de separación adaptadas a cada industria.
          </p>
          <p className="mt-6">
            Trabajamos en el desarrollo y aplicación de soluciones globales para el tratamiento de aguas y productos líquidos en los sectores industrial y civil, empleando tecnologías como: Microfiltración, Ultrafiltración, Nanofiltración y Ósmosis inversa.
          </p>
          <p className="mt-6">
            Gracias a nuestro laboratorio químico, físico y biológico, y a nuestra experiencia técnica, hemos desarrollado una serie de plantas piloto que permiten realizar pruebas preliminares sobre pequeños volúmenes. Así seleccionamos la membrana más adecuada y optimizamos los parámetros del proceso a escala industrial.
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