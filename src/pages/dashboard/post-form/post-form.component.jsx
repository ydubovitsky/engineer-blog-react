import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ButtonComponent from '../../../common/atomic-components/button/button.component';
import {
  postEntityByIdSelector,
  addPost,
  updatePost
} from '../../../redux/features/post/post.slice';
import styles from './post-form.module.css';
import DndWrapper from '../../../hoc/dnd-wrapper/dnd-wrapper.component';
import callApiService from '../../../services/callApi/callApiService';
import { BASE_URL } from '../../../redux/url-const/url-const.const';

const PostForm = () => {

  const dispatch = useDispatch();
  //! Загружаем state, т.е. данные для редактирования поста!
  let [searchParams, setSearchParams] = useSearchParams();
  let id = searchParams.get("id");
  const [post, setPost] = useState({});
  const refForm = useRef(null);
  const postEntityById = useSelector(state => postEntityByIdSelector(state, id));

  useEffect(() => {
    if (id != undefined) {
      setPost(postEntityById)
    }
  }, [id]);

  const handlerDataPost = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value
    });
  }

  const updatePostHandler = () => {
    dispatch(updatePost({ refForm, post }))
  }

  const savePostHandler = () => {
    dispatch(addPost({ refForm, post }))
  }

  const logFn = async (file) => {
    var formData = new FormData();
    formData.append('file', file[0])
    const payload = {
      url: `${BASE_URL}/api/v1/image`,
      method: 'POST',
      body: formData
    };
    await callApiService(payload).then(result => {
      console.log(result);
      refForm.current.innerHTML = result;
    });
  }

  return (
    <form ref={refForm} className={cn(styles.container, styles.svgBackground)}>
      <div className={styles.postContainer}>
        <DndWrapper handleDropFn={logFn}>
          <h1>DRAG AND DROP</h1>
        </DndWrapper>
        <div className={styles.postHeader}>
          <div className={styles.inputField}>
            <label htmlFor="postImage">Главное изображение поста</label>
            <input type='file' alt='' name="postImage" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="category">Категория</label>
            <input name="category" type="text" value={post?.category} onChange={handlerDataPost} />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="title">Название поста</label>
            <input name="title" type="text" value={post?.title} onChange={handlerDataPost} />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="date">Дата</label>
            <input name="date" type="text" value={post?.date} onChange={handlerDataPost} />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="author">Автор</label>
            <input name="author" type="text" value={post?.author} onChange={handlerDataPost} />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="disclosure">Краткое описание</label>
            <input name="disclosure" type="text" value={post?.disclosure} onChange={handlerDataPost} />
          </div>
        </div>
        <div className={styles.inputField}>
          <label htmlFor="text">Текст поста</label>
          <textarea name="text" value={post?.text} onChange={handlerDataPost} />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="conclusion">Заключение</label>
          <textarea name="conclusion" value={post?.conclusion} onChange={handlerDataPost} />
        </div>
      </div>
      <div className={styles.buttons}>
        {id ?
          <ButtonComponent
            name="Edit post"
            clickFunction={updatePostHandler} />
          :
          <ButtonComponent
            name="Save post"
            clickFunction={savePostHandler} />}
      </div>
    </form>
  )
}

export default PostForm;
