import styles from './author.module.css';
import SocialIconsListComponent from '../../../../../../common/components/social-icons-list/social-icons-list.component';

const Author = ({ name, aboutAuthor = "" }) => {

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <p>{name ? name : 'Nobody'}</p>
        <SocialIconsListComponent />
      </div>
      <div className={styles.info}>
        <p>{aboutAuthor}</p>
      </div>
    </div>
  )
}

export default Author;
