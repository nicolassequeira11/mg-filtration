import { Button } from "./Buttons";
import { FaStar } from "react-icons/fa";

type IndustriesCard = {
  image?: string;
  text?: string;
}

export const IndustriesCard = ( {image, text}: IndustriesCard ) => {
  return(
    <div className="m-auto">
      <img 
        src={image}
        alt="" 
        className="w-[230px] h-[230px] m-auto object-cover object-center rounded-full"
      />
      <p className="text-center font-semibold mt-3 text-lg">
        {text}
      </p>
    </div>
  )
}

export const WhyCard = ({ image, title, subtitle }: Cards) => {
  return(
    <div className="animate-fade-in text-center bg-white/90 max-md:w-full w-[450px] p-4 flex">

      <p className="text-[50px] max-md:text-[40px] flex justify-center text-red-mg bg-white p-4 max-md:p-2 max-md:pl-0 rounded-full">
        {image}
      </p>

      <div className="m-auto">
        <p className="text-xl font-semibold">
          {title}
        </p>
        <p>
          {subtitle}
        </p>        
      </div>
    </div>
  )
}

type Cards = {
  image?: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export const WhatWeDoCard = ({ image, title, subtitle }: Cards) => {
  return(
    <div className=" bg-white/90 w-[500px] max-md:w-full mx-auto p-4 flex">

      <p className="text-[50px] max-md:text-[40px] flex text-red-mg p-4 max-md:p-2 max-md:pl-0 max-md:-mt-1 -mt-3">
        {image}
      </p>

      <div className="m-auto mt-0 pl-2">
        <p className="text-xl font-semibold pb-2 max-md:text-lg">
          {title}
        </p>
        <p className="">
          {subtitle}
        </p>        
      </div>
    </div>
  )
}

type CardsImage = {
  image?: string;
  title?: string;
  subtitle?: string;
  textButton: string;
  linkButton: string;
}

export const PlantsCard = ({ image, title, subtitle, textButton, linkButton }: CardsImage) => {
  return(
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm h-fit">
    <a href="#" className="">
      <img 
        className="rounded-t-lg flex w-full" 
        src={image} 
        alt="" 
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
      </a>
      <p className="mb-3 text-sm font-normal text-gray-700">
        {subtitle}
      </p>
      <Button 
        textButton={textButton}
        linkButton={linkButton}
      />
    </div>
  </div>
  )
}

type TypeMembraneCard = {
  title: string;
  array: string[];
}

export const TypeMembraneCard = ({ title, array }: TypeMembraneCard) => {
  return(
    <div className="w-full max-w-sm p-4 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8">
      <h5 className="mb-8 mt-2 text-2xl font-medium text-center text-gray-500">
        {title}
      </h5>
      <ul 
        role="list" 
        className="space-y-5 my-2"
      >
        {array.map((item) => 
          <li className="flex items-center">
            <svg 
              className="shrink-0 w-4 h-4 text-green-500" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              {item}
            </span>
          </li>
          )}
      </ul>
    </div>
  )
}

type BenefitsCard = {
  array: string[];
}

export const BenefitsCard = ({ array }: BenefitsCard) => {
  return(
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8">
      <ul 
        role="list" 
        className="space-y-7 my-2"
      >
        {array.map((item) => 
          <li className="flex items-center">
            <FaStar 
              className="text-amber-400 shrink-0 w-5 h-5" 
            />
            <span className="text-lg leading-tight text-gray-500 ms-3">
              {item}
            </span>
          </li>
          )}
      </ul>
    </div>
  )
}