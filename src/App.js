import "./App.css";
import ImgSlider from "./components/Slider/ImgSlider";
import Navbar from "./components/navbar/Navbar";
  const images = [
    'https://imgs.search.brave.com/iwz2MGy4Pi1LmGirwCP18lYt2FNtRL74qXW7MOA4WrY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI4/NTkwMTM2My9waG90/by93aWRlLWFuZ2xl/LW9mLWFuLWVtcHR5/LWd5bS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RkpIZ19t/bjJUTTBMemdZMVdy/Mkowa1NTZHVXSXJm/blBCMGJZQS1sa3dO/RT0',
    'https://imgs.search.brave.com/nUuJ1s4AvvTvvZatK_gzdp0ZV83kd7ZCLG2T3cauKCc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by8z/ZC1neW0tZXF1aXBt/ZW50XzIzLTIxNTEx/MTQxNjMuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
   'https://imgs.search.brave.com/B86SS2MDvSPiiq2ZgUsUgqlbGFoC0UYwVTcPCPdhEKQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hdGhsZXRlcy1l/eGVyY2lzaW5nLW1v/ZGVybi1oZWFsdGgt/Y2x1Yi1neW0tZ2Vu/ZXJhdGVkLWJ5LWFp/XzE4ODU0NC0xMDQ4/Mi5qcGc_c2l6ZT02/MjYmZXh0PWpwZw',
    // Add more image URLs as needed
  ];

function App() {
  return (
    <div>
      <Navbar />
      <ImgSlider images={images} />
      <Content/>
    </div>
  );
}

export default App;
