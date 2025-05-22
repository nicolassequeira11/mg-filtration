

type TypeTimeline = {
  array: {
    title: string;
    text: string;
    icon: React.ReactNode;
  }[];
}

export const Timeline = ({array}: TypeTimeline) => {
  return (
    <div>
      <ol className="sm:flex items-start">
        {array.map((item, index) => 
          <li 
            className="relative mb-6 sm:mb-0 max-md:text-center" 
            key={index}
          >
            <div className="flex items-center">
              <div 
                className="z-10 flex items-center justify-center w-8 h-8 bg-red-mg text-white
                  rounded-full ring-0 ring-white sm:ring-8 shrink-0 max-md:mx-auto"
              >
                {item.icon}
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 font-raleway">
                {item.title}
              </h3>
              <p className="text-md font-normal text-gray-500">
                {item.text}
              </p>
            </div>
          </li>
        )}
      </ol>
    </div>
  );
};
