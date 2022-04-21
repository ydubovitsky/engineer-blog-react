import cn from 'classnames';
import { useState, useContext } from 'react';
import { LangContext } from '../../../context/LangContext';
import styles from './cookie-alert.module.css';

const CookieAlert = () => {

  const [isShow, setIsShow] = useState(true);
  const { getLangData } = useContext(LangContext);
  const { cookieAlert } = getLangData();

  return (
    isShow ?
      <div className={styles.container}>
        <p>{cookieAlert.text}</p>
        <i onClick={() => setIsShow(!isShow)} className={cn(styles.closeBtn, "fas fa-times-circle")}></i>
      </div>
      :
      ''
  )
}

export default CookieAlert;