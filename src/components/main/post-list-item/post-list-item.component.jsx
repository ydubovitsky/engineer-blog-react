import {
  Link
} from "react-router-dom";
import styles from './post-list-item.module.css';
import { useContext } from 'react';
import { LangContext } from '../../../context/lang/LangContext';
import ByteImage from "../../common/hoc/byte-image/byte-image-component";
import LoaderContent from '../../common/loader-content/loader-content.component';

const PostListItem = ({ id, postImage, category, title, createAt, description }) => {

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
      <div className={styles.category}><span>Category - </span> {category}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}><span>Created at </span>{createAt}</div>
      <div className={styles.description}>
        {description}
      </div>
      <Link to={`/main/post/${id}`}><button className={styles.button}>{postListItem.button}</button></Link>
    </div>
  )
}

export default PostListItem;
