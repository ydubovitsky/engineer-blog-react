import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../redux/features/auth/auth.slice';

const Navbar = () => {

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link to={"/"}>Главная страница <i className="fas fa-home"></i></Link>
        <Link to={"/dashboard/post-form"}>Создать новый пост</Link>
        <Link to={"/dashboard/project-form"}>Добавить описание проекта</Link>
      </div>
      <span onClick={logoutHandler}>Выйти <i className="fas fa-sign-out-alt"></i></span>
    </div>
  )
}

export default Navbar;
