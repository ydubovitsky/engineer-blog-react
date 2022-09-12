import styles from './unit-title.module.css';

const UnitTitleComponent = ({ text }) => {
  return (
    <div className={styles.container}>{text}</div>
  )
}

export default UnitTitleComponent;