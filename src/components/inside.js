import React from "react";
import logo from "./eco-banner-img02.jpg";
import Body from './body';
import Schemes from './scheme';
const Inside =() => {
    return (
        <div>
        <img src = {logo}  width = "100%" />
        
        <Body/>
        <Schemes/>
        </div>
    )
}
export default Inside;