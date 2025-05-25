import { Helmet } from "react-helmet";
import { Bannerhome } from "../components/home/Banner"
import { AboutUsHome } from "../components/home/AboutUs"
import { IndustriesHome } from "../components/home/Industries"
import { WhyHome } from "../components/home/Why"
import { WhatWeDoHome } from "../components/home/WhatWeDo"
import { PlantsHome } from "../components/home/Plants"

export const Home = () => {
  return(
    <>
      <Helmet>
        <title>M.G. Filtration Technology | Soluciones de filtración por membrana y tratamiento de agua</title>
        <meta name="description" content="¿Buscas soluciones eficaces para el tratamiento de agua industrial? En M.G. Filtration Technology desarrollamos plantas a medida con tecnología de filtración por membranas." />
        <link rel="canonical" href="https://www.mgfiltration.com/" />
      </Helmet>

      <section className="">
        <Bannerhome />
        <AboutUsHome />
        <WhatWeDoHome />
        <IndustriesHome />
        <WhyHome />
        <PlantsHome />
      </section>
    </>
  )
}