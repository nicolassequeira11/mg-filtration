import Logo from "../../assets/mg-filtration-logo.png"
import LanguageSelector from "./LanguageSelector"
import { useTranslation } from "react-i18next"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonDropdown } from "../elements/Buttons";

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev) // Alternar el estado
  };

  const handleClickLink = () => {
    setIsMenuOpen(false)
  }

  // Prefijo con idioma actual, ejemplo "/es"
  const langPrefix = `/${i18n.language}`;

  const links = [
    {
      name: t('navbarLinks.Microfiltration'),
      link: "/membranes/microfiltration"
    },
    {
      name: t('navbarLinks.Ultrafiltration'),
      link: "/membranes/ultrafiltration"
    },
    {
      name: t('navbarLinks.Nanofiltration'),
      link: "/membranes/nanofiltration"
    },
    {
      name: t('navbarLinks.ReverseOsmosis'),
      link: "/membranes/reverse-osmosis"
    },
    {
      name: t('navbarLinks.Stabilization'),
      link: "/membranes/stabilization"
    },
  ]

  return(
    <header className="max-lg:top-0 sticky top-0 z-40 bg-white/95 max-lg:bg-white shadow-md">
      <nav 
        className="flex text-center justify-between
        w-[80rem] max-w-[95vw] max-lg:w-11/12 mx-auto py-6"
      >

        {/* Logo */}
        <Link 
          to={`${langPrefix}/`}
          className="w-2/6 my-auto max-sm:w-7/12"
          onClick={handleClickLink}
        >
          <div className="my-auto">
            <img 
              src={Logo} 
              alt="MG Filtration Technology" 
              className="object-contain w-[80%]"
            />
          </div>
        </Link>

        {/* Links */}
        <div 
          className="grid-cols-4 w-fit grid m-auto gap-6 font-semibold font-raleway text-center
            max-lg:hidden "
        >
          <Link to={`${langPrefix}/`} className="hover:text-red-mg">
            {t('navbarLinks.Home')}
          </Link>
          <ButtonDropdown 
            title={t('navbarLinks.Filters')}
              array={links.map(link => ({
                ...link,
                link: `${langPrefix}${link.link}`
              }))}
          />
          <Link to={`${langPrefix}/aboutus`} className="hover:text-red-mg">
            {t('navbarLinks.AboutUs')}
          </Link>
          <Link to={`${langPrefix}/contact`} className="hover:text-red-mg">
            {t('navbarLinks.Contact')}
          </Link>
        </div>

        {/* Language */}
        <div className="m-auto text-end max-lg:hidden flex justify-end mr-0">
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
            className="w-full py-6 mx-auto absolute max-lg:gap-6 top-[75px] left-0 right-0 z-50 
              flex flex-col bg-white"
          >
            <Link to={`${langPrefix}/`} className="text-[17px]" onClick={handleClickLink}>
              {t('navbarLinks.Home')}
            </Link>
            <ButtonDropdown 
              onClick={handleClickLink}
              title={t('navbarLinks.Filters')}
              array={links.map(link => ({
                ...link,
                link: `${langPrefix}${link.link}`
              }))}
            />
            <Link to={`${langPrefix}/aboutus`} className="text-[17px]" onClick={handleClickLink}>
              {t('navbarLinks.AboutUs')}
            </Link>
            <Link to={`${langPrefix}/contact`} className="text-[17px]" onClick={handleClickLink}>
              {t('navbarLinks.Contact')}
            </Link>
          </div>
        : ""}
      </nav>
    </header>

  )
}