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
import StudentHistory from "./pages/StudentHistory";
import StudentQuizzes from "./pages/StudentQuizzes";

function App() {
  console.log("App rendered");
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registercourse" element={<RegisterCourse />} />


        <Route path="/coordinator-dashboard" element={<CoordinatorDashboard />} />
        <Route path="/create-class" element={<CreateClass />} />
        <Route path="/class-adjust" element={<ClassAdjust />} />
        <Route path="/course-site" element={<CourseSite />} />
        <Route path="/add-session" element={<AddSession />} />


        <Route path="/tutorprofile" element={<TutorProfile />} />
        <Route path="/classdetail" element={<ClassDetail />} />
        <Route path="/profilesetting" element={<ProfileSetting />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/studenthistory" element={<StudentHistory />} />
        <Route path="/studentquizzes" element={<StudentQuizzes />} />
        
      </Routes>
    </Layout>
  );
}

export default App;
