import { useState, useEfect, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fillPostMainContent, addPost } from '../../../redux/features/post/postSlice';
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
    setSubPosts([...subPosts, <SubPost key={subPosts.length} index={subPosts.length} />]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainInfo}>
        {/*TODO Сделать загрузку на амазон или типа того, а затем уже ссылку отправлять в БД */}
        <label htmlFor="imageSource">Image Source</label>
        <input type="text" name="imageSource" onChange={handlerInputForm} />

        <label htmlFor="category">Category</label>
        <input type="text" name="category" onChange={handlerInputForm} />

        <label htmlFor="title">Title</label>
        <input type="text" name="title" onChange={handlerInputForm} />

        <label htmlFor="date">Date</label>
        <input type="text" name="date" onChange={handlerInputForm} />

        <label htmlFor="author">Author</label>
        <input type="text" name="author" onChange={handlerInputForm} />

        <label htmlFor="disclosure">Disclosure</label>
        <input type="text" name="disclosure" onChange={handlerInputForm} />

        <label htmlFor="description">Description</label>
        <input type="textarea" name="description" onChange={handlerInputForm} />
        {subPosts?.map(subPost => {
          return subPost
        })}
      </div>
      <button className={styles.button} onClick={() => dispatch(addPost)}>Save Article</button>
      <button className={styles.button} onClick={addSubPostForm}>Add SubPost</button>
    </div>
  )
}

export default PostForm;