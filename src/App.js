import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationForm'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Body from './components/body';
import Footer from './components/footer';
import Inside from './components/inside';
import Contact from './components/contact';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/navbar.js";
import logo from "./logo.svg";
import './register.js'
import Login from './components/login'
import Sidebar from './components/sidebar'
import Fixed from './components/fixedDeposit.js';
function app() {
 
  return (
    <div className="App">
       
      
        <Router>
        <Header/> 
      <Navbar /> 
      
      <Routes>
      
          <Route path ="/" element ={<Inside/>} />
          <Route path ="/Home" element ={<Inside/>} />
          <Route path ="/react" element ={<Inside/>} />
          <Route path ="/signin" element ={<RegistrationForm/>} />
            <Route path ="/login" element = {<Login/>} />
            
           <Route path = "/sidebar" element ={<Sidebar/>} />  
          <Route path = "/Contact" element = {<Contact/>} />
          <Route path = "/fixed-deposit" element = {<Fixed/>} />
        </Routes>
        <Footer/>
       
        </Router>
     
      
    </div>
  )
}

export default app;
