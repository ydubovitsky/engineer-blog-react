import styles from './post-list.module.css';
import PostListItem from '../post-list-item/post-list-item.component';

const PostList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.latestPost}>
        <div className={styles.columnTitle}>Latest Post</div>
        <PostListItem />
      </div>
      <div className={styles.postList}>
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
      </div>
    </div>
  )
};

export default PostList;