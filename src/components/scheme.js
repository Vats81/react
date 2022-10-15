import React from 'react';
import power from './power.jpg';
import power1 from './power1.jpg';
import power2 from './power2.jpg';
import power3 from './power3.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Route, Link, useResolvedPath, useMatch } from "react-router-dom";
const Schemes = () =>{
    return (
        <Container>
            <br/><br/>
             <h2><u>OUR Schemes</u></h2>
             <br/><br/>
        <Row>
          <Col sm={3}><div class="kode_eco_solar_pow">
                <span><img src={power} style={{height : "150px"}}/></span>
                <div class="kode_solar_caption">
                  <h6 title="Eco Technology Integration" style={{color: "white", backgroundColor: "red"
                  }}>Savings Account</h6>
                  <p class="acc_content">Saving Accounts at Betiyan Nidhi Limited is opened to encourage members to save
                    money in regular intervals and withdraw it meet up their short term goals. The money can be
                    deposited / withdrawn as per account
                    holder’s wish.</p>
                    <CustomLink to ="/saving-deposit" style = {{backgroundColor: " red"}}>Read More</CustomLink>
                    </div>
                </div></Col>
          <Col sm={3}><div class="kode_eco_solar_pow">
                <img src={power2} style={{height : "150px"}}/>
                <div class="kode_solar_caption">
                  <h6 title="Eco Technology Integration" style={{color: "white", backgroundColor: "red"
                  }}>Fixed Deposit</h6>
                  <p class="acc_content">Fixed Deposit at Betiyan Nidhi Limited is an investment opportunity provided to
                    its customers to get higher rate of interest than a Normal Saving Account. The member investing in
                    FD Schemes gets assured ROI.
                  </p>
                  <CustomLink to ="/fixed-deposit" style = {{backgroundColor: " red"}}>Read More</CustomLink>
                  </div>
                </div></Col>
          <Col sm={3}><div class="kode_eco_solar_pow">
                <img src={power3} style={{height : "150px"}}/>
                <div class="kode_solar_caption">
                  <h6 title="Eco Technology Integration" style={{color: "white", backgroundColor: "red"
                  }}>Recurring Deposit</h6>
                  <p class="acc_content">Recurring Deposit offered by Betiyan Nidhi Limited which help members with
                    regular income to deposit a fixed amount in every month into their Recurring Deposit account and
                    they earn interest at the interest rate applicable.</p>
                    <CustomLink to ="/recurring-deposit" style = {{backgroundColor: " red"}}>Read More</CustomLink>
                </div>
                </div></Col>
          <Col sm={3}><div class="kode_eco_solar_pow">
          <img src={power1} style={{height : "150px"}}/>
                <div class="kode_solar_caption">
                  <h6 style={{color: "white", backgroundColor: "red"
                  }}>Double your Deposit Scheme</h6>
                  <p class="acc_content">A monthly income scheme is a special kind of scheme offered by Betiyan Nidhi
                    Limited in which we double your
                    investment in a fixed tenure. There is a minimum deposit, and the tenure for the same is 100 months.
                  </p>
                  <CustomLink to ="/double-deposit" style = {{backgroundColor: " red"}}>Read More</CustomLink>
                </div>
                </div></Col>
        </Row>
        
        
      </Container>
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

export default Schemes;