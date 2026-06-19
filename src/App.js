import './App.css';
import Navbar from './components/navbar/Navbar';
import NavbarMobile from './components/navbar/NavbarMobile';
import Home from './components/Home/Home';
import About from './components/About/About';
import ScrollToTop from "react-scroll-to-top";
import Footer from './components/footer/Footer';
import Contact from './components/Contact/Contact';
import References from './components/References/references';
import Sectors from './components/Sectors/Sectors';
 

function App() {
  return (
    <div >
      <Navbar/>
      <NavbarMobile/>
      <Home/>
      <About/>
      <Sectors/>
      <References/>
      <Contact/>

      <ScrollToTop
  smooth
  className="scroll"
  color="white"
  height="20"
  width="20"
  style={{
    borderRadius: "50%",
    backgroundColor: "var(--green-main)",
  }}
/>
      <Footer></Footer>


    </div>
  );
}

export default App;


// 40
//20
//lottifiles