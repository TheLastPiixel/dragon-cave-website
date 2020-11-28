import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Carousel from './HomePage/PictureSlides';
import ItemCard from './Components/ItemCard';
import MidSection from './HomePage/MidSection';
import HL from './Components/HL';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';

//npx crcf src/components/Button Input

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Carousel />
      <HL />
      <MidSection />
      <HL />
      <div class="row">
        <div class="col-md-2" />
        <div class="col-md-8" >




          <h1>New Arrivals</h1>
          <CardDeck>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
            <ItemCard Item="Test"/>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
          </CardDeck>
          <br/>
          <CardDeck>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
            <ItemCard Item="Test"/>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
          </CardDeck>
        </div>
        <div class="col-md-2" />
      </div>

    </div>
  );
}

export default App;
