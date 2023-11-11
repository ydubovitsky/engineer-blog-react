import LangContextProvider from "../../context/lang/LangContext";

export const withLangContext = (component) => (
  <LangContextProvider>
    {component}
  </LangContextProvider>
)