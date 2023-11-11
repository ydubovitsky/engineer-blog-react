import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import styles from './registration-form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { LangContext } from '../../../../../context/lang/LangContext';
import { authSelector, registration } from '../../../../../redux/features/auth/auth.slice';

const RegistrationForm = () => {

  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const { getLangData } = useContext(LangContext);
  const { signUp } = getLangData();
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
      return <h3>{signUp.error}</h3>
    }
  }


  return (
    <div className="">
      <div className={styles.left}>
        <h1>{signUp.signUp}</h1>
        {showIsUserExist(status)}
        <div className={cn(styles.form)}>
          <label htmlFor="username">{signUp.userName}</label>
          <input type="text" name="username" onChange={handleFormChange} />
          <label htmlFor="password">{signUp.password}</label>
          <input type="password" name="password" onChange={handleFormChange} />
          <label htmlFor="password2">{signUp.password}</label>
          <input type="password" name="password2" onChange={handleFormChange} />
          <div className={styles.buttons}>
            <button
              className={styles.button}
              onClick={() => dispatch(registration(form))}
            >{signUp.signUp}
            </button>
            <Link
              className={styles.button}
              to={"/"}>
              {signUp.cancel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm;
