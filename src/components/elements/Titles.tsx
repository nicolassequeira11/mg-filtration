type TitleSection = {
  text: string;
  textConfig: string;
}

export const TitleSection = ({text, textConfig}: TitleSection) => {
  return(
    <h2 
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
      className={`font-bold text-4xl font-raleway
        max-md:text-[1.7rem]
        ${textConfig}`}
    >
      {text}
    </h2>
  )
}