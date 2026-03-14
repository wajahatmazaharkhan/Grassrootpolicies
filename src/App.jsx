import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Impact from './pages/Impact';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';  
import Research from './pages/Research';
import Contact from './pages/Contact';
import ContactAcknowledgement from './pages/ContactAcknowledgement';
import GetInvolved from "./pages/GetInvolved";
import Internships from './pages/Internships';
import ApplyForm from "./pages/ApplyForm";
import ApplicationSuccess from "./pages/ApplicationSuccess";
import PartnerWithUs from "./pages/PartnerWithUs";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-acknowledgement" element={<ContactAcknowledgement />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/apply" element={<ApplyForm />} />
            <Route path="/application-success" element={<ApplicationSuccess />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
