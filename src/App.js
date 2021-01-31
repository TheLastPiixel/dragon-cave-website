import './App.css';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Home from './Pages/Home'; 
import About from './Pages/About'; 
import Contact from './Pages/Contact'; 

//npx crcf src/components/Button Input

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
          <Switch>
            <Route exact path='/' component={Home}></Route> 
            <Route exact path='/about' component={About}></Route> 
            <Route exact path='/contact' component={Contact}></Route> 
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
