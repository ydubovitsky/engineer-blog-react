import styles from './App.css';
import Sidebar from './components/common/sidebar/sidebar.component.jsx';
import Main from './layouts/main/main.layout';

function App() {
  return (
    <div className={styles.container}>
      <Main />
      <Sidebar />
    </div>
  );
}

export default App;
