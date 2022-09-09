import { useContext } from 'react';
import {
  Link
} from "react-router-dom";
import { LangContext } from '../../../context/lang/LangContext';
import ByteImage from "../../common/hoc/byte-image/byte-image-component";
import styles from './post-list-item.module.css';

const PostListItem = ({ id, postImage, category, title, createAt, description }) => {

  //Context
  const { getLangData } = useContext(LangContext);
  const { postListItem } = getLangData();

  return (
    <div className={styles.container}>
      <ByteImage byteImage={postImage.byteImage} />
      <div className={styles.infoContainer}>
        <div className={styles.category}><span>Category - </span> {category}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.date}><span>Created at </span>{createAt}</div>
        <div className={styles.description}>
          {description}
        </div>
      </div>
      <Link to={`/main/posts/post?id=${id}`}><button className={styles.button}>{postListItem.button}</button></Link>
    </div>
  )
}

export default PostListItem;
