import React from "react";
import Header from './components/header';
import RegistrationForm from './components/registrationForm';
import Footer from './components/footer';
import Navbar from "./Navigation/navbar.js";
function Register() {
 
    return (
      <div >
        <Header/>
        <Navbar />     
        <RegistrationForm/>
        
        <Footer/>
        
      </div>
  
    )
  }
  
  export default Register;