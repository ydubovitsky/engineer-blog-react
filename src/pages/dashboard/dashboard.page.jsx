import { Outlet } from 'react-router-dom';
import styles from './dashboard.module.css';

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <Outlet/>
    </div>
  )
}

export default DashboardPage;