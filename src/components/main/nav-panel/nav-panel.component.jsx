import styles from './nav-panel.module.css';
import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

const NavPanel = () => {

  const { getLangData } = useContext(LangContext);
  const { navPAnel } = getLangData();

  return (
    <div className={styles.container}>
      <div className={styles.link}>{navPAnel.about}</div>
      <div className={styles.link}>{navPAnel.projects}</div>
      <div className={styles.link}>{navPAnel.contacts}</div>
      <div className={styles.link}>{navPAnel.posts}</div>
      <input type="text" name="" />
      <div className={styles.link}><i className="fas fa-search"></i></div>
    </div>
  )
}

export default NavPanel;