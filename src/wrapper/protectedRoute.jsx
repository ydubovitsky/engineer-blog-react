import { authEntitySelector } from '../redux/features/auth/authSlice';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import PageNotFound from '../components/common/page-not-found/page-not-found.component';

//TODO Добавить изменение ссылки!
const ProtectedRoute = ({ path, children }) => {
  const { username, jwttoken } = useSelector(authEntitySelector);

  if (username && jwttoken) {
    return (<Route path={path}>
      {children}
    </Route>
    )
  }
  return <Route to={"/page-not-found"}>
    <PageNotFound message={"You do not have access rights, please log in!"} />
  </Route>
}

export default ProtectedRoute;