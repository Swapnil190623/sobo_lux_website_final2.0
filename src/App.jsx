// ./App.js
import "./App.css";
import "./assets/fonts/bodoni.ttf";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

import ContactUs from "./components/ContactUs/ContactUs";

import Data from "./data/Data";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import ServicesSection from "./components/ServicesSection/ServicesSection.jsx";
import Services from "./pages/Services/Services.jsx";

import ProjectsPage from "./pages/Projects/ProjectsPage";
import ProjectDetailPage from "./pages/Projects/ProjectDetailPage";
import PropertyDetailPage from "./pages/Properties/PropertyDetailPage.jsx";

import ScrollToTop from "./components/ScrollToTop.jsx";
import Careers from "./pages/Careers/Careers.jsx";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={
            <>
              {" "}
              <ScrollToTop />
              <ProjectsPage />
            </>
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/project/:id"
          element={
            <>
              <ScrollToTop />
              <ProjectDetailPage
                projects={[...Data.ProjectData1, ...Data.ReflexProjectData]}
              />
            </>
          }
        />

        <Route
          path="/property/:id"
          element={
            <>
              {" "}
              <ScrollToTop />{" "}
              <PropertyDetailPage properties={Data.PropertyData2} />{" "}
            </>
          }
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

   

      <Footer />
    </Router>
  );
}

export default App;
