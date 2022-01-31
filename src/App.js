import {
  Redirect,
  Route, Switch
} from "react-router-dom";
import styles from './App.css';
import Sidebar from './components/common/sidebar/sidebar.component.jsx';
import Dashboard from './layouts/dashboard/dashboard.layout.jsx';
import Main from './layouts/main/main.layout';
import ProtectedRoute from "./wrapper/protectedRoute";

function App() {
  return (
    <div className={styles.container}>
      <Switch>
        <ProtectedRoute path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
        <Route path="/main">
          <Main />
          <Sidebar />
        </Route>
        <Route path="/">
          <Redirect to="/main" />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
