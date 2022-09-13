import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../../../../context/lang/LangContext';
import Search from '../search/search.component';
import styles from './nav-panel.module.css';

const NavPanel = () => {

  const { getLangData } = useContext(LangContext);
  const { navPAnel } = getLangData();

  const searchStyle = {
    container: {
      padding: 0
    },
    searchContainer: {
      gap: 0
    },
    input: {
      fontSize: '18px',
      border: 'none',
      backgroundColor: 'var(--secondary-bg-color)',
      borderRadius: '20px 0 0 20px',
    },
    button: {
      backgroundColor: 'var(--third-bg-color)', 
      borderRadius: '0 20px 20px 0',
      color: 'black'
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.link}><Link to="/main/about">{navPAnel.about}</Link></div>
      <div className={styles.link}><Link to="/main/projects">{navPAnel.projects}</Link></div>
      <div className={styles.link}><Link to="/main/feedback">{navPAnel.contacts}</Link></div>
      <div className={styles.link}><Link to="/">{navPAnel.posts}</Link></div>
      <Search isShowTitle={false} style={searchStyle}/>
    </div>
  )
}

export default NavPanel;
