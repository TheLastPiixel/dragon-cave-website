import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import Carousel from './HomePage/PictureSlides';
import MidSection from './HomePage/MidSection';
import HL from './Components/HL';
import NewArrivals from './HomePage/NewArrivals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'; 


//npx crcf src/components/Button Input

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Carousel />
      <HL />
      <MidSection />
      <Router>
        <div className="App">
          <ul> 
            <li> 
              <Link to="/">Home</Link> 
            </li> 
            <li> 
              <Link to="/About">About Us</Link> 
            </li> 
            <li> 
              <Link to="/contact">Contact Us</Link> 
            </li> 
          </ul> 
        </div>
      </Router>
      <HL />
      <NewArrivals />
      <Footer />
    </div>
  );
}

export default App;
