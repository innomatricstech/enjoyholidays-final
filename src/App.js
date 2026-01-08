import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Gallery from "./component/Gallery/Gallery";
import Services from "./component/Services/Services";
import About from "./component/About/About";
import Home from "./component/Home/Home";
import Nav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";
import Contact from "./component/Contact/Contact";
import TransportAndFleet from "./component/Services/Categories/TransportAndFleet";
import AccommodationAndStay from "./component/Services/Categories/AccomodationAndStay";
import TourGuides from "./component/Services/Categories/TourGuides";
import TourPackages from "./component/Services/Categories/TourPackages";
import Api from "./component/API/Api";
import ScrollToTop from "./component/ScrollToTop";
import FloatingSocialMedia from "./component/FloatingSocialMedia";

function App() {
  return (
    <div className="App overflow-clip">
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apiTest" element={<Api />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/transport" element={<TransportAndFleet />} />
          <Route path="/accomodation" element={<AccommodationAndStay />} />
          <Route path="/tour" element={<TourGuides />} />
          <Route path="/packages" element={<TourPackages />} />
        </Routes>
        <Footer />
      </Router>
      <FloatingSocialMedia />
    </div>
  );
}

export default App;
