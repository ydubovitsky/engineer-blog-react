import { createContext, useState } from "react";
import eng from './eng.locale.json';
import rus from './rus.locale.json';

export const LangContext = createContext();

export default function LangContextProvider({ children }) {
  const [currentLang, setCurrentLang] = useState('RUS');

  const getLangData = () => {
    switch (currentLang) {
      case 'RUS': {
        return eng;
      }
      case 'ENG': {
        return rus;
      }
      default: {
        return eng;
      }
    }
  }

  return (
    <LangContext.Provider value={{ currentLang, getLangData, setCurrentLang }}>
      {children}
    </LangContext.Provider>
  )
}