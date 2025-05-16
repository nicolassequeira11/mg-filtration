import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ButtonLanguageSelection } from '../elements/Buttons';

const languages = [
  {
    id: 1,
    name: "ES",
    value: "ES",
    avatar: "https://flagcdn.com/es.svg",
  },
  {
    id: 2,
    name: "EN",
    value: "EN",
    avatar: "https://flagcdn.com/gb.svg",
  },
  {
    id: 3,
    name: "IT",
    value: "IT",
    avatar: "https://flagcdn.com/it.svg",
  },
  {
    id: 4,
    name: "FR",
    value: "FR",
    avatar: "https://flagcdn.com/fr.svg",
  },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const initialLanguage = languages.find(lang => lang.value === i18n.language) || languages[0];
  const [selected, setSelected] = useState(initialLanguage);

  const handleChange = (lang: typeof selected) => {
    setSelected(lang);
    i18n.changeLanguage(lang.value);
  };

  return (
    <div className="w-fit my-auto">
      <ButtonLanguageSelection
        selected={selected}
        setSelected={handleChange}
        options={languages}
      />
    </div>
  );
};

export default LanguageSelector;
