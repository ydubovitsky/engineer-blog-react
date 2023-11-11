import Popup from "../../common/components/popup/popup.component";

export const withPopup = (component) => (
  <>
    <Popup />
    {component}
  </>
)