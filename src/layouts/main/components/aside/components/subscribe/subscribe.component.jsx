import styles from './subscribe.module.scss';
import { useContext } from 'react';
import { LangContext } from '../../../../../../context/lang/LangContext';

const Subscribe = () => {

  //Context
  const { getLangData } = useContext(LangContext);
  const { subscribe } = getLangData();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{subscribe.title}</div>
      <div className={styles.subTitle}>{subscribe.subTitle}</div>
      <input type="text" name="firstName" placeholder={subscribe.firstName} />
      <input type="text" name="lastName" placeholder={subscribe.lastName} />
      <input type="text" name="email" placeholder={subscribe.email} />
      <button className={styles.button}>{subscribe.button}</button>
    </div>
  )
};

export default Subscribe;
