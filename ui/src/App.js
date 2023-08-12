import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Noiselabs from "./Components/Noiselabs";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Wireless from "./Components/Wireless";
import Watches from "./Components/Watches";
import Headphones from "./Components/Headphones";
import Footer from "./Components/Footer";
import Wirelessdetails from "./Components/Wirelessdetails";
import Headdetails from "./Components/Headdetails";
import Watchdetail from "./Components/Watchdetail";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/labs" element={<Noiselabs />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/wire" element={<Wireless />} />
        <Route path="/headphone" element={<Headphones />} />
        <Route path="/watch" element={<Watches />} />
        <Route path="/wire/:id" element={<Wirelessdetails />} />
        <Route path="/headphone/:id" element={<Headdetails/>} />
        <Route path="/watch/:id" element={<Watchdetail/>} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;
