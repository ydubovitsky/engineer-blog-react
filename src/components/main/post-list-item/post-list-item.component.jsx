import {
  Link
} from "react-router-dom";
import styles from './post-list-item.module.css';
import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';
import ByteImage from "../../common/hoc/byte-image/byte-image-component";

const PostListItem = ({ id, postImage, category, title, date, description }) => {

  //Context
  const { getLangData } = useContext(LangContext);
  const { postListItem } = getLangData();

  return (
    <div className={styles.container}>
      <ByteImage byteImage={postImage} />
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