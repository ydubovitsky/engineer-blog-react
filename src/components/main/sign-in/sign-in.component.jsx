import cn from 'classnames';
import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LangContext } from '../../../context/LangContext';
import { authSelector, login } from '../../../redux/features/auth/authSlice';
import styles from './sign-in.module.css';

const SignIn = ({ history }) => {

  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authEntity, status } = useSelector(authSelector);
  //Context
  const { getLangData } = useContext(LangContext);
  const { signIn } = getLangData();

  const handleFormChange = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const showIsUserExist = (status) => {
    if (status === 'failed') {
      return <h3>{signIn.error}</h3>
    }
  }

  if (authEntity.username) {
    navigate("/");
  }

  return (
    //TODO Переделать валидацию
    <div className={cn(styles.container, status === 'failed' ? styles.inValid : '')}>
      <div className={styles.left}>
        <h1>{signIn.signIn}</h1>
        {showIsUserExist(status)}
        {/* //TODO Внести в отдельный компонент формы */}
        <div className={cn(styles.form)}>
          <label htmlFor="username">{signIn.userName}</label>
          <input type="text" name="username" onChange={handleFormChange} />
          <label htmlFor="password">{signIn.password}</label>
          <input type="password" name="password" onChange={handleFormChange} />
          <div className={styles.buttons}>
            <button
              className={styles.button}
              onClick={() => dispatch(login(form))}
            >{signIn.signIn}
            </button>
            <Link
              className={styles.button}
              to={"/"}>
              {signIn.cancel}
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h1>{signIn.hello}</h1>
        <h4>{signIn.text}</h4>
        <button className={styles.button}>{signIn.signUp}</button>
      </div>
    </div>
  )
}

export default SignIn;
