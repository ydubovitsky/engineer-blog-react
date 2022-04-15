import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './login-form.module.css';
import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LangContext } from '../../../../context/LangContext';
import { authSelector, login } from '../../../../redux/features/auth/authSlice';

const LoginForm = () => {

  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const { getLangData } = useContext(LangContext);
  const { signIn } = getLangData();
  const { authEntity, status } = useSelector(authSelector);

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

  return (
    <div className="">
      <div className={styles.left}>
        <h1>{signIn.signIn}</h1>
        {showIsUserExist(status)}
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
    </div>
  )
}

export default LoginForm;