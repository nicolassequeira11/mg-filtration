import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';

type LanguageOption = {
  id: number;
  name: string;
  value: string;
  avatar: string;
};

type ButtonLanguageSelectionProps = {
  selected: LanguageOption;
  setSelected: (value: LanguageOption) => void;
  options: LanguageOption[];
};

export const ButtonLanguageSelection = ({ selected, setSelected, options }: ButtonLanguageSelectionProps) => {
  return (
    <Listbox 
      value={selected} 
      onChange={setSelected}
    >
      <div className="relative w-fit">
        <ListboxButton 
          className="grid w-fit cursor-default grid-cols-1 rounded-md focus:outline-0
            py-1.5 pr-2 pl-3 text-left text-gray-900  
            sm:text-sm/6"
        >
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <img
              alt={selected.name}
              src={selected.avatar}
              className="size-5 shrink-0 rounded-full object-cover"
            />
            <span className="block truncate max-lg:hidden">
              {selected.name}
            </span>
          </span>
          <ChevronDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-fit overflow-auto rounded-md bg-white py-1 
            text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden 
            data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 
            sm:text-sm"
        >
          {options.map((option) => (
            <ListboxOption
              key={option.id}
              value={option}
              className="group relative overflow-hidden cursor-default py-2 pr-9 pl-3 text-gray-900 select-none 
                data-focus:bg-red-mg data-focus:text-white data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <img
                  alt={option.name}
                  src={option.avatar}
                  className="size-5 shrink-0 rounded-full object-cover"
                />
                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                  {option.name}
                </span>
              </div>

              <span 
                className="absolute inset-y-0 -right-1 flex items-center pr-4 text-red-mg 
                  group-not-data-selected:hidden group-data-focus:text-white"
                >
                <CheckIcon 
                  aria-hidden="true" 
                  className="size-5" 
                />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}

type Button = {
  textButton: string;
  linkButton: string;
}

export const Button = ({textButton, linkButton}: Button) => {
  return(
    <div>
      <Link 
        to={linkButton} 
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center 
          text-white hover:bg-gradient-to-tr rounded-full
          hover:from-red-mg hover:to-red-400 bg-red-mg focus:ring-4 focus:outline-none"
      >
        {textButton}
        <svg 
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2" 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 14 10"
        >
          <path 
            stroke="currentColor" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  )
}

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Fragment } from 'react'

type ButtonDropdown = {
  title: string;
  array: {
    name: string;
    link: string;
  }[];
  onClick?: () => void;
}

export const ButtonDropdown = ({ title, array, onClick }: ButtonDropdown) => {
  return (
    <Menu as="div" className="relative inline-block text-left m-auto">
      <div>
        <MenuButton className="inline-flex w-full cursor-pointer justify-center gap-x-1.5 focus:outline-0 max-lg:text-[17px] max-lg:font-normal font-semibold text-gray-900">
          {title}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400 m-auto" />
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none max-lg:relative max-lg:shadow-none max-lg:text-center max-lg:ring-0 max-lg:w-fit max-lg:text-[17px]">
          <div className="py-1">
            {array.map((item, index) => (
              <MenuItem key={index}>
                {({ active }) => (
                  <Link
                    to={item.link}
                    onClick={onClick}
                    className={`block px-4 py-2 max-lg:py-4 text-sm text-gray-700 ${
                      active ? 'bg-gray-100 text-gray-900' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};