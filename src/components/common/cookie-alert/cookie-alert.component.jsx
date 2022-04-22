import cn from 'classnames';
import { useContext } from 'react';
import { LangContext } from '../../../context/lang/LangContext';
import { cookieWrapper } from '../../../context/cookie';
import styles from './cookie-alert.module.css';

const CookieAlert = (props) => {

  const { getLangData } = useContext(LangContext);
  const { cookieAlert } = getLangData();
  const { cookies, setCookie } = props;

  if (cookies['agreeCookie'] === 'true') {
    return null;
  }

  return (
      <div className={styles.container}>
        <p>{cookieAlert.text}</p>
        <i onClick={() => setCookie('agreeCookie', 'true')}
          className={cn(styles.closeBtn, "fas fa-times-circle")}
        ></i>
      </div>
  )
}

export default cookieWrapper(CookieAlert);
