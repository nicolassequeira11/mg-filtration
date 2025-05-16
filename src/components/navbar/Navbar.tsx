import Logo from "../../assets/mg-filtration-logo.png"
import LanguageSelector from "./LanguageSelector"
import { useTranslation } from "react-i18next"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev) // Alternar el estado
  };

  // const handleClickLink = () => {
  //   setIsMenuOpen(false)
  // }

  return(
    <header className="max-lg:top-0 sticky bg-white/95 max-lg:bg-white shadow-md">
      <nav 
        className="flex text-center justify-between 
        w-[70rem] max-w-[95vw] max-lg:w-11/12 mx-auto py-6"
      >

        {/* Logo */}
        <Link 
          to="/" 
          className="w-2/6 my-auto max-sm:w-7/12"
        >
          <div className="my-auto text-[30px] font-[800] max-lg:text-[20px]">
            <img 
              src={Logo} 
              alt="MG Filtration Technology" 
              className="object-contain mx-auto"
            />
          </div>
        </Link>

        {/* Links */}
        <div 
          className="w-4/6 grid-cols-4 grid m-auto font-semibold font-raleway text-end
            max-md:hidden"
        >
          <Link to="/">
            {t('navbarLinks.Home')}
          </Link>
          <Link to="/gallery">
            {t('navbarLinks.Gallery')}
          </Link>
          <Link to="/contact">
            {t('navbarLinks.Contact')}
          </Link>
        </div>

        {/* Language */}
        <div className="w-1/6 m-auto text-end max-lg:hidden">
          <LanguageSelector />
        </div>

        {/* Menú Mobile */}
        <div className="max-lg:flex hidden w-5/12 justify-end">

          {/* Language */}
          <div className="my-auto max-lg:mr-3">
            <LanguageSelector />
          </div>

          <div className="w-fit my-auto">
            <GiHamburgerMenu 
              onClick={handleMenuOpen}
              className="w-fit my-auto text-[25px] text-black/80
                hover:text-green-base cursor-pointer"
            />
          </div>
        </div>

        {isMenuOpen ? 
          <div 
            className="w-full py-6 mx-auto absolute max-lg:gap-6 top-[75px] left-0 right-0 z-50 flex flex-col bg-white"
          >
            <Link to="/" className="text-[17px]">
              {t('navbarLinks.Home')}
            </Link>
            <Link to="/gallery" className="text-[17px]">
              {t('navbarLinks.Gallery')}
            </Link>
            <Link to="/contact" className="text-[17px]">
              {t('navbarLinks.Contact')}
            </Link>
          </div>
        : ""}
      </nav>
    </header>

  )
}