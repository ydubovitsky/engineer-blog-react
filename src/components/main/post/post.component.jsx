import styles from './post.module.css';

const Post = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.date}>05/05/2021</div>
      <div className={styles.image}>
        <img src="http://demo.alx.media/slanted/wp-content/uploads/sites/5/2019/03/slanted-profile.png" alt="" srcset="" />
      </div>
      <div className={styles.info}>
        <h1>Post name</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium assumenda praesentium dolores, voluptate cumque quaerat perspiciatis quam natus debitis aperiam.</p>
      </div>
    </div>
  );
};

export default Post;