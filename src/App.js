import "./App.css";
import ImgSlider from "./components/Slider/ImgSlider";
import Navbar from "./components/navbar/Navbar";
// import Content from "./components/content/Content";
// import Footer from "./components/footer/Footer";
// import Membership from "./components/membership/Membership";
import banner from "./images/banner.png";
// import Enquiry from "./components/enquiry/Enquiry";
// import Equipments from "./components/Equipments/Equipments";
import { Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

const images = [
  banner,
  banner,
  banner,
// 'url(${banner})',
// 'url(${banner})',
// 'url(${banner})'
// Add more image URLs as needed
];

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <ImgSlider images={images} />
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
      
      {/* <Content />
      <Membership />
      <Enquiry />
      <Equipments />
      <Footer /> */}
    </div>
  );
}

export default App;
