import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/app.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CertificateGallery from "./components/CertificateGallery";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToHash from "./components/ScrollToHash";

/**
 * Main App component with routing support
 * Routes:
 * - / : Home page with all sections
 * - /certificates : Certificate Gallery page
 */
function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToHash />

        <Routes>
          {/* Home page route */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <About />
                <Projects />
                <Education />
                <Certification />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Certificate Gallery route */}
          <Route
            path="/certificates"
            element={
              <>
                <Header />
                <CertificateGallery />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
