import { useTranslation } from "react-i18next";

import { TitleSection } from "../elements/Titles"
import { WhatWeDoCard } from "../elements/Cards";

import { TiSpiral } from "react-icons/ti";
import { MdOutlineRecycling } from "react-icons/md";
import { IoWater } from "react-icons/io5";
import { MdFactory } from "react-icons/md";

export const WhatWeDoHome = () => {
  const { t } = useTranslation();

  return(
    <div 
      className="flex flex-col mx-auto my-28 
        bg-[url(./assets/background-why.jpg)] bg-center bg-cover"
    >
      <div className="w-[70rem] max-w-[95vw] mx-auto py-12">
        {/* Title */}
        <TitleSection 
          text={t('whatWeDo.title')}
          textConfig={"text-center"}
        />

        {/* Content */}
        <div className="mt-12 max-md:mt-8 justify-center max-md:w-11/12 max-md:mx-auto">

          {/* Cards */}
          <div className="m-auto grid grid-cols-2 gap-6 max-lg:grid-cols-1"> 
            <WhatWeDoCard 
              image={<TiSpiral />}
              title={"Producción de membranas estándar y personalizadas"}
              subtitle={"Diseñamos y fabricamos membranas de alta eficiencia, adaptadas a cada necesidad."}
            />
            <WhatWeDoCard 
              image={<MdOutlineRecycling />}
              title={"Separación, concentración y recuperación"}
              subtitle={"Soluciones sostenibles para aprovechar al máximo cada recurso."}
            />
            <WhatWeDoCard 
              image={<IoWater />}
              title={"Tratamiento de aguas primarias y residuales"}
              subtitle={"Procesos fiables para aguas limpias y reutilizables."}
            />
            <WhatWeDoCard 
              image={<MdFactory />}
              title={"Diseño e implementación de instalaciones industriales"}
              subtitle={"Plantas a medida con la última tecnología."}
            />
          </div>

        </div>
      </div>
    </div>
  )
}