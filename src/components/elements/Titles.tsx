type TitleSection = {
  text: string;
  textConfig: string;
}

export const TitleSection = ({text, textConfig}: TitleSection) => {
  return(
    <h2 
      className={`font-bold text-4xl font-raleway
        max-md:text-3xl
        ${textConfig}`}
    >
      {text}
    </h2>
  )
}