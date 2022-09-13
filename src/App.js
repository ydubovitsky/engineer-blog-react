import {
  Navigate, Route, Routes
} from "react-router-dom";
import styles from './App.css';
import PostForm from "./pages/dashboard/post-form/post-form.component";
import PostListDashBoard from "./pages/dashboard/post-list/post-list.component";
import PostCurrent from "./pages/main/posts-post/post-current/post-current.component";
import PostList from "./pages/main/posts/components/post-list/post-list.component";
import SignIn from "./pages/main/login/sign-in/sign-in.component";
import ProtectedRoute from "./hoc/protected-route/protectedRoute";
import AboutPage from "./pages/main/about/about.page";
import PolicyPage from "./pages/main/policy/policy.page";
import ProjectsPage from "./pages/main/projects/projects.page";
import FeedbackPage from "./pages/main/feedback/feedback.page";

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
          <Route path="feedback" element={<FeedbackPage />} />
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
