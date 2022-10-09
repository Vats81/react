import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationForm'
import Body from './components/body';
import Inside from './components/inside'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/navbar.js";
import logo from "./logo.svg";
function app() {
 
  return (
    <div className="App">
      <Header/>
      <Navbar />
      
      <Inside/>
      <Body/>
      
      
    </div>

  )
}

export default app;
