import styles from './author.module.css';
import SocialIconsListComponent from '../../../../../common/components/social-icons-list/social-icons-list.component';

const Author = ({ name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src="https://secure.gravatar.com/avatar/a1e1fa4e9559f47fe8abcb0f1df4357c?s=140&d=mm&r=g" alt="" />
      </div>
      <div className={styles.author}>
        <div className={styles.name}>
          <p>{name ? name : 'Nobody'}</p>
          <SocialIconsListComponent />
        </div>
        <div className={styles.info}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti similique odit dicta, sapiente accusantium enim dolore voluptas reiciendis sequi alias saepe molestias debitis quam laboriosam incidunt vel nisi laudantium voluptatum?
        </div>
      </div>
    </div>
  )
}

export default Author;
