import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

//npx crcf src/components/Button Input

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Footer />
    </div>
  );
}

export default App;
