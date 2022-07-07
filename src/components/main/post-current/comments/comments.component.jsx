import cn from 'classnames';
import { useSelector } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import { commentListForPostByPostIdSelector } from '../../../../redux/features/post/postSlice';
import avatar from '../../../../images/comment/avatar.jpg';
import styles from './comments.module.css';

const Comments = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const postId = parseInt(searchParams.get("id"));
  const comments = useSelector(state => commentListForPostByPostIdSelector(state, postId));

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

