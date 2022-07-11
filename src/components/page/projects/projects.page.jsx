import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGitProfileInfo, projectsSelector } from '../../../redux/features/projects/projectsSlice';
import styles from './projects.module.css';

const ProjectsPage = () => {

  const dispatch = useDispatch();
  const projects = useSelector(projectsSelector);

  useEffect(() => {
    dispatch(getGitProfileInfo());
  }, []);

  const showProjects = () => {
    return projects?.map(project => {
      return (
        <div key={project.id} className={styles.project}>
          <div className={styles.cover}>
            <a href={project.url}>
              <p className={styles.projectName}>{project.name}</p>
            </a>
            <p>{project.description}</p>
            <div className={styles.topicsContainer}>
              {project.topics?.map((topic, idx) => (
                <div
                  key={project.id + ':' + idx}
                  className={styles.topic}
                >
                  <p>{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectsContainer}>
        {showProjects()}
      </div>
    </div>
  )
}

export default ProjectsPage;

