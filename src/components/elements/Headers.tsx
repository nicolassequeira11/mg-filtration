
type TypeHeader = {
  text: string;
  description?: string;
}

export const Header = ({text, description}: TypeHeader) => {
  return(
    <div 
      className="relative bg-[url(./assets/background-why.jpg)] bg-center bg-cover py-20"
    >
      <p className="text-6xl max-md:text-4xl font-bold text-center font-raleway">
        {text}
      </p>
      {description ? 
        <p className="text-md text-center mt-4 max-md:w-11/12 mx-auto">
          {description}
        </p>
      : ""}

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </div>
  )
}