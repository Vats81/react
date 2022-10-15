import React from "react";
import logo from "./eco-logo.png";
import "./style.css";
import {useState} from 'react';
import { BrowserRouter, Route, Link, useResolvedPath, useMatch } from "react-router-dom";

const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

    return (
        
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
 
      <img src={logo} alt="Bootstrap" width="250" height="75" padding-left = "1.5em"/>
    </div>
    

  <div className="container-fluid">

  <div className="collapse navbar-collapse" >
    
      <ul className="navbar-nav">
      <li className="nav-item">
    <CustomLink to ="/Home" className="nav-link"style={{
            borderTop : isHovering ? '2px solid red' : ' ',
            borderBottom : isHovering ? '2px solid red' : ' ',
          }}
          onMouseEnter={handleMouseEnter}
    
          onMouseLeave={handleMouseLeave}>Home</CustomLink>
    </li>
    
        <li className="nav-item">
        <CustomLink to="/about" className="nav-link"  style={{
            borderTop : isHovering ? '2px solid red' : ' ',
            borderBottom : isHovering ? '2px solid red' : ' ',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>About US</CustomLink>
        </li>
        <li className="nav-item">
        <CustomLink to = "/schemes" className="nav-link"  style={{
            borderTop : isHovering ? '2px solid red' : ' ',
            borderBottom : isHovering ? '2px solid red' : ' ',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>Schemes</CustomLink>
        </li>
        <li className="nav-item">
        <CustomLink to ="/Contact" className="nav-link" style={{
            borderTop : isHovering ? '2px solid red' : ' ',
            borderBottom : isHovering ? '2px solid red' : ' ',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>Contact us</CustomLink>
        </li>
        <li className="nav-item ">
        <CustomLink to ='/signin'  className="nav-link"  style={{
            borderTop : isHovering ? '2px solid red' : ' ',
            borderBottom : isHovering ? '2px solid red' : ' ',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>Sign in</CustomLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
function CustomLink({to,children,...props})
{
  const resolvedPath = useResolvedPath(to);
  const isActive =useMatch({path : resolvedPath.pathname, end:true})
  return (
    <li className={isActive ? "active" : ""}>
      <Link to = {to} { ...props}>
        {children}
      </Link>
    </li>

  )
}
export default Navbar