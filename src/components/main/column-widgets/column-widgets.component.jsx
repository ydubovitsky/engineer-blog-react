import styles from './column-widgets.module.css';
import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

const ColumnWidgets = (props) => {

  const { getLangData } = useContext(LangContext);
  const { columnWidgets } = getLangData();

  return (
    <div className={styles.container}>
      <div
        className={styles.box}
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)' }}
      >
        <div className={styles.overlay}>
        </div>
        <button className={styles.button}>{columnWidgets.about}</button>
      </div>
      <div className={styles.box}>
        <div className={styles.overlay}>
        </div>
        <button className={styles.button}>{columnWidgets.writeMe}</button>
      </div>
      <div
        className={styles.box}
        style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2020/06/12/14/07/code-5290465_960_720.jpg)' }}
      >
        <div className={styles.overlay}>
        </div>
        <button className={styles.button}>{columnWidgets.github}</button>
      </div>
    </div>
  )
}

export default ColumnWidgets;