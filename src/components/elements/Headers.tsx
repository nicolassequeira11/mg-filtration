
type HeaderMembrane = {
  text: string;
  description?: string;
}

export const HeaderMembrane = ({text, }: HeaderMembrane) => {
  return(
    <div 
      className="bg-[url(./assets/background-why.jpg)] bg-center bg-cover py-20 mb-20"
    >
      <p className="text-6xl max-md:text-4xl font-bold text-center">
        {text}
      </p>
      {/* <p className="text-md text-center mt-4">
        {description}
      </p> */}
    </div>
  )
}