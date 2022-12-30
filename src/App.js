
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Card from './components/cards/Card';
import Cta from './components/cta/Cta';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nave from './components/navsbare/Nave';
import Tclient from './components/topclient/Tclient';


function App() {
  const data ={
    // card data 
  }
  return (
   <>
    <Nave/>
    <Header/>
    <Card/>
    <Tclient/>
    <Cta/>
    <Footer/>
   </>
  );
}

export default App;
