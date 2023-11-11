import { CookiesProvider } from "../../context/cookie";

export const withCookiesContext = (component) => (
  <CookiesProvider>
    {component}
  </CookiesProvider >
)