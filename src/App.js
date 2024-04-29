import "./App.css";
import ImgSlider from "./components/Slider/ImgSlider";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content"; 
import Footer from "./components/footer/Footer";
import Membership from "./components/membership/Membership";
import banner from "./images/banner.png";
import Enquiry from "./components/enquiry/Enquiry";
import Equipments from "./components/Equipments/Equipments";
  const images = [
    banner,
    banner,
    banner
    // 'url(${banner})',
    // 'url(${banner})',
    // 'url(${banner})'
    // Add more image URLs as needed
  ];

function App() {
  return (
    <div>
      <Navbar />
      <ImgSlider images={images} />
      <Content/>
      <Membership/>
      <Enquiry/>
      <Equipments/>
      <Footer/>
      
    </div>
  );
}

export default App;
