import "./App.css";
import ImgSlider from "./components/Slider/ImgSlider";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content"; 
import Footer from "./components/footer/Footer";
import Membership from "./components/membership/Membership";
import banner from "./images/banner.png";
  const images = [
    url(banner),
    url(banner),
    url(banner)
    // Add more image URLs as needed
  ];

function App() {
  return (
    <div>
      <Navbar />
      <ImgSlider images={images} />
      <Content/>
      <Membership/>
      <Footer/>
      
    </div>
  );
}

export default App;
