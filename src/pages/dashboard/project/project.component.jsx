import styles from './project.module.css';
import { BASE_URL } from '../../../constants/constants';
import { useDispatch } from 'react-redux';
import { saveImageToRemoteServer } from '../../../redux/features/image/image.slice';
import { useState } from 'react';
import { addProject } from '../../../redux/features/project/project.slice';
import ButtonComponent from '../../../common/atomic-components/button/button.component';

const ProjectFormComponent = () => {

  const dispatch = useDispatch();
  const [project, setProject] = useState({
    title: null,
    description: null,
    projectURL: null,
    repositoryURL: null,
    imageSRC: null
  });

  const onPostStateChanged = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    })
  }

  const onProjectImageLoaded = async (e) => {
    dispatch(saveImageToRemoteServer(e.target.files[0]))
      .then(result => {
        setProject({
          ...project,
          imageSRC: `${BASE_URL}/api/v1/file/${result.payload}`
        })
      })
      .catch(e => new Error(e));
  }

  const saveProjectHandler = () => {
    dispatch(addProject({ project }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.postHeader}>
        <div className={styles.inputField}>
          <label htmlFor="projectImageSrc">Скриншот проекта</label>
          <input type='file' alt='' name="projectImageSrc" onChangeCapture={onProjectImageLoaded} />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="title">Название проекта</label>
          <input name="title" type="text" value={project?.title} onChange={onPostStateChanged} />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="projectURL">Ссылка на проект</label>
          <input name="projectURL" type="text" value={project?.projectURL} onChange={onPostStateChanged} />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="repositoryURL">Ссылка на репозиторий</label>
          <input name="repositoryURL" type="text" value={project?.repositoryURL} onChange={onPostStateChanged} />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="description">Описание</label>
          <textarea name="description" type="text" value={project?.description} onChange={onPostStateChanged} />
        </div>
      </div>
      <ButtonComponent onClick={saveProjectHandler}>
        <p>Сохранить проект</p>
      </ButtonComponent>
    </div>
  )
}

export default ProjectFormComponent;