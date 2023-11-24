import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LangContext } from '../../../context/lang/LangContext';
import LoaderContent from '../../../widgets/loader-content/loader-content.component';
import { getAllProjects, projectEntitiesSelector } from '../../../redux/features/project/project.slice';
import styles from './projects.module.scss';
import ProjectItemComponent from './components/project-item/project-item';

const ProjectsPage = () => {

  const dispatch = useDispatch();
  const projectEntities = useSelector(projectEntitiesSelector);

  // Context
  const { getLangData } = useContext(LangContext);
  const { projects } = getLangData();

  useEffect(() => {
    dispatch(getAllProjects());
  }, []);

  const showProjects = () => {
    return projectEntities?.map(project => <ProjectItemComponent key={project.id} {...project} />)
  }

  const showLoader = () => {
    return Array(7).fill(null).map((_, idx) => <LoaderContent key={idx} />)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{projects.title}</h1>
      <div className={styles.projectsContainer}>
        {typeof projectEntities != 'undefined' && projectEntities.length > 0
          ?
          showProjects()
          :
          showLoader()
        }
      </div>
    </div>
  )
}

export default ProjectsPage;

