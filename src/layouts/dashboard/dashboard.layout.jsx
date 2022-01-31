import styles from './dashboard.module.css';
import Sidebar from '../../components/dashboard/sidebar/sidebar.component';
import PostForm from '../../components/dashboard/post-form/post-form.component';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.postForm}>
        <PostForm />
      </div>
    </div>
  )
}

export default Dashboard;