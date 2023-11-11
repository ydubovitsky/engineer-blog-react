import ButtonComponent from '../../../../../common/atomic-components/button/button.component';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LangContext } from '../../../../../context/lang/LangContext';
import { deleteProjectById } from '../../../../../redux/features/project/project.slice';
import { isAuthEntitySuperAdminSelector } from '../../../../../redux/features/auth/auth.slice';
import styles from './project-item.module.scss';

const ProjectItemComponent = ({ id, title, imageSRC, projectURL, repositoryURL, description }) => {

  const dispatch = useDispatch();
  const isAuthEntitySuperAdmin = useSelector(isAuthEntitySuperAdminSelector);

    // Context
    const { getLangData } = useContext(LangContext);
    const { projects } = getLangData();

  const navigateToExternalLink = (url) => {
    window.location.replace(url);
  }

  const deleteProject = (id) => {
    dispatch(deleteProjectById(id))
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.overlay} />
        <img className={styles.projectImage} src={imageSRC} alt="Ooops" srcSet="" />
        <h1 className={styles.title}>{title}</h1>
        {/* //!TODO Исправить это */}
        <div className="content" dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
      <div className={styles.buttonsContainer}>
        <ButtonComponent onClick={() => navigateToExternalLink(repositoryURL)}>
          <i className="fab fa-github"></i>
          <p>GitHub</p>
        </ButtonComponent>
        <ButtonComponent name={"Ссылка на приложение"} onClick={() => navigateToExternalLink(projectURL)} >
          <p>{projects.projectUrl}</p>
        </ButtonComponent>
        {isAuthEntitySuperAdmin ?
          <ButtonComponent onClick={() => deleteProject(id)}>
            <i className="fas fa-trash"></i>
          </ButtonComponent>
          :
          null
        }
      </div>
    </div>
  )
}

export default ProjectItemComponent;