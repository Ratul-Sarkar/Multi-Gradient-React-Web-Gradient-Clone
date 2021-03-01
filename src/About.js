import React from 'react';
import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function About(){
  return(
    <div>
    <section style={{marginTop:50}}>
    <Container>
    <h2 style={{fontWeight: 'bold'}}>Welcome to MultiGradients</h2>
    <p style={{fontSize: 17}}>MultiGradients is a free collection of 180 linear gradients that you can use as content backdrops in any part of your website.</p>

    <Card className="text-center" style={{borderRadius: 12}}>
      <Card.Body>
        <Card.Title style={{fontSize: 24}}>What is MultiGradients?</Card.Title>
        <Card.Text style={{fontSize: 17}}>
          MultiGradients is a advanced clone of Web Gradients which was developed by itmeo team.
          Simple and powerful, WebGradients contains 180 fresh backdrop gradients lovely served in Sketch, PSD, CSS and PNG formats.
          But MultiGradients has same features with advanced UI & better user experience.
          More-over, it's based on React JS framework & it's fast, responsive web application.
          When you need to add a gradient in your project. MultiGradients saves your valuable time in a smooth, handy and inspiring way.
          <br/>Bookmark the web application to use it in your next project!😊
        </Card.Text>
      </Card.Body>
    </Card>

  </Container>
  </section>
  </div>
  )
}
export default About;
