type IndustriesCard = {
  image: string;
  text: string;
}

type Cards = {
  image: React.ReactNode;
  title: string;
  subtitle: string;
}

export const IndustriesCard = ( {image, text}: IndustriesCard ) => {
  return(
    <div className="m-auto">
      <img 
        src={image}
        alt="" 
        className="w-[230px] h-[230px] m-auto object-cover object-center rounded-full"
      />
      <p className="text-center font-semibold mt-3 text-lg">
        {text}
      </p>
    </div>
  )
}

export const WhyCard = ({ image, title, subtitle }: Cards) => {
  return(
    <div className="text-center bg-white/90 max-md:w-full w-[450px] p-4 flex">

      <p className="text-[50px] max-md:text-[40px] flex justify-center text-red-mg bg-white p-4 max-md:p-2 max-md:pl-0 rounded-full">
        {image}
      </p>

      <div className="m-auto">
        <p className="text-xl font-semibold">
          {title}
        </p>
        <p>
          {subtitle}
        </p>        
      </div>
    </div>
  )
}

export const WhatWeDoCard = ({ image, title, subtitle }: Cards) => {
  return(
    <div className=" bg-white/90 w-[500px] max-md:w-full mx-auto p-4 flex">

      <p className="text-[50px] max-md:text-[40px] flex text-red-mg p-4 max-md:p-2 max-md:pl-0 max-md:-mt-1 -mt-3">
        {image}
      </p>

      <div className="m-auto mt-0 pl-2">
        <p className="text-xl font-semibold pb-2 max-md:text-lg">
          {title}
        </p>
        <p className="">
          {subtitle}
        </p>        
      </div>
    </div>
  )
}