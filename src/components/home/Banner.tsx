import BannerHome from "../../assets/banner-2.jpg"

export const Bannerhome = () => {
  return(
    <div className="">
      <div className="h-[75vh] max-md:h-[30vh] flex">
        <img 
          src={BannerHome} 
          alt="" 
          className="object-cover object-bottom w-full max-md:object-center"
        />
      </div>
    </div>
  )
}