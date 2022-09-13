import cn from 'classnames';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import styles from './dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={cn(styles.container, styles.svgBackground)}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.postForm}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard;
