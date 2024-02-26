import "./App.css";
import ImgSlider from "./components/Slider/ImgSlider";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
  ];

function App() {
  return (
    <div>
      <Navbar />
      <ImgSlider images={images} />
    </div>
  );
}

export default App;
