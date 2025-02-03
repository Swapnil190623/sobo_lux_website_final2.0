// ./App.js
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

import ContactUs from "./components/ContactUs/ContactUs";

import Data from "./data/Data";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";

import ProjectsPage from "./pages/Projects/ProjectsPage";
import ProjectDetailPage from "./pages/Projects/ProjectDetailPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/project/:id"
          element={
            <ProjectDetailPage
              properties={[...Data.ProjectData1, ...Data.ReflexProjectData]}
            />
          }
        />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
