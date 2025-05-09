import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import SignIn from "./Pages/Login.jsx";
import SignUp from "./Pages/Signup.jsx";
import Navbar from "./Components/Navbar.jsx";
import TokoTani from "./Pages/TokoTani.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import Features from "./Pages/Features.jsx";

const AppContent = () => {
  const location = useLocation();
  const [isNavbar, setIsNavbar] = useState(true);

  useEffect(() => {
    const hiddenPaths = ["/login", "/signup"];
    setIsNavbar(!hiddenPaths.includes(location.pathname));
  }, [location]);

  return (
    <>
      {isNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tokotani" element={<TokoTani />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blogPage" element={<BlogPage />} />
        {/* <Route path="/tokotani" element={<FAQ />} /> */}
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />


      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
