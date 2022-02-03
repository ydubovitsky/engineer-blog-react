import styles from './comment-form.module.css';
import cn from 'classnames';

const CommentForm = () => {
  return (
    <div className={cn(styles.container, styles.svgBackground)}>
      <div className={styles.title}>
        LEAVE A COMMENT
      </div>
      <div className={styles.subtitle}>
        Your email address will not be published. Required fields are marked *
      </div>
      <div className={styles.inputWithLabel}>
        <label htmlFor="name">NAME</label>
        <input type="text" name="name" />
      </div>
      <div className={styles.inputWithLabel}>
        <label htmlFor="message">MESSAGE</label>
        <textarea name="message"></textarea>
      </div>
      <div className={styles.inputWithLabel}>
        <label htmlFor="email">EMAIL ADDRESS</label>
        <input type="text" name="email" />
      </div>
      <div className={styles.inputWithLabel}>
        <label htmlFor="website">WEBSITE</label>
        <input type="text" name="website" />
      </div>
      <button className={styles.button}>
        Post Comment
      </button>
    </div>
  )
}

export default CommentForm;