import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Carousel from './HomePage/PictureSlides';
import 'bootstrap/dist/css/bootstrap.min.css';

//npx crcf components/Button Input

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Carousel />
    </div>
  );
}

export default App;
