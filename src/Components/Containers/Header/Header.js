import React from 'react'
import { Button, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap'
import logo from '../../../Assets/Images/logo.png'
import '../../../Assets/Css/Header.css'
const Header = () => {
    return (
        <div className='bw-header-main'>
            <section className='header-main'>
                <Container className='bw-container'>
                    <Row>
                        <Col lg={12}>
                            <Navbar expand="lg"  sticky="top" >
                                <Container fluid>
                                    <Navbar.Brand to="/">
                                        <Image src={logo} className="logo" />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="navbarScroll" />
                                    <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                                        <Nav
                                            navbarScroll
                                            className='align-items-center'
                                        >
                                            <Nav.Link to="/">Plans and Pricing</Nav.Link>
                                            <Nav.Link to="/">Blogs</Nav.Link>
                                            <Nav.Link to="/">Careers</Nav.Link>
                                            <Nav.Link to="/"><Button className='bw-header-btn'>Book An Appointment</Button></Nav.Link>
                                            <Nav.Link to="/">
                                                <svg className='me-3' width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.630859" y="0.550293" width="30.2358" height="3.7877" rx="1.89385" fill="white" />
                                                    <rect x="5.9668" y="20.1143" width="24.9002" height="3.7877" rx="1.89385" fill="white" />
                                                    <rect x="16.6387" y="10.332" width="14.2282" height="3.7877" rx="1.89385" fill="white" />
                                                </svg> Menu
                                            </Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </section>            
        </div>
    )
}

export default Header