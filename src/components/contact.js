import React from "react";
import { AiOutlineMobile,AiTwotoneMail } from 'react-icons/ai';
import "./style.css";
import logo1 from "./power3.jpg";
import { TiLocation } from "react-icons/ti";
const Contact = () =>
{
    return (
        <div className="contactb">
          
        <h1 style = {{
            backgroundColor: "ffffff",
            fontFamily:"serif",
            color: "white",
            backgroundImage : "{logo1}",
        }} > Contact us</h1>
        <div className="contactc">
             
            <ul  style ={{ listStyleType: "none"}}>
                <li>
                <AiOutlineMobile /> Anup Kumar Keshri
                </li>
                <li>
                <AiTwotoneMail/> info@betiyannidhi
                </li>
                <li>
                <TiLocation/>  
                C/O ANUP KUMAR KESHRI RAJ KUMAR KESHRI, 00,MESRA,MESRA, RANCHI JH 835217
                </li>
            </ul>
        </div>
        </div>
    )
}
export default Contact;