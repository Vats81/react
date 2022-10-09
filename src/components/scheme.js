import React from 'react';
import power from './power.jpg';
import power1 from './power1.jpg';
import power2 from './power2.jpg';
import power3 from './power3.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Schemes = () =>{
    return (
        <Container>
            <br/><br/>
             <h2><u>OUR Schemes</u></h2>
             <br/><br/>
        <Row>
          <Col sm={3}><div class="kode_eco_solar_pow">
                <span><img src={power} style={{height : "150px"}}/></span>
                  <h5 title="Eco Technology Integration">Savings Account</h5>
                  <p class="acc_content">Saving Accounts at Betiyan Nidhi Limited is opened to encourage members to save
                    money in regular intervals and withdraw it meet up their short term goals. The money can be
                    deposited / withdrawn as per account
                    holder’s wish.</p>
                </div></Col>
          <Col sm={3}><div class="kode_eco_solar_pow">
                <span><img src={power2} style={{height : "150px"}}/></span>
                  <h5 title="Eco Technology Integration">Fixed Deposit</h5>
                  <p class="acc_content">Fixed Deposit at Betiyan Nidhi Limited is an investment opportunity provided to
                    its customers to get higher rate of interest than a Normal Saving Account. The member investing in
                    FD Schemes gets assured ROI.
                  </p>
                </div></Col>
          <Col sm={3}><div class="kode_eco_solar_pow">
                <span><img src={power3} style={{height : "150px"}}/></span>
                  <h5 title="Eco Technology Integration">Recurring Deposit</h5>
                  <p class="acc_content">Recurring Deposit offered by Betiyan Nidhi Limited which help members with
                    regular income to deposit a fixed amount in every month into their Recurring Deposit account and
                    they earn interest at the interest rate applicable.</p>
                </div></Col>
          <Col sm={3}><div class="kode_eco_solar_pow">
          <img src={power1} style={{height : "150px"}}/>
                <div class="kode_solar_caption">
                  <h6>Double your Deposit Scheme</h6>
                  <p class="acc_content">A monthly income scheme is a special kind of scheme offered by Betiyan Nidhi
                    Limited in which we double your
                    investment in a fixed tenure. There is a minimum deposit, and the tenure for the same is 100 months.
                  </p>
                  <a href="double-deposit.html">Read More</a>
                </div>
                </div></Col>
        </Row>
        
        
      </Container>
    )
}
export default Schemes;