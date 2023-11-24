import Popup from "../../widgets/popup/popup.component";

export const withPopup = (component) => (
  <>
    <Popup />
    {component}
  </>
)