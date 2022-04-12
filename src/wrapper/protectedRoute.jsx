import { useSelector } from 'react-redux';
import {
  Navigate,
  Outlet,
  useLocation
} from 'react-router-dom';
import { authEntitySelector } from '../redux/features/auth/authSlice';

const ProtectedRoute = () => {

  const { username, jwttoken } = useSelector(authEntitySelector);
  let location = useLocation();

  if (!username && !jwttoken) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;