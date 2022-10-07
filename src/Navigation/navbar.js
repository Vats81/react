import React from "react";
import logo from "./eco-logo.png";
import "./style.css";
const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Bootstrap" width="250" height="75" padding-left = "1.5em"/>
    </a></div>
  <div className="container-fluid">
    <a className="nav-link" href="#">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link"  href="#" >About US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Schemes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="#">Contact us</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link " href = "#">Sign in</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar