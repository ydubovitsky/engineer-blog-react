import {
  Link
} from "react-router-dom";
import styles from './post-list-item.module.css';
import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

const PostListItem = ({ id, postImage, category, title, date, description }) => {

  //Context
  const { getLangData } = useContext(LangContext);
  const { postListItem } = getLangData();

  return (
    <div className={styles.container}>
      <img src={postImage ? `data:image/png;base64,${postImage}` : "https://i1.wp.com/demo.wpzoom.com/foodica/files/2013/01/FOX_7319-e1459676421430.jpg?resize=750%2C515&ssl=1"} alt="" />
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