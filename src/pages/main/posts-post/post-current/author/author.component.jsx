import styles from './author.module.css';
import SocialIconsListComponent from '../../../../../common/components/social-icons-list/social-icons-list.component';

const Author = ({ name, aboutAuthor = "" }) => {
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
          <p>{aboutAuthor.length !== 0 ? aboutAuthor : "Привет 👋, меня зовут Юрий и я автор этого блога. Я увлекаюсь программированием и всем, что с этим связано, если у вас есть замечания или предложения, оставьте коментарий или свяжитесь со мной в одной из соцсетей."}</p>
        </div>
      </div>
    </div>
  )
}

export default Author;
