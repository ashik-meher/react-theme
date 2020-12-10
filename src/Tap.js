import React, { Component } from "react";

import ReactDOM from "react-dom";
import logo from './logo.svg';


//adding bootstrap css 
import { Button, Col, Container, Row } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Form, FormGroup, FormLabel, FormControl, Card } from 'react-bootstrap';





import './Tap.css';
import Footer from './components/Footer';


//import 'bootstrap/dist/css/bootstrap.min.css';

// You should clear about it -- when using the JSX format no need to specify sub module path, rather use the main module 'react-bootstrap' only



//import { findByText } from "@testing-library/react";


function Tap() {
    return (

        <div className="Tap">

<Navbar bg="white" expand="lg">
                <Navbar.Brand href="#home">ATOMICS</Navbar.Brand>
                <img src={logo} className="Tap-logo" alt="logo" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>


            
            <div className="Tap-section-1">


                <p className="Tap-para" style={{color: "black", fontSize:"29px"}}>Like it or not, we will build somethimg cool!</p>
                <Button variant="success"> I'm In </Button>

            </div>

            <Container>
            <div className="Tap-section-2">

                <Row>
                    <Col>     
                    <Card>

                    <Card.Img src="https://cdn.britannica.com/74/22474-050-FE855824/Shell-atomic-model-shell-shells-electrons-energy.jpg">


                    </Card.Img>

                    <Card.Body>

                        <Card.Title>
                                    Atomic Rearch



                        </Card.Title>

                        <Card.Text>

                                    Join Us to know more

                                     


                        </Card.Text>

                        <Button variant="primary">Read more</Button>


                    </Card.Body>





                </Card>

                    
                    </Col>

                    <Col>


                    <Card>

<Card.Img src="https://cdn.britannica.com/38/192338-050-AE92E225/image-isotopes-element-hydrogen-forms-neutrons-proton.jpg">


</Card.Img>

<Card.Body>

    <Card.Title>
                                    Atomic Rearch



</Card.Title>

    <Card.Text>

                                    Join Us to know more


</Card.Text>

<Button variant="primary">Read more</Button>


</Card.Body>





</Card>

                    
                    </Col>

                    <Col>


                    <Card>

<Card.Img className="sec2-img" src="https://cdn.britannica.com/06/96906-050-EC22A89C/Electrons-subshell-levels-shell-orbitals-process-arrows.jpg" >


</Card.Img>

<Card.Body>

    <Card.Title>
                                    Atomic Rearch



</Card.Title>

    <Card.Text>

                                    Join Us to know more


</Card.Text>
<Button variant="primary">Read more</Button>


</Card.Body>





</Card>

                    
                    </Col>


           

                

               
               





                    </Row>

            </div>

            

            </Container>

            <Footer />



        </div >





    )

}



export default Tap;
