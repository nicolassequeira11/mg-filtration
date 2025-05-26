import { Button } from "./Buttons";
import { FaStar } from "react-icons/fa";

type IndustriesCard = {
  image?: string;
  text?: string;
}

export const IndustriesCard = ( {image, text}: IndustriesCard ) => {
  return(
    <div 
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
      className="m-auto"
    >
      <img 
        src={image}
        alt="" 
        className="w-[230px] h-[230px] m-auto object-cover object-center rounded-full"
      />
      <p className="text-center font-semibold mt-3 text-lg font-raleway">
        {text}
      </p>
    </div>
  )
}

export const WhyCard = ({ image, title, subtitle }: Cards) => {
  return(
    <div 
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
      className="animate-fade-in text-center bg-white/90 max-md:w-full w-[450px] p-4 flex"
    >
      <p 
        className="text-[50px] max-md:text-[40px] flex justify-center 
          text-red-mg bg-white p-4 max-md:p-2 max-md:pl-0 rounded-full"
      >
        {image}
      </p>

      <div className="m-auto">
        <p className="text-xl font-semibold max-md:text-lg font-raleway">
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
    <div 
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
      className=" bg-white/90 w-[500px] max-md:w-full mx-auto p-4 flex"
    >

      <p 
        className="text-[50px] max-md:text-[40px] flex 
          text-red-mg p-4 max-md:p-2 max-md:pl-0 max-md:-mt-1 -mt-3"
      >
        {image}
      </p>

      <div className="m-auto mt-0 pl-2 max-md:mx-0">
        <p className="text-xl font-semibold pb-2 max-md:text-lg font-raleway">
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
  <div 
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="100"
    data-aos-offset="0"
    className="max-w-sm bg-white border border-gray-200 
      rounded-lg shadow-sm h-fit max-md:w-11/12 mx-auto"
  >
    <div>
      <img 
        className="rounded-t-lg flex w-full" 
        src={image} 
        alt="" 
      />
    </div>
    <div className="p-5">

      {/* Title */}
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 font-raleway">
        {title}
      </h5>

      {/* Subtitle */}
      <p className="mb-3 text-sm font-normal text-gray-700">
        {subtitle}
      </p>

      {/* Button */}
      <div className="-ml-1">
        <Button 
          textButton={textButton}
          linkButton={linkButton}
        />
      </div>
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
    <div 
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
      className="w-full max-w-sm max-md:w-11/12 p-4 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8"
    >
      <h5 className="mb-8 mt-2 text-2xl font-medium text-center text-gray-500 font-raleway">
        {title}
      </h5>
      <ul 
        role="list" 
        className="space-y-5 my-2"
      >
        {array.map((item, index) => 
          <li className="flex items-center" key={index}>
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
    <div 
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
      className="w-full max-w-sm max-md:w-11/12 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8"
    >
      <ul 
        role="list" 
        className="space-y-7 my-2"
      >
        {array.map((item, index) => 
          <li className="flex items-center" key={index}>
            <FaStar 
              className="text-amber-400 shrink-0 w-5 h-5" 
            />
            <span className="leading-tight text-gray-500 ms-3">
              {item}
            </span>
          </li>
          )}
      </ul>
    </div>
  )
}

type CommitmentCard = {
  image?: React.ReactNode;
  title?: string;
  subtitle?: string;
  style?: string;
}

export const CommitmentCard = ({ image, title, subtitle, style }: CommitmentCard) => {
  return(
    <div 
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
      className="bg-white/90 mx-auto p-4 flex"
    >
      <p 
        className={`text-[50px] max-md:text-[40px] flex p-4 max-md:p-2 max-md:pl-0 max-md:-mt-1 -mt-3 
          ${style}`}
      >
        {image}
      </p>

      <div className="m-auto mt-0 pl-2">
        <p className="text-xl font-semibold font-raleway pb-2 max-md:text-lg">
          {title}
        </p>
        <p className="">
          {subtitle}
        </p>        
      </div>
    </div>
  )
}

type ContactCard = {
  image?: string;
  title?: string;
  subtitle?: string;
  email?: string;
  tel?: string;
  mailto: string;
  telto: string;
  textEmail: string;
  textTel: string;
}

export const ContactCard = ({ image, title, subtitle, email, tel, mailto, telto, textEmail, textTel }: ContactCard) => {
  return(
    <div 
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
      className="bg-white/90 flex w-[280px] min-w-[280px] max-w-[280px] flex-col rounded-xl shadow-lg max-md:mx-auto max-md:w-11/12"
    >
      <div className="relative">
        <img 
          src={image} 
          alt=""
          className="flex object-cover h-[300px] w-[280px] object-top rounded-xl"
        />
        <div className="bottom-0 absolute text-center w-full bg-black-mg/80 text-white py-2">
          <p className="text-lg font-semibold font-raleway max-md:text-lg">
            {title}
          </p>
          <p className="text-sm">
            {subtitle}
          </p>        
        </div>
      </div>

      <div className="p-5 text-center">

        <div className="flex flex-col gap-y-4">
          <a 
            href={mailto} 
            className="text-base pb-2 max-md:text-lg flex-col flex"
          >
            {email}
            <span className="mt-1">
              <a 
                href={mailto}
                className="text-sm bg-red-mg hover:bg-red-mg/80 px-3 py-1 rounded-full text-white" 
              >
                {textEmail}
              </a>
            </span>
          </a>
          <a 
            href={telto}
            className="flex-col flex text-base"
          >
            {tel}
            <span className="mt-1">
              <a 
                href={telto}
                className="text-sm bg-red-mg hover:bg-red-mg/80 px-3 py-1 rounded-full text-white" 
              >
                {textTel}
              </a>
            </span>
          </a>  
        </div>
      </div>
    </div>
  )
}