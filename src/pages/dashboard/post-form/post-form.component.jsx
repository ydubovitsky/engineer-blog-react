import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPost,
  updatePost,
  fillPostMainContent,
  postFormEntitySelector
} from '../../../redux/features/post-form/post-form.slice';
import { useLocation } from 'react-router-dom';
import Input from './input/input.component';
import SubPost from './subpost-form/subpost-form.component';
import styles from './post-form.module.css';

const PostForm = () => {

  const dispatch = useDispatch();
  //! Загружаем state, т.е. данные для редактирования поста!
  const { state } = useLocation();
  const [post, setPost] = useState(state);
  const [subPosts, setSubPosts] = useState(setInitStateForSubPosts());
  const refForm = useRef(null);
  const newPost = useSelector(postFormEntitySelector);

  useEffect(() => {
    dispatch(fillPostMainContent(post));
  }, [post]);

  const addSubPostFormElement = () => {
    setSubPosts(
      [...subPosts,
      <SubPost
        key={subPosts.length}
        index={subPosts.length}
      />]);
  }

  function setInitStateForSubPosts() {
    if (post) {
      return post.subPosts?.map((subPost, idx) => <SubPost index={idx} state={subPost} />)
    }
    return [<SubPost key={0} index={0} />]
  }

  const handlerDataPost = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value
    });
  }

  // Если мы в режиме редактирования поста, то работает одна кнопка в противном случае - другая!
  const showActionButtons = () => {
    if (state) {
      return (
        <button
          type="button"
          className={styles.button}
          onClick={() => dispatch(updatePost({ refForm, newPost }))}
        >Edit Post <i className="fas fa-save"></i>
        </button>
      )
    }
    return (
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(addPost({ refForm, newPost }))}
      >Save Post <i className="fas fa-save"></i>
      </button>
    )
  }

  return (
    <form ref={refForm} className={cn(styles.container, styles.svgBackground)}>
      <div className={styles.mainInfo}>
        <Input name="postImage" type="image" value={post?.postImage} handler={{ onChange: handlerDataPost }} />
        <Input name="category" type="text" value={post?.category} handler={{ onChange: handlerDataPost }} />
        <Input name="title" type="text" value={post?.title} handler={{ onChange: handlerDataPost }} />
        <Input name="date" type="text" value={post?.date} handler={{ onChange: handlerDataPost }} />
        <Input name="author" type="text" value={post?.author} handler={{ onChange: handlerDataPost }} />
        <Input name="disclosure" type="text" value={post?.disclosure} handler={{ onChange: handlerDataPost }} />
        <Input name="description" type="textarea" value={post?.description} handler={{ onChange: handlerDataPost }} />
        <Input name="conclusion" type="textarea" value={post?.conclusion} handler={{ onChange: handlerDataPost }} />
      </div>
      <div className={styles.subPosts}>
        {subPosts?.map(subPost => {
          return subPost
        })}
      </div>
      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.button}
          onClick={addSubPostFormElement}
        >Add SubPost
        </button>
        {showActionButtons()}
      </div>
    </form>
  )
}

export default PostForm;
