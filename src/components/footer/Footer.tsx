import ImageSIMEI from "../../assets/simei-2017-logo.jpg"
import ImageDrinktec from "../../assets/coversimeidrinktec.jpg"
import Logo from "../../assets/mg-filtration-logo-footer.png"

import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";


export const Footer = () => {
  return(
    <div className="bottom-0">
      <div 
        className="bg-black-mg/80 py-6 flex
          bg-[url(./assets/background-footer-4.jpg)] bg-bottom bg-cover"
      >
        <div className="flex max-md:flex-col-reverse mx-auto max-md:w-11/12 w-[70rem] max-w-[95vw] justify-between">

          <div className="flex gap-6 max-md:flex-col max-md:mt-6">
            <img 
              src={ImageSIMEI} 
              alt=""
              className="h-[100px] object-contain" 
            />
            <img 
              src={ImageDrinktec} 
              alt=""
              className="h-[100px] object-contain" 
            />
          </div>

          <div className="bg-black-mg/50 text-white p-4 flex">

            {/* Email */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <MdEmail 
                  className="text-[20px] w-fit" 
                />
                <p className="text-sm">
                  info@mgfiltration.com
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-2">
                <HiPhone 
                  className="text-[20px] w-fit" 
                />
                <p className="text-sm">
                  +359 892466013
                </p>
              </div>

              {/* Address */}
              <div className="flex gap-2">
                <MdLocationOn 
                  className="text-[20px] w-fit" 
                />
                <p className="text-sm">
                  Sredna gora, 55, 13903 Sofia, Bulgaria
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Credits */}
      <div className="bg-[#070508] py-3">
        <div 
          className="flex justify-between text-center text-white mx-auto w-[70rem] max-w-[95vw]
            max-md:flex-col max-md:w-11/12"
        >
          <div className="w-3/12 m-auto max-md:hidden">
            <img 
              src={Logo} 
              alt="" 
              className="w-8/12"
            />
          </div>
          <div className="w-6/12 m-auto max-md:w-full">
            <p className="text-center text-sm">
              Copyright © 2025, M.G. Filtration Technology Ltd. All Rights Reserved.
            </p>
          </div>
          <div className="w-3/12 m-auto max-md:w-full max-md:mt-4">
            <p className="text-sm text-end max-md:text-center">
              Powered by Nicolás Sequeira
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}