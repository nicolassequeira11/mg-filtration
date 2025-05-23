import { useTranslation } from "react-i18next"
import { TitleSection } from "../elements/Titles";
import { List } from "../elements/List";
import { List2 } from "../elements/List";

type AdvantagesLayout = {
  image: string;
  array: string[];
  textList2?: string;
  arrayList2?: string[];
  isList?: boolean;
}

export const AdvantagesLayout = ({image, array, textList2, arrayList2, isList}: AdvantagesLayout) => {
  const {t} = useTranslation();

  return(
    <div className="my-20">
      
      {/* Title */}
      <div className="my-10 max-md:w-11/12 mx-auto">
        <TitleSection 
          text={t('plants.cards.card1.content.advantages.title')}
          textConfig={"text-center"}
        />
      </div>

      {/* Content */}
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="0"
        className="grid grid-cols-2 max-md:grid-cols-1 max-md:w-11/12 gap-10 mx-auto w-[70rem] max-w-[95vw] mt-12"
      >
        <div>
          <List 
            array={array}
          />

          {isList ? 
            <div className="mt-6">
              <List2 
                text={textList2}
                array={arrayList2}
              />
            </div>
          : ""}
        </div>
        <div className="max-md:w-11/12 max-md:mx-auto">
          <img 
            src={image} 
            alt=""
            className="rounded-bl-4xl rounded-tr-4xl h-[90%] w-full object-cover" 
          />
        </div>
      </div>
    </div>
  )
}