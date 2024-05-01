import "./App.css";
import ImgSlider from "./components/Slider/ImgSlider";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Membership from "./components/membership/Membership";
import banner from "./images/banner.png";
import Enquiry from "./components/enquiry/Enquiry";
import Equipments from "./components/Equipments/Equipments";
import Login from "./Pages/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  const router = createBrowserRouter([{ path: "/login", element:<><Navbar /> <Login /></>  }]);
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <ImgSlider images={images} />
      <Content />
       <Membership />
      <Enquiry />
      <Equipments />
      <Footer />
    </div>
  );
}

export default App;
