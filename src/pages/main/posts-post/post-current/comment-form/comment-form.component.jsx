import cn from 'classnames';
import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { LangContext } from '../../../../../context/lang/LangContext';
import { useSearchParams } from "react-router-dom";
import { addComment } from '../../../../../redux/features/comment-form/comment-form.slice';
import styles from './comment-form.module.css';

const CommentForm = () => {

  // Context
  const { getLangData } = useContext(LangContext);
  const { comment_form } = getLangData();

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("id");
  // По умолчанию в качестве параметра задается id поста
  const [commentForm, setCommentForm] = useState({ postId: postId });

  const handlerInputForm = (event) => {
    const { name, value } = event.target;
    setCommentForm({
      ...commentForm,
      [name]: value
    })
  }

  return (
    <div className={cn(styles.container, styles.svgBackground)}>
      <div className={styles.title}>
        {comment_form.comments}
      </div>
      <div className={styles.subtitle}>
        {comment_form.required_fields}
      </div>
      <div className={styles.inputWithLabel}>
        <label htmlFor="name">{comment_form.name}</label>
        <input type="text" name="name" onChange={handlerInputForm} />
      </div>
      <div className={styles.inputWithLabel}>
        <label htmlFor="message">{comment_form.message}</label>
        <textarea name="message" onChange={handlerInputForm}></textarea>
      </div>
      <div className={styles.inputWithLabel}>
        <label htmlFor="email">{comment_form.email_address}</label>
        <input type="text" name="email" onChange={handlerInputForm} />
      </div>
      <div className={styles.inputWithLabel}>
        <label htmlFor="website">{comment_form.website}</label>
        <input type="text" name="website" onChange={handlerInputForm} />
      </div>
      <button className={styles.button} onClick={() => dispatch(addComment(commentForm))}>
        {comment_form.post_button}
      </button>
    </div>
  )
}

export default CommentForm;
