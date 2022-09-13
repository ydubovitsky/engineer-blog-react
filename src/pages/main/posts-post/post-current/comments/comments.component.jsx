import cn from 'classnames';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import { LangContext } from '../../../../../context/lang/LangContext';
import avatar from './images/avatar.jpg';
import { commentListForPostByPostIdSelector } from '../../../../../redux/features/post/post.slice';
import styles from './comments.module.css';

const Comments = () => {

  // Context
  const { getLangData } = useContext(LangContext);
  const { comment_form } = getLangData();

  const [searchParams, setSearchParams] = useSearchParams();

  const postId = parseInt(searchParams.get("id"));
  const comments = useSelector(state => commentListForPostByPostIdSelector(state, postId));

  //TODO Заменить на динамическое получение данных!
  const showAllComments = (comments) => {
    return (
      comments.map((el, idx) => (
        <div key={el.id} className={(cn(styles.comment, idx % 2 === 0 ? styles.even : styles.uneven))}>
          <div className={styles.avatar}>
            <img src={avatar} alt="" />
          </div>
          <div className={styles.author}>
            <h2>{comment_form.author}: </h2>
            <p>{el.name}</p>
          </div>
          <div className={styles.text}>
            <h3>{comment_form.message}:</h3>
            <p>{el.message}</p>
          </div>
        </div>
      ))
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}><h3>{comment_form.comments}</h3></div>
      <div className={styles.commentsContainer}>
        {showAllComments(comments)}
      </div>
    </div>
  )
}

export default Comments;

