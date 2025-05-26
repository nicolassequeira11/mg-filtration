import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonLanguageSelection } from '../elements/Buttons';

const languages = [
  { id: 1, name: "EN", value: "en", avatar: "https://flagcdn.com/gb.svg" },
  { id: 2, name: "IT", value: "it", avatar: "https://flagcdn.com/it.svg" },
  { id: 3, name: "ES", value: "es", avatar: "https://flagcdn.com/es.svg" },
  { id: 4, name: "FR", value: "fr", avatar: "https://flagcdn.com/fr.svg" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  // Ajustamos valor de idioma a minúsculas para que coincida con rutas
  const currentLang = languages.find(lang => lang.value === i18n.language) || languages[0];
  const [selected, setSelected] = useState(currentLang);

  useEffect(() => {
    const newLang = languages.find(lang => lang.value === i18n.language);
    if (newLang && newLang.value !== selected.value) {
      setSelected(newLang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  const handleChange = (lang: typeof selected) => {
    if (lang.value === selected.value) return;
    
    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts.length === 0) {
      window.location.href = `/${lang.value}`;
    } else {
      pathParts[0] = lang.value;
      window.location.href = `/${pathParts.join('/')}`;
    }
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
