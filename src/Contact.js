import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';

function Contact(){
  return(
    <div>
    <section id="contact" style={{marginTop:100, marginBottom:40}}>
    <h2 style={{fontWeight: 'bold', color: ''}}>Contact Me</h2>
    <Container>
    <Card className="p-3">
    <CardDeck>
      <Card className="p-3" style={{border: 'none'}}>
        <Card.Body>
          <Card.Title style={{fontWeight: 'bold'}}>Working Hours</Card.Title>
          <Card.Text>
             <p>Mon to Fri : 11.00 AM to 07.00 PM</p>
             <p>ratulsarkar221998@gmail.com</p>
          </Card.Text>
         </Card.Body>
      </Card>
      <Card className="p-3" style={{border: 'none'}}>
        <Card.Body>
          <Card.Title style={{fontWeight: 'bold'}}>Contact Details</Card.Title>
          <Card.Text>
             <p><a href="tel:6909802706" style={{color: '#333', textDecoration: 'none'}}>+91 6909802706</a></p>
             <p><a href="mailto:ratulsarkar221998@gmail.com" style={{color: '#333', textDecoration: 'none'}}>ratulsarkar221998@gmail.com</a></p>
          </Card.Text>
         </Card.Body>
      </Card>
      <Card className="p-3" style={{border: 'none'}}>
        <Card.Body>
          <Card.Title style={{fontWeight: 'bold'}}>My Location</Card.Title>
          <Card.Text>
             <p>Netaji Palli, Belonia</p>
             <p>South Tripura, India, Pin - 799155</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
    </Card>
    </Container>
    </section>
    <Container>
    <a href="#" style={{color: '#122BFF', textDecoration: 'none', fontWeight: 'bold', fontSize: 24,}}>
  <img src="./back-to-top.png" style={{width: 35, height: 35, position: 'fixed', bottom: '20px', right:'30px'}}/></a>
    </Container>
    <br/>
    <br/>
    </div>
  )
}
export default Contact;
