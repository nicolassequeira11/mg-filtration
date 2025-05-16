import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

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
          className="grid w-fit cursor-default grid-cols-1 rounded-md bg-white 
            py-1.5 pr-2 pl-3 text-left text-gray-900 
            outline-1 -outline-offset-1 outline-gray-300 
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
