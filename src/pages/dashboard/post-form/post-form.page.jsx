import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ButtonComponent from '../../../shared/ui/button/button.component';
import { BASE_URL } from '../../../shared/constants/constants';
import DndWrapper from '../../../shared/hoc/dnd-wrapper/dnd-wrapper.component';
import {
  addPost,
  postEntityByIdSelector,
  updatePost
} from '../../../redux/features/post/post.slice';
import { saveImageToRemoteServer } from '../../../redux/features/image/image.slice';
import styles from './post-form.module.scss';

const PostFormPage = () => {

  const dispatch = useDispatch();
  //! Загружаем state, т.е. данные для редактирования поста!
  let [searchParams, setSearchParams] = useSearchParams();
  let id = searchParams.get("id");
  const [post, setPost] = useState({});
  const refTextPost = useRef(null);
  const postEntityById = useSelector(state => postEntityByIdSelector(state, id));

  useEffect(() => {
    if (id != undefined) {
      setPost(postEntityById)
    }
  }, [id]);

  const onPostStateChanged = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value
    });
  }

  const updatePostHandler = () => {
    dispatch(updatePost({ post }))
  }

  const savePostHandler = () => {
    dispatch(addPost({ post }))
  }

  // Получаем файл, формируем полезную нагрузку, отправляем на сервер и ответ 
  // в виде адреса сохраненного ресурса вставляем в текст поста
  const addImageSrcToPostText = async (files) => {
    dispatch(saveImageToRemoteServer(files[0]))
      .then(result => {
        refTextPost.current.value
          = refTextPost.current.value
          + `<img src=${BASE_URL}/api/v1/file/${result.payload} alt="Ooops, there is no image"/>`;
      })
      .catch(e => new Error(e));
  }

  const onPostImageChange = async (event) => {
    dispatch(saveImageToRemoteServer(event.target.files[0]))
      .then(result => setPost({
        ...post,
        postImageSrc: `${BASE_URL}/api/v1/file/${result.payload}`
      }))
      .catch(e => new Error(e));
  }

  return (
    <form className={styles.container}>
      <div className={styles.postContainer}>
        <div className={styles.postHeader}>
          <div className={styles.inputField}>
            <label htmlFor="postImageSrc">Главное изображение поста</label>
            <input type='file' alt='' name="postImageSrc" onChangeCapture={onPostImageChange} />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="category">Категория</label>
            <input name="category" type="text" value={post?.category} onChange={onPostStateChanged} />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="title">Название поста</label>
            <input name="title" type="text" value={post?.title} onChange={onPostStateChanged} />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="date">Дата</label>
            <input name="date" type="text" value={post?.date} onChange={onPostStateChanged} />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="author">Автор</label>
            <input name="author" type="text" value={post?.author} onChange={onPostStateChanged} />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="disclosure">Краткое описание</label>
            <textarea className={styles.disclosure} name="disclosure" value={post?.disclosure} onChange={onPostStateChanged} />
          </div>
        </div>
        <DndWrapper dropFunction={addImageSrcToPostText}>
          <div className={styles.inputField}>
            <label htmlFor="text">Текст поста</label>
            <textarea name="text" ref={refTextPost} value={post?.text} onChange={onPostStateChanged} />
          </div>
        </DndWrapper>
        <div className={styles.inputField}>
          <label htmlFor="conclusion">Заключение</label>
          <textarea name="conclusion" value={post?.conclusion} onChange={onPostStateChanged} />
        </div>
      </div>
      <div className={styles.buttons}>
        {id ?
          <ButtonComponent
            onClick={updatePostHandler}>
            <p>Edit post</p>
          </ButtonComponent>
          :
          <ButtonComponent
            onClick={savePostHandler}>
            <p>Save post</p>
          </ButtonComponent>}
      </div>
    </form>
  )
}

export default PostFormPage;
