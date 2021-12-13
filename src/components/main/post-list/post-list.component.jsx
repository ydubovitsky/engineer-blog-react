import Post from '../post/post.component';

import styles from './post-list.module.css';

const PostList = (props) => {
  return (
    <div className={styles.container}>
      <div class="page-title group">
        <div class="container">
          <h2>The Blog. <span>What's new?</span></h2>
        </div>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostList;