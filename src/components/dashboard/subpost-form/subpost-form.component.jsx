import cn from 'classnames';
import { useState, useEffect } from 'react';
import styles from './subpost-form.module.css';
import { useDispatch } from 'react-redux';
import { fillPostSubPostContent } from '../../../redux/features/post/postSlice';

const SubPost = ({ index }) => {

  const [subPost, setSubPost] = useState();
  const dispatch = useDispatch();

  const handlerInputForm = (event) => {
    const { name, value } = event.target;
    setSubPost({
      ...subPost,
      [name]: value
    })
  }

  useEffect(() => {
    dispatch(fillPostSubPostContent({ index, subPost }));
  }, [subPost]);

  return (
    <div className={styles.container}>
      <label htmlFor="text">Text</label>
      <input onChange={handlerInputForm} type="text" name="text" />

      <label htmlFor="sourceCode">Source Code</label>
      <input onChange={handlerInputForm} type="textarea" name="sourceCode" />

      <label htmlFor="image">Image</label>
      <input onChange={handlerInputForm} type="text" name="image" />

      <label htmlFor="imageDescription">Image Description</label>
      <input onChange={handlerInputForm} type="text" name="imageDescription" />
    </div>
  )
}

export default SubPost;