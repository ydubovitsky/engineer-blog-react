import styles from './button.module.css';

const ButtonComponent = ({onClick, children}) => {
  return (
    <div className={styles.container} onClick={onClick}>{children}</div>
  )
}

export default ButtonComponent;