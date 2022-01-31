import styles from './comment-form.module.css';

const CommentForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>LEAVE A COMMENT</div>
      <div className={styles.subtitle}>
        Your email address will not be published. Required fields are marked *
      </div>
      <label htmlFor="message">MESSAGE</label>
      <input type="textarea" name="message"/>

      <label htmlFor="name">NAME</label>
      <input type="text" name="name"/>

      <label htmlFor="email">EMAIL ADDRESS</label>
      <input type="textarea" name="email"/>

      <label htmlFor="website">WEBSITE</label>
      <input type="textarea" name="website"/>
      <button className={styles.button}>
        Post Comment
      </button>
    </div>
  )
}

export default CommentForm;