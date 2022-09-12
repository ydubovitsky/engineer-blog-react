import {
  Navigate, Route, Routes
} from "react-router-dom";
import styles from './App.css';
import PostForm from "./components/dashboard/post-form/post-form.component";
import PostListDashBoard from "./components/dashboard/post-list/post-list.component";
import PostCurrent from "./components/main/post-current/post-current.component";
import PostList from "./components/main/post-list/post-list.component";
import SignIn from "./components/main/sign-in/sign-in.component";
import ProtectedRoute from "./wrapper/protectedRoute";
import AboutPage from "./components/page/about/about.page";
import PolicyPage from "./components/page/policy/policy.page";
import ProjectsPage from "./components/page/projects/projects.page";
import FeedbackPage from "./components/page/feedback/feedback.page";

//* Layouts!
import DashboardLayout from './layouts/dashboard/dashboard.layout.jsx';
import MainLayout from './layouts/main/main.layout';

function App() {

  return (
    <div data-id="app" className={styles.container}>
      <Routes>
        <Route path="/main" element={<MainLayout />}>
          <Route path="posts" element={<PostList />} />
          <Route path="posts/post" element={<PostCurrent />} />
          <Route path="login" element={<SignIn />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="policy" element={<PolicyPage />} />
          <Route path="contacts" element={<FeedbackPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="post-form" element={<PostForm />} />
            <Route path="post-list" element={<PostListDashBoard />} />
          </Route>
        </Route>
        {/* //! Default Redirect */}
        <Route path="*" element={<Navigate to="/main/posts?page=1" replace />} />
      </Routes>
    </div>
  );
}

export default App;
