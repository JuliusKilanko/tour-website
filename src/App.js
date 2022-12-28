import Herosection from "./components/Herosection";
import ImageSlider from "./components/ImageSlider";
import Interior from "./components/Interior";
import NavBar from "./components/NavBar";
import Offers from "./components/Offers";
import Trip from "./components/Trip";
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Herosection/>
    <Offers/>
    <Trip/>
    <Interior/>
    <ImageSlider/>
    <Footer/>
    </div>
  );
}

export default App;
