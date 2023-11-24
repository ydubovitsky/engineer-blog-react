import cn from 'classnames';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import styles from './dashboard.module.scss';

const DashboardLayout = () => {
  return (
    <div className={cn(styles.container)}>
      <Navbar />
      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout;
