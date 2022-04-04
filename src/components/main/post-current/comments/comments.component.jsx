import cn from 'classnames';
import styles from './comments.module.css';

const Comments = () => {

  //TODO Заменить на динамическое получение данных!
  const showAllComments = (comments) => {
    return (
      Array.apply(null, Array(5)).map((el, idx) => (
        <div className={(cn(styles.comment, idx % 2 === 0 ? styles.even : styles.uneven))}>
          <div className={styles.avatar}>
            <img src="https://secure.gravatar.com/avatar/a1e1fa4e9559f47fe8abcb0f1df4357c?s=140&d=mm&r=g" alt="" />
          </div>
          <div className={styles.author}>
            Matthey Flowers
          </div>
          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti similique odit dicta, sapiente accusantium enim dolore voluptas reiciendis sequi alias saepe molestias debitis quam laboriosam incidunt vel nisi laudantium voluptatum?
            </p>
          </div>
        </div>
      ))
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Comments</div>
      <div className={styles.commentsContainer}>
        {showAllComments(null)}
      </div>
    </div>
  )
}

export default Comments;

