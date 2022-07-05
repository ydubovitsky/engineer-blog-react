import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import styles from './App.css';
import Pagination from "./components/main/pagination/pagination.component";
import PostCurrent from "./components/main/post-current/post-current.component";
import PostList from "./components/main/post-list/post-list.component";
import PostListDashBoard from "./components/dashboard/post-list/post-list.component";
import SignIn from "./components/main/sign-in/sign-in.component";
import ProtectedRoute from "./wrapper/protectedRoute";
import PostForm from "./components/dashboard/post-form/post-form.component";

//* Layouts!
import DashboardLayout from './layouts/dashboard/dashboard.layout.jsx';
import MainLayout from './layouts/main/main.layout';

function App() {

  return (
    <div className={styles.container}>
      <Routes>
        {/* //TODO Додумать навигацию */}
        <Route path="/main" element={<MainLayout />}>
          {/* //TODO Переделать! Объединить в один компонент! */}
          <Route path=":page" element={<><PostList /><Pagination /></>} />
          <Route path="post/:id" element={<PostCurrent />} />
          <Route path="login" element={<SignIn />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="post-form" element={<PostForm />} />
            <Route path="post-list" element={<PostListDashBoard />} />
          </Route>
        </Route>
        {/* //! Default Redirect */}
        <Route path="*" element={<Navigate to="/main/0" replace />} />
      </Routes>
    </div>
  );
}

export default App;
