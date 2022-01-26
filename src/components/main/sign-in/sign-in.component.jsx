import cn from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './sign-in.module.css';
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

  const showIsUserExist = (username) => {
    if (!username) {
      return <small>User not found!</small>
    }
  }

  if (authEntity.username) {
    history.push("/");
  }

  return (
    //TODO Переделать валидацию
    <div className={cn(style.container, status === 'failed' ? style.inValid : '')}>
      <Link to={"/"}><i className={cn("fas fa-times-circle", style.closeBtn)}></i></Link>
      <div className={cn(style.form)}>
        {showIsUserExist(authEntity.username)}
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={handleFormChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleFormChange} />
        <button onClick={() => dispatch(login(form))}>Sign In</button>
      </div>
    </div>
  )
}

export default withRouter(SignIn);
