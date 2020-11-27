import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Carousel from './HomePage/PictureSlides';
import ItemCard from './Components/ItemCard';
import 'bootstrap/dist/css/bootstrap.min.css';

//npx crcf src/components/Button Input

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Carousel />
      <div class="row">
        <div class="col-md-2" />
        <div class="col-md-8">
          <hr class="HLine"/>
          <h1>We love collecting too!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <hr class="HLine"/>
          <h1>New Arrivals</h1>
        </div>
        <div class="col-md-2" />
      </div>

    </div>
  );
}

export default App;
