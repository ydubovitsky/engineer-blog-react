import styles from './lang-switcher.module.scss';
import cn from 'classnames';
import { useContext } from 'react';
import { LangContext } from '../../../../../../context/lang/LangContext';

const LangSwitcher = () => {

  const { setCurrentLang, currentLang } = useContext(LangContext);

  const changeLanguage = () => {
    if (currentLang === 'RUS') {
      setCurrentLang('ENG')
    } else {
      setCurrentLang('RUS')
    }
  }

  return (
    <div className={styles.container} onClick={changeLanguage}>
      <div>Rus</div>
      <div className={styles.slide}>
        <div className={cn(styles.ball, currentLang === 'RUS' ? styles.active : '')}>
          <i className="fas fa-flag"></i>
        </div>
      </div>
      <div>Eng</div>
    </div>
  )
}

export default LangSwitcher;
