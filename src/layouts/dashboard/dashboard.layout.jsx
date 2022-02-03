import styles from './dashboard.module.css';
import Navbar from '../../components/dashboard/navbar/navbar.component';
import PostForm from '../../components/dashboard/post-form/post-form.component';
import cn from 'classnames';

const Dashboard = () => {
  return (
    <div className={cn(styles.container, styles.svgBackground)}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.postForm}>
        <PostForm />
      </div>
    </div>
  )
}

export default Dashboard;