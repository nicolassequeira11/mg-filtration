import Logo from "../../assets/mg-filtration-logo-footer.png"
import { useTranslation } from "react-i18next";

import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";


export const Footer = () => {
  const {t} = useTranslation();
  
  return(
    <div className="bottom-0">
      <div 
        className="bg-black-mg/80 py-8 flex
          bg-[url(./assets/background-footer-4.jpg)] bg-bottom bg-cover"
      >
        <div className="flex max-lg:flex-col mx-auto max-lg:w-11/12 w-[80rem] gap-20 max-lg:gap-10 max-w-[95vw] justify-between">

          <div className="bg-black-mg/50 w-fit text-white p-4 flex mx-auto">
            <div className="flex flex-col gap-3">
              
              {/* Email */}
              <div className="flex gap-2 max-lg:mx-auto">
                <MdEmail 
                  className="text-[20px] w-fit" 
                />
                <a 
                  href="mailto:mgfiltrazioni@gmail.com" 
                  className="text-sm hover:text-red-mg"
                >
                  mgfiltrazioni@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="flex gap-2 max-lg:mx-auto">
                <MdLocationOn 
                  className="text-[20px] w-fit" 
                />
                <p className="text-sm">
                  Sredna gora, 55, 13903 Sofia, Bulgaria
                </p>
              </div>

              <div className="m-auto max-lg:hidden mb-0">
                <img 
                  src={Logo} 
                  alt="MG Filtration Technology" 
                  className="w-6/12"
                />
              </div>

            </div>
          </div>

          {/* Umberto Ramella Card */}
          <div className="bg-black-mg/50 text-white p-4 flex max-lg:mx-auto">
            <div className="flex flex-col gap-3 text-center">

              <div className="">
                {/* Name */}
                <p className="font-semibold text-xl text-red-mg h-fit font-raleway">
                  Umberto Ramella
                </p>

                {/* Position */}
                <p className="">
                  Sales Manager
                </p>
              </div>

              {/* Email */}
              <div className="flex gap-2 max-lg:justify-center">
                <MdEmail 
                  className="text-[20px] w-fit" 
                />
                <a 
                  href="mailto:ramella@mgfiltration.com" 
                  className="text-sm hover:text-red-mg"
                >
                  ramella@mgfiltration.com
                </a>
              </div>

              {/* Phone BG */}
              <a 
                href="tel:+3484434004"
                className="flex gap-2 max-lg:justify-center"
              >
                <HiPhone 
                  className="text-[20px] w-fit" 
                />
                <p className="text-sm hover:text-red-mg">
                  (ITA) +3484434004
                </p>
              </a>

            </div>
          </div>

          {/* G.Zhecheva Card */}
          <div className="bg-black-mg/50 text-white p-4 flex max-lg:mx-auto">
            <div className="flex flex-col gap-3 text-center">

              <div className="">
                {/* Name */}
                <p className="font-semibold text-xl text-red-mg h-fit font-raleway">
                  G.Zhecheva
                </p>

                {/* Position */}
                <p className="">
                  {t("contact.gospodinka.position")}
                </p>
              </div>

              {/* Email */}
              <div className="flex gap-2 max-lg:justify-center">
                <MdEmail 
                  className="text-[20px] w-fit" 
                />
                <a 
                  href="mailto:zhecheva@mgfiltration.com" 
                  className="text-sm hover:text-red-mg"
                >
                  zhecheva@mgfiltration.com
                </a>
              </div>

              {/* Phone BG */}
              <a 
                href="tel:+359884315151"
                className="flex gap-2 max-lg:justify-center"
              >
                <HiPhone 
                  className="text-[20px] w-fit" 
                />
                <p className="text-sm hover:text-red-mg">
                  (BG) +359884315151 
                </p>
              </a>

            </div>
          </div>
        </div>
      </div>
      
      {/* Credits */}
      <div className="bg-[#070508] py-4 ">
        <div 
          className="flex justify-between text-center text-white mx-auto w-[80rem] max-w-[95vw]
            max-lg:flex-col max-lg:w-11/12"
        >

          <div className="w-6/12 m-auto max-lg:w-10/12">
            <p className="text-left max-lg:text-center text-sm">
              Copyright © 2025, M.G. Filtration Technology Ltd. All Rights Reserved.
            </p>
          </div>
          <div className="w-6/12 m-auto max-lg:w-full max-lg:mt-4">
            <p className="text-sm text-end max-lg:text-center">
              Powered by Nicolás Sequeira
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}