import React from "react";
const Login = () =>
{
    return (
        <div className="login " style= {{ backgroundColor: "white" , padding : "1em"}}>
            <div style={{align:"center"}}> 
            <div className="username">
                    <label className="form__label">First Name </label>
                    <input className="form__input" type="text"    placeholder="First Name"/>
                </div>
                <div className="password">
                    <label className="form__label" >Password </label>
                    <input className="form__input" type="password"    placeholder="Password"/>
                </div>
                <button type ="submit" style={{backgroundColor: "green"}}> Login</button>
                </div>
        </div> 
    )
}
export default Login;