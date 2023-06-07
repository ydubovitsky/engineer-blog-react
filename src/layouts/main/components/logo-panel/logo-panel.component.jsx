import styles from './logo-panel.module.css';
import { useContext } from 'react';
import { LangContext } from '../../../../context/lang/LangContext';

const LogoPanel = () => {

  const { getLangData } = useContext(LangContext);
  const { logoPanel } = getLangData();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{logoPanel.title}</div>
      <div className={styles.profession}>{logoPanel.profession}</div>
      <div className={styles.subtitle}>{logoPanel.subtitle}</div>
    </div>
  )
}

export default LogoPanel;
