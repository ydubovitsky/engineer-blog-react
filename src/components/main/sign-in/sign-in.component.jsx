import cn from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './sign-in.module.css';
import { login, authSelector } from '../../../redux/features/auth/authSlice';
import { Link, withRouter } from 'react-router-dom';

const SignIn = ({ history }) => {

  const [form, setForm] = useState({});
  const dispatch = useDispatch();
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
      return <h3>User not found!</h3>
    }
  }

  if (authEntity.username) {
    history.push("/");
  }

  return (
    //TODO Переделать валидацию
    <div className={cn(styles.container, status === 'failed' ? styles.inValid : '')}>
      <div className={styles.left}>
        <h1>Sign In</h1>
        {showIsUserExist(status)}
        <div className={cn(styles.form)}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={handleFormChange} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleFormChange} />
          <div className={styles.buttons}>
            <button
              className={styles.button}
              onClick={() => dispatch(login(form))}
            >Sign In
            </button>
            <Link
              className={styles.button}
              to={"/"}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h1>Hello, Friend!</h1>
        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, deserunt.</h4>
        <button className={styles.button}>Sign Up</button>
      </div>
    </div>
  )
}

export default withRouter(SignIn);
