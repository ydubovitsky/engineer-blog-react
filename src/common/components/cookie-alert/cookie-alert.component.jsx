import { useContext, useRef } from 'react';
import { cookieWrapper } from '../../../context/cookie';
import { LangContext } from '../../../context/lang/LangContext';
import ButtonComponent from '../../atomic-components/button/button.component';
import styles from './cookie-alert.module.css';

const CookieAlert = () => {

  const { getLangData } = useContext(LangContext);
  const { cookieAlert } = getLangData();
  const containerRef = useRef();

  const stayHere = () => {
    containerRef.current.classList.add(styles.hide)
  }

  const redirect = () => {
    window.location.href = 'https://google.com';
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <p className={styles.text}>{cookieAlert.text}</p>
      <div className={styles.buttonsContainer}>
        <ButtonComponent onClick={stayHere}>
          <p>{cookieAlert.agree}</p>
        </ButtonComponent>
        <ButtonComponent onClick={redirect} >
          <p>{cookieAlert.disagree}</p>
        </ButtonComponent>
      </div>
    </div>
  )
}

export default cookieWrapper(CookieAlert);
