import { withCookiesContext } from "./withCookiesContext";
import { withLangContext } from "./withLangContext";
import { withRouter } from "./withRouter";
import { withReactRedux } from "./withReactRedux";
import { withPopup } from "./withPopup";

export const withProviders = (component) => {

  const functionalComponent = component();

  return withReactRedux(
    withRouter(
      (withCookiesContext
        (withLangContext
          (withPopup(functionalComponent))))))
}