import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import styles from './App.css';
import Pagination from "./components/main/pagination/pagination.component";
import PostCurrent from "./components/main/post-current/post-current.component";
import PostList from "./components/main/post-list/post-list.component";
import SignIn from "./components/main/sign-in/sign-in.component";
import Dashboard from './layouts/dashboard/dashboard.layout.jsx';
import Main from './layouts/main/main.layout';
import ProtectedRoute from "./wrapper/protectedRoute";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        {/* //TODO Додумать навигацию */}
        <Route path="main" element={<Main />}>
          <Route path=":page" element={<><PostList /><Pagination /></>} />
          <Route path="login" element={<SignIn />} />
          <Route path="post/:id" element={<PostCurrent />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="post-list" element={<PostList />}></Route>
          </Route>
        </Route>
        {/* //! Default Redirect */}
        <Route path="*" element={<Navigate to="/main/0" replace />} />
      </Routes>
    </div>
  );
}

export default App;
