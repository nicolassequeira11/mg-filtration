import BannerHome from "../../assets/banner-2.jpg"

export const Bannerhome = () => {
  return(
    <div className="">
      <div className="h-[75vh] flex">
        <img 
          src={BannerHome} 
          alt="" 
          className="object-cover object-bottom w-full max-md:object-center"
        />
      </div>
    </div>
  )
}