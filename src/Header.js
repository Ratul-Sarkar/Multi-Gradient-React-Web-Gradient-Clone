import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
  return(
    <div>
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:'#1ABC9C'}}>
  <Navbar.Brand href="/" style={{fontSize: 26, fontWeight: 'bold'}}>
  <img src="./favicon.png" style={{width: 40, height: 40}}/> Multi-Gradients</Navbar.Brand>
  </Navbar>
    </div>
  )
}
export default Header;
