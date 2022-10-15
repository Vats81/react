import React, {useState,setState} from 'react';
import './style.css'
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";
import "./style.css";

import { BrowserRouter, Route, Link, useResolvedPath, useMatch } from "react-router-dom";

function RegistrationForm() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [of,setOf] = useState(null);
    const [age,setAge] = useState(null);
    const [Pan,setPan] = useState(null);
    const [noofshares,setnoofshares] = useState(null);
    const [Amount,setAmount] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "of")
        {
            setOf(value);
        }
        if(id === "age")
        {
            setAge(value);
        }
        if(id === "Pan")
        {
            setPan(value);
        }
        if(id === "noofshares")
        {
            setnoofshares(value);
        }
        if(id === "Amount")
        {
            setAmount(value);
        }
        
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit = () =>{
        let obj = {
                firstName : firstName,
                lastName:lastName,
                of:of,
                age:age,
                Pan : Pan,
                noofshares:noofshares,
                Amount :Amount,
                email:email,
                password:password,
                confirmPassword:confirmPassword,
            }       
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);
    }

    return(
        <div className='abc'>
            
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" htmlFor="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" htmlFor="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="of">
                    <label className="form_label" htmlFor = "of">S/o|D/o|W/o</label>
                    <input type = "text" id = "of" value ={of} className ="form_input" onChange={(e) => handleInputChange(e)} placeholder ="S/o D/o W/o"/>
                </div>
                <div className="age">
                    <label className="form_label" htmlFor = "of">Age</label>
                    <input type = "text" id = "age" value ={age} className ="form_input" onChange={(e) => handleInputChange(e)} placeholder ="age"/>
                </div>
                <div className="Pan">
                    <label className="form_label" htmlFor = "Pan">Pan</label>
                    <input type = "text" id = "Pan" value ={Pan} className ="form_input" onChange={(e) => handleInputChange(e)} placeholder ="Pan"/>
                </div>
                <div className="noofshares">
                    <label className="form_label" htmlFor = "noofshares">Age</label>
                    <input type = "int" id = "noofshares" value ={noofshares} className ="form_input" onChange={(e) => handleInputChange(e)} placeholder ="noofshares"/>
                </div>
                <div className="Amount">
                    <label className="form__label" htmlFor="Amount">Amount </label>
                    <input  type="int" id="Amount" className="form__input" value={Amount} onChange = {(e) => handleInputChange(e)} placeholder="Amount"/>
                </div>
                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div className="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn" style={{backgroundColor : 'green'}}>Register</button>
            </div>
            <li className="nav-item">
    <CustomLink to ="/login" className="nav-link"> Already Registered <span style={{color: "blue"}} >Login</span></CustomLink></li>
        </div>
        </div>
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

export default RegistrationForm
