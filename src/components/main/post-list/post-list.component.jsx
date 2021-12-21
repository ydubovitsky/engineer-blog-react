import styles from './post-list.module.css';
import Post from '../post/post.component';

const PostList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.latestPost}>
        <div className={styles.columnTitle}>Latest Post</div>
        <Post />
      </div>
      <div className={styles.postList}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
};

export default PostList;