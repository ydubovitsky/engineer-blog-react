import styles from './button.module.scss';

const ButtonComponent = ({onClick, children}) => {
  return (
    <div className={styles.container} onClick={onClick}>{children}</div>
  )
}

export default ButtonComponent;