import RoutesComponent from "../routes/routes.component";
import "./index.scss";
import { withProviders } from "./providers";

function App() {
  return (
    <div data-id="app" data-testid="app">
      <RoutesComponent />
    </div>
  );
}

export default withProviders(App);
