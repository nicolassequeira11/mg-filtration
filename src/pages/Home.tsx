import { Bannerhome } from "../components/home/Banner"
import { AboutUsHome } from "../components/home/AboutUs"
import { IndustriesHome } from "../components/home/Industries"
import { WhyHome } from "../components/home/Why"
import { WhatWeDoHome } from "../components/home/WhatWeDo"

export const Home = () => {
  return(
    <div className="">
      <Bannerhome />
      <AboutUsHome />
      <WhatWeDoHome />
      <IndustriesHome />
      <WhyHome />
    </div>
  )
}