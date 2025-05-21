
type TypeHeader = {
  text: string;
  description?: string;
}

export const Header = ({text, description}: TypeHeader) => {
  return(
    <div 
      className="bg-[url(./assets/background-why.jpg)] bg-center bg-cover py-20 mb-20"
    >
      <p className="text-6xl max-md:text-4xl font-bold text-center font-raleway">
        {text}
      </p>
      {description ? 
        <p className="text-md text-center mt-4">
          {description}
        </p>
      : ""}
    </div>
  )
}