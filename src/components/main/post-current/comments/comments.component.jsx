import cn from 'classnames';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { commentListForPostByPostId } from '../../../../redux/features/post/postSlice';
import avatar from '../../../../images/comment/avatar.jpg';
import styles from './comments.module.css';

const Comments = () => {

  const { id } = useParams();
  const comments = useSelector(state => commentListForPostByPostId(state, id));

  //TODO Заменить на динамическое получение данных!
  const showAllComments = (comments) => {
    return (
      comments.map((el, idx) => (
        <div className={(cn(styles.comment, idx % 2 === 0 ? styles.even : styles.uneven))}>
          <div className={styles.avatar}>
            <img src={avatar} alt="" />
          </div>
          <div className={styles.author}>
            <h2>Author: </h2>
            <p>{el.name}</p>
          </div>
          <div className={styles.text}>
            <h3>Comment:</h3>
            <p>{el.message}</p>
          </div>
        </div>
      ))
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}><h3>Comments</h3></div>
      <div className={styles.commentsContainer}>
        {showAllComments(comments)}
      </div>
    </div>
  )
}

export default Comments;

