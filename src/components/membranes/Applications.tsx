import { TitleSection } from "../elements/Titles";
import { TypeMembraneCard } from "../elements/Cards";
import { useTranslation } from "react-i18next";

type ApplicationsLayout = {
  title1: string;
  title2: string;
  title3: string;
  array1: string[];
  array2: string[];
  array3: string[];
}

export const ApplicationsLayout = ({ title1, title2, title3, array1, array2, array3}: ApplicationsLayout) => {
  const {t} = useTranslation();

  return(
    <div className="mb-28">
      
      {/* Title */}
      <div className="my-10 max-md:w-11/12 mx-auto">
        <TitleSection 
          text={t('plants.cards.card1.content.applications.title')}
          textConfig={"text-center"}
        />
      </div>

      {/* Content */}
      <div 
        className="grid grid-cols-3 max-lg:grid-cols-1 gap-10 mx-auto w-[70rem] max-w-[95vw] mt-12 max-md:w-11/12"
      >
        {/* Eonology */}
        <TypeMembraneCard 
          title={title1}
          array={array1}
        />
        <TypeMembraneCard 
          title={title2}
          array={array2}
        />
        <TypeMembraneCard 
          title={title3}
          array={array3}
        />
      </div>
    </div>
  )
}