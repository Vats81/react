import React from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
function Header() {
    return(
        <nav className="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3 style ={{fontSize : "15px"}}> <AiOutlineMobile/> : +91 9471503579     &nbsp; &nbsp; &nbsp;info@betiyannidhi.com</h3>
            </div>
        </nav>
    )
}
export default Header;