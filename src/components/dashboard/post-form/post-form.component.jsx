import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPost,
  fillPostMainContent,
  postFormEntitySelector
} from '../../../redux/features/post-form/postFormSlice';
import Input from '../input/input.component';
import SubPost from '../subpost-form/subpost-form.component';
import styles from './post-form.module.css';

const PostForm = () => {

  const dispatch = useDispatch();
  const [post, setPost] = useState();
  const [subPosts, setSubPosts] = useState([<SubPost index={0} />]);
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

  const handlerDataPost = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value
    });
  }

  return (
    <form ref={refForm} className={cn(styles.container, styles.svgBackground)}>
      <div className={styles.mainInfo}>
        <Input name="postImage" type="image" handler={{ onChange: handlerDataPost }} />
        <Input name="category" type="text" handler={{ onChange: handlerDataPost }} />
        <Input name="title" type="text" handler={{ onChange: handlerDataPost }} />
        <Input name="date" type="text" handler={{ onChange: handlerDataPost }} />
        <Input name="author" type="text" handler={{ onChange: handlerDataPost }} />
        <Input name="disclosure" type="text" handler={{ onChange: handlerDataPost }} />
        <Input name="description" type="textarea" handler={{ onChange: handlerDataPost }} />
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
        <button
          type="button"
          className={styles.button}
          onClick={() => dispatch(addPost({ refForm, newPost }))}
        >Save Post <i className="fas fa-save"></i>
        </button>
      </div>
    </form>
  )
}

export default PostForm;
