
type List = {
  array: string[];
}

export const List = ({array}: List) => {
  return(
    <div>
      <ul className="space-y-4 text-left text-gray-500">
        {array.map((item) => 
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg 
              className="shrink-0 w-3.5 h-3.5 text-green-500" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 16 12"
            >
                <path 
                  stroke="currentColor" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
            </svg>
            <span className="text-lg">
              {item}
            </span>
          </li>
        )}
      </ul>
    </div>
  )
}

type List2 = {
  text?: string;
  array?: string[];
}

export const List2 = ({text, array}: List2) => {
  return(
    <div>
      <ol className="space-y-4 text-gray-500 list-inside">
        <li>
          {text}
          <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
            {array ? array.map((item) => 
              <li>
                {item}
              </li>
            ) : ""}
          </ul>
        </li>
      </ol>
    </div>
  )
}