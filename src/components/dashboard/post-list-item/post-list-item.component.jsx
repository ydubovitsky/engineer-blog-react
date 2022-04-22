import {
  Link
} from "react-router-dom";
import styles from './post-list-item.module.css';
import { useContext } from 'react';
import { LangContext } from '../../../context/lang/LangContext';
import ByteImage from "../../common/hoc/byte-image/byte-image-component";
import LoaderContent from '../../common/loader-content/loader-content.component';

const PostListItem = ({ id, postImage, category, title, date, description }) => {

  //Context
  const { getLangData } = useContext(LangContext);
  const { postListItem } = getLangData();

  //TODO Доработать показ Loader-a
  if (id === undefined) {
    return <LoaderContent />
  }

  return (
    <div className={styles.container}>
      <ByteImage byteImage={postImage.byteImage} />
      <div className={styles.category}>{category}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>{date}</div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <button className={styles.button}><Link to={`/main/post/${id}`}>{postListItem.button}</Link></button>
    </div>
  )
}

export default PostListItem;
