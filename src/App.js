import styles from './App.css';
import RoutesComponent from "./routes/routes.component";

function App() {

  return (
    <div data-id="app" className={styles.container}>
      <RoutesComponent/>
    </div>
  );
}

export default App;
