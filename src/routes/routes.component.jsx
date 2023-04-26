import {
  Navigate, Route, Routes
} from "react-router-dom";
import PostForm from "../pages/dashboard/post-form/post-form.component";
import PostCurrent from "../pages/main/posts-post/post-current/post-current.component";
import PostList from "../pages/main/posts/components/post-list/post-list.component";
import SignIn from "../pages/main/login/sign-in/sign-in.component";
import ProtectedRoute from "../hoc/protected-route/protectedRoute";
import AboutPage from "../pages/main/about/about.page";
import PolicyPage from "../pages/main/policy/policy.page";
import ProjectsPage from "../pages/main/projects/projects.page";
import FeedbackPage from "../pages/main/feedback/feedback.page";

//* Layouts!
import DashboardLayout from '../layouts/dashboard/dashboard.layout.jsx';
import MainLayout from '../layouts/main/main.layout';
import TermOfUsePage from "../pages/main/term-of-use/term-of-use.page";

const RoutesComponent = () => (
  <Routes>
    <Route path="/main" element={<MainLayout />}>
      <Route path="posts" element={<PostList />} />
      <Route path="posts/post" element={<PostCurrent />} />
      <Route path="login" element={<SignIn />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="policy" element={<PolicyPage />} />
      <Route path="term-of-use" element={<TermOfUsePage />} />
      <Route path="feedback" element={<FeedbackPage />} />
      <Route path="projects" element={<ProjectsPage />} />
    </Route>
    <Route element={<ProtectedRoute />}>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<PostForm />} />
        <Route path="post-form" element={<PostForm />} />
      </Route>
    </Route>
    {/* //! Default Redirect */}
    <Route path="*" element={<Navigate to="/main/posts?page=1" replace />} />
  </Routes>
)

export default RoutesComponent;