import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, fillPostMainContent } from '../../../redux/features/post/postSlice';
import Input from '../input/input.component';
import SubPost from '../subpost-form/subpost-form.component';
import styles from './post-form.module.css';

const PostForm = () => {

  const dispatch = useDispatch();
  const [post, setPost] = useState();
  const [subPosts, setSubPosts] = useState([<SubPost index={0} />]);

  const handlerInputForm = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value
    });
  }

  useEffect(() => {
    dispatch(fillPostMainContent(post));
  }, [post]);

  const addSubPostForm = () => {
    setSubPosts(
      [...subPosts,
      <SubPost
        key={subPosts.length}
        index={subPosts.length}
      />]);
  }

  return (
    <div className={cn(styles.container, styles.svgBackground)}>
      {/* <h3>Основная информация</h3> */}
      <div className={styles.mainInfo}>
        <Input name="imageSource" type="text" handler={{ onChange: handlerInputForm }} />
        <Input name="category" type="text" handler={{ onChange: handlerInputForm }} />
        <Input name="title" type="text" handler={{ onChange: handlerInputForm }} />
        <Input name="date" type="text" handler={{ onChange: handlerInputForm }} />
        <Input name="author" type="text" handler={{ onChange: handlerInputForm }} />
        <Input name="disclosure" type="text" handler={{ onChange: handlerInputForm }} />
        <Input name="description" type="textarea" handler={{ onChange: handlerInputForm }} />
      </div>
      {/* <h3>Дополнительная информация</h3> */}
      <div className={styles.subPosts}>
        {subPosts?.map(subPost => {
          return subPost
        })}
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={addSubPostForm}>Add SubPost</button>
        <button
          className={styles.button}
          onClick={() => dispatch(addPost())}
        ><i className="fas fa-save"></i>
        </button>
      </div>
    </div>
  )
}

export default PostForm;