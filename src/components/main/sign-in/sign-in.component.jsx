import cn from 'classnames';
import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './sign-in.module.css';
import { useNavigate } from 'react-router-dom';
import { LangContext } from '../../../context/lang/LangContext';
import LoginForm from './login-form/login-form.component';
import { authStatusSelector } from '../../../redux/features/auth/authSlice';
import RegistrationForm from './registration-form/registration-form.component';

const SignIn = () => {

  const navigate = useNavigate();
  const status = useSelector(authStatusSelector);
  const [isLogin, setIsLogin] = useState(true);
  //Context
  const { getLangData } = useContext(LangContext);
  const { signIn } = getLangData();

  const registrationHandler = () => {
    setIsLogin(!isLogin);
  }

  console.log(status);

  if (status === 'succeeded' || status === 'created') {
    navigate("/");
  }

  const showLoginOrRegistrationForm = () => {
    return isLogin ? <LoginForm /> : <RegistrationForm />
  }

  return (
    //TODO Переделать валидацию
    <div className={cn(styles.container, status === 'failed' ? styles.inValid : '')}>
      <div className={styles.left}>
        {showLoginOrRegistrationForm()}
      </div>
      <div className={styles.right}>
        <h1>{signIn.hello}</h1>
        <h4>{signIn.text}</h4>
        <button className={styles.button} onClick={registrationHandler}>{signIn.signUp}</button>
      </div>
    </div>
  )
}

export default SignIn;
