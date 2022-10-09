import React from 'react';
import logo1 from "./1.png";
import logo2 from "./2.png";
import logo3 from "./3.png";
import logo4 from "./4.png";
import "./style.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Body = () => {
    return (
       /* <div className = "textual" style={{align : "center"}}>
            <h1>Our Services</h1>
            <div className='row'>
                <div className ='column'>
                    <img src = {logo1} className ='icon' width="250" height="75" padding-left = "1.5em"/>
                </div>
                <div className ='column'>
                    <img src = {logo2} className ='icon' />
                </div>
            </div>
        </div>*/
        
         
           <Container>
            <br/><br/>
             <h2><u>OUR SERVICES</u></h2>
             <br/><br/>
        <Row>
          <Col sm={3}><div class="kode_eco_solar">
                <span><img src={logo1} className="ico_img"/></span>
                  <h5 title="Eco Technology Integration">General Loan</h5>
                </div></Col>
          <Col sm={3}><div class="kode_eco_solar">
                <span><img src={logo2} className="ico_img"/></span>
                  <h5 title="Eco Technology Integration">Property Loan</h5>
                </div></Col>
          <Col sm={3}><div class="kode_eco_solar">
                <span><img src={logo3} className="ico_img"/></span>
                  <h5 title="Eco Technology Integration">Vehical Loan</h5>
                </div></Col>
          <Col sm={3}><div class="kode_eco_solar">
                <span><img src={logo4} className="ico_img"/></span>
                  <h5 title="Eco Technology Integration">Secured Loan</h5>
                </div></Col>
        </Row>
        <br/><br/>
        <h2><u>OTHER SERVICES</u></h2>
        <br/><br/>
        <Row>
        <Col sm={3}><div class="kode_eco_solar">
                <span><img src={logo1} className="ico_img"/></span>
                  <h5 title="Eco Technology Integration">Education Loan</h5>
                </div></Col>
          <Col sm={3}><div class="kode_eco_solar">
                <span><img src={logo2} className="ico_img"/></span>
                  <h5 title="Eco Technology Integration">Consumer Loan</h5>
                </div></Col>
          <Col sm={3}><div class="kode_eco_solar">
                <span><img src={logo3} className="ico_img"/></span>
                  <h5 title="Eco Technology Integration">Bussiness Loan</h5>
                </div></Col>
          <Col sm={3}><div class="kode_eco_solar">
                <span><img src={logo4} className="ico_img"/></span>
                  <h5 title="Eco Technology Integration">Women Empowerment Loan</h5>
                </div></Col>
        </Row>
      </Container>
       

    )
}
export default Body;