import styles from './button.module.css';

const ButtonComponent = ({name, clickFunction}) => {
  return (
    <div className={styles.container} onClick={clickFunction}>{name}</div>
  )
}

export default ButtonComponent;