import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import { AiOutlineMobile,AiTwotoneMail } from 'react-icons/ai';

class Footer extends React.Component{
  render(){
    return (
        <div className = "Footer">
        <Container>
        <Row>
        <br/><br/>
          <Col sm={3}><h5>About our Company</h5>
          <br/><br/> 
          <ul class="eco_admin_info" style ={{ listStyleType: "none"}}>
                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>
                      <p>C/O ANUP KUMAR KESHRI RAJ KUMAR KESHRI, 00,MESRA,MESRA, RANCHI JH 835217 </p>
                    </li>
                    <li><i className="cis-phone-call" aria-hidden="true"></i>
                      <p><AiOutlineMobile/> +91 9471503579</p>
                    </li>
                    <li>
                      <p><AiTwotoneMail/> info@betiyannidhi.com
                      </p>
                    </li>
                  </ul>
          </Col>
          <Col sm={3}>
          
          <ul class="eco_feature_campaigns" style ={{ listStyleType: "none"}}>
                    <li>About us</li>
                    <li>Our Services</li>
                    <li>Our Schemes</li>
                    <li>Contact us</li>
            </ul>
          </Col>       
        </Row>
      </Container>
      <div class="eco_template_information">
            <p>© Copyright 2021 Betiyan Nidhi Ltd.</p>
          </div>
      </div>
    )
}
}
export default Footer;