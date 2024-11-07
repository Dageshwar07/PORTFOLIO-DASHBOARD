import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { lazy, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
// import Login from "./pages/Login";

// import HomePage from "./pages/HomePage";
// import ManageSkills from "./pages/ManageSkills";
// import ManageProjects from "./pages/ManageProjects";
// import UpdateProject from "./pages/UpdateProject";
import { useDispatch } from "react-redux";
import { getUser } from "./store/slices/userSlice";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
import { getAllSkills } from "./store/slices/skillSlice";
import { getAllSoftwareApplications } from "./store/slices/softwareApplicationSlice";
import { getAllTimeline } from "./store/slices/timelineSlice";
import { getAllMessages } from "./store/slices/messageSlice";
// import ManageTimeline from "./pages/ManageTimeline";
import { getAllProjects } from "./store/slices/projectSlice";
// import ViewProject from "./pages/ViewProject";
// import Test from "./pages/Test";
// import Register from "./pages/Register";

const Login = lazy(() => import("./pages/Login"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ManageSkills = lazy(() => import("./pages/ManageSkills"));
const ManageProjects = lazy(() => import("./pages/ManageProjects"));
const UpdateProject = lazy(() => import("./pages/UpdateProject"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const ViewProject = lazy(() => import("./pages/ViewProject"));
const ManageTimeline = lazy(() => import("./pages/ManageTimeline"));

const Test = lazy(() => import("./pages/Test"));

const Register = lazy(() => import("./pages/Register"));

const wait = (time) => {
  return new Promise(resolve => {
    setTimeout(()=>{resolve()},time)
  })
  
}



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getAllSkills());
    dispatch(getAllSoftwareApplications());
    dispatch(getAllTimeline());
    dispatch(getAllMessages());
    dispatch(getAllProjects());
  }, []);
  return (
    <Router>
      <div className="h-full w-full bg-gray-300">
        <Routes>
          {/* <Route path="/test" element={<Test />} /> */}

          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/manage/skills" element={<ManageSkills />} />
          <Route path="/manage/timeline" element={<ManageTimeline />} />
          <Route path="/manage/projects" element={<ManageProjects />} />
          <Route path="/view/project/:id" element={<ViewProject />} />
          <Route path="/update/project/:id" element={<UpdateProject />} />
        </Routes>
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </Router>
  );
}

export default App;
