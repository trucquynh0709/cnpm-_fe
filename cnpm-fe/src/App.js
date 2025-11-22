import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterCourse from "./pages/RegisterCourse";
import TutorProfile from "./pages/TutorProfile";
import ClassDetail from "./pages/ClassDetail";
import ProfileSetting from "./pages/ProfileSetting";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  console.log("App rendered");
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registercourse" element={<RegisterCourse />} />
        <Route path="/tutorprofile" element={<TutorProfile />} />
        <Route path="/classdetail" element={<ClassDetail />} />
        <Route path="/profilesetting" element={<ProfileSetting />} />
         <Route path="/studentdashboard" element={<StudentDashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
