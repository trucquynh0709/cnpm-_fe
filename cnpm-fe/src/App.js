import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterCourse from "./pages/RegisterCourse";
import AddSession from "./pages/AddSession";
import CoordinatorDashboard from "./pages/CoordinatorDashboard";
import CreateClass from "./pages/CreateClass";
import ClassAdjust from "./pages/ClassAdjust";
import CourseSite from "./pages/CourseSite";

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


      </Routes>
    </Layout>
  );
}

export default App;
