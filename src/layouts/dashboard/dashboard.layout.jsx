import cn from 'classnames';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import styles from './dashboard.module.css';

const DashboardLayout = () => {
  return (
    <div className={cn(styles.container)}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default DashboardLayout;
