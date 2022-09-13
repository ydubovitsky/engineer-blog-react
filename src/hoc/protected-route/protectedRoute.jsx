import { useSelector } from 'react-redux';
import {
  Navigate,
  Outlet,
  useLocation
} from 'react-router-dom';
import { isAuthEntitySuperAdminSelector } from '../../redux/features/auth/auth.slice';

const ProtectedRoute = () => {

  const isAuthEntitySuperAdmin = useSelector(isAuthEntitySuperAdminSelector);
  let location = useLocation();

  if (!isAuthEntitySuperAdmin) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
