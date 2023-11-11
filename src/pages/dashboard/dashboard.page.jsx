import { Outlet } from 'react-router-dom';
import styles from './dashboard.module.scss';

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <Outlet/>
    </div>
  )
}

export default DashboardPage;