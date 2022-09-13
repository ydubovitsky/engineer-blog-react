import styles from './author.module.css';
import getRandomColor from '../../../../../utils/random-color';

const Author = ({ name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src="https://secure.gravatar.com/avatar/a1e1fa4e9559f47fe8abcb0f1df4357c?s=140&d=mm&r=g" alt="" />
      </div>
      <div className={styles.author}>
        <div className={styles.name}>
          {name ? name : 'Nobody'}
          <div className={styles.links}>
            <i className="fab fa-github" style={{ color: getRandomColor() }}></i>
            <i className="far fa-envelope-open" style={{ color: getRandomColor() }}></i>
            <i className="fab fa-telegram" style={{ color: getRandomColor() }}></i>
            <i className="fab fa-skype" style={{ color: getRandomColor() }}></i>
            <i className="fab fa-twitter" style={{ color: getRandomColor() }}></i>
          </div>
        </div>
        <div className={styles.info}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti similique odit dicta, sapiente accusantium enim dolore voluptas reiciendis sequi alias saepe molestias debitis quam laboriosam incidunt vel nisi laudantium voluptatum?
        </div>
      </div>
    </div>
  )
}

export default Author;
