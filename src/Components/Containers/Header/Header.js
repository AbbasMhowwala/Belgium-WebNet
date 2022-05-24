import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Modal, Nav, Navbar, Row } from 'react-bootstrap'
import logo from '../../../Assets/Images/logo.png'
import '../../../Assets/Css/Header.css'
import styled from "styled-components";
import Helmet from 'react-helmet'
import { isDesktop } from 'react-device-detect';
import { NavLink } from 'react-router-dom';
import bw from '../../../Assets/Images/bw.png'
import hamburger from '../../../Assets/Images/hamburger.png'
import { TextField } from '@mui/material';

const COLORS = {
    primaryDark: "#36620A",
    primaryLight: "#457319",
};
const MenuLabel = styled.label`
    position: fixed;  
    top: -15px;
    cursor: pointer;
    right: 20px;
    z-index: 1000; 
//     z-index: 1000;  
//   text-align: center;
//   top: -10px;
//   right: 175px;
//   cursor: pointer;
//   @media (min-width: 1150px) and (max-width: 1300px) {
//     top: -6px;
//     right: 20px;
//   }
  @media (max-width: 768px) {
    right: 20px !important;
    top: -20px !important;
  }

`;
const NavBackground = styled.div`
  position: fixed;
  top: 0;
  right: 20px;
  background-image: linear-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;  
  
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "white")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: #fff;
    width: 3rem;
    height: 2px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};

    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};

  transition: width 0.8s, opacity 0.8s;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 767px) {
        height: auto;
    }
    @media (min-width: 768px) and (max-width: 992px) {
        height: auto;
    }
`;

const List = styled.ul`
   text-align: left;
  width: 100%;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 35px !important;
    font-weight: 800 !important;
    line-height: 45px !important;
    text-decoration: none;
    color: #fff !important;
    @media (min-width: 768px) and (max-width: 992px) {
        line-height: 65px !important;
    }
`;
const SlimLink = styled(NavLink)`
  display: inline-block;
  font-size: 18px !important;
    font-weight: 500 !important;
    line-height: 25px !important;
    padding: 0px !important;
    text-decoration: none;
    color: #fff !important;
    @media (min-width: 320px) and (max-width: 767px){
        line-height: 32px !important;
    }
    @media (min-width: 768px) and (max-width: 992px) {
        line-height: 38px !important;
    }
`;
const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 200);
        });
    }, [])
    const openNav = () => {
        document.getElementById("myNav").style.height = "100%";
    }
    const closeNav = () => {
        document.getElementById("myNav").style.height = "0%";

    }
    return (
        <div className='bw-header-main'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Belgium WebNet | The best E-Commerce web design company for your website. Grow your business online with the best digital marketing agency.
                </title>
                <meta
                    name="description"
                    content="Specializing in fancy color diamonds including; pink, yellow, blue, green, orange, purple, and white diamonds. Colored diamond jewelry. Offering a luxury experience to clients worldwide."
                />
            </Helmet>
            <section className='header-main'>
                <Container className='bw-container'>
                    <Row>
                        <Col lg={12}>
                            {isDesktop ? (<Navbar expand="lg" className={scroll ? "fixed-head" : "normal-head"}>
                                <Container fluid className='p-0'>
                                    <Navbar.Brand to="/">
                                        <Image src={logo} className="logo" />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="navbarScroll" />
                                    <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                                        <Nav
                                            navbarScroll
                                            className='align-items-center'
                                        >
                                            <NavLink to="/a">Plans and Pricing</NavLink>
                                            <NavLink to="/">Blogs</NavLink>
                                            <NavLink to="/">Careers</NavLink>
                                            <NavLink to="/"><Button className='bw-header-btn' onClick={handleShow}>Book An Appointment</Button></NavLink>
                                            <NavLink className="menuLabel" to="/" onClick={openNav}><Image src={hamburger} className="hamburger" /> Menu</NavLink>
                                            {/* <Navigation clicked={click}>                                                
                                            </Navigation> */}
                                            <div id="myNav" class="overlay">
                                                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                                                <div class="overlay-content">
                                                    <Container fluid className='p-0 overflow-hidden'>
                                                        <Row className='align-items-center'>
                                                            <Col lg={7} className='full-screen-left'>
                                                                <Row className='align-items-center'>
                                                                    <Col lg={4}>
                                                                        <List>
                                                                            <li>
                                                                                <ItemLink onClick={handleClick} to="/">
                                                                                    About
                                                                                </ItemLink>
                                                                            </li>
                                                                            <li>
                                                                                <ItemLink onClick={handleClick} to="/">
                                                                                    Work
                                                                                </ItemLink>
                                                                            </li>
                                                                            <li>
                                                                                <ItemLink onClick={handleClick} to="/">
                                                                                    Services
                                                                                </ItemLink>
                                                                            </li>
                                                                            <li>
                                                                                <ItemLink onClick={handleClick} to="/">
                                                                                    Culture
                                                                                </ItemLink>
                                                                            </li>
                                                                            <li>
                                                                                <ItemLink onClick={handleClick} to="/">
                                                                                    Careers
                                                                                </ItemLink>
                                                                            </li>
                                                                        </List>
                                                                    </Col>
                                                                    <Col lg={4}>
                                                                        <List>
                                                                            <li>
                                                                                <SlimLink onClick={handleClick} to="/">
                                                                                    About
                                                                                </SlimLink>
                                                                            </li>
                                                                            <li>
                                                                                <SlimLink onClick={handleClick} to="/">
                                                                                    Work
                                                                                </SlimLink>
                                                                            </li>
                                                                            <li>
                                                                                <SlimLink onClick={handleClick} to="/">
                                                                                    Services
                                                                                </SlimLink>
                                                                            </li>
                                                                            <li>
                                                                                <SlimLink onClick={handleClick} to="/">
                                                                                    Culture
                                                                                </SlimLink>
                                                                            </li>
                                                                            <li>
                                                                                <SlimLink onClick={handleClick} to="/">
                                                                                    Careers
                                                                                </SlimLink>
                                                                            </li>
                                                                            <li>
                                                                                <SlimLink onClick={handleClick} to="/">
                                                                                    Contact Us
                                                                                </SlimLink>
                                                                            </li>
                                                                        </List>
                                                                    </Col>
                                                                    <Col lg={4}>
                                                                        <List>
                                                                            <li>
                                                                                <SlimLink onClick={handleClick} to="/">
                                                                                    Finetech
                                                                                </SlimLink>
                                                                            </li>
                                                                            <li>
                                                                                <SlimLink onClick={handleClick} to="/">
                                                                                    Health
                                                                                </SlimLink>
                                                                            </li>
                                                                            <li>
                                                                                <SlimLink onClick={handleClick} to="/">
                                                                                    Agriculture
                                                                                </SlimLink>
                                                                            </li>
                                                                            <li>
                                                                                <SlimLink onClick={handleClick} to="/">
                                                                                    Enterperise
                                                                                </SlimLink>
                                                                            </li>
                                                                        </List>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col lg={5} className='full-screen-right'>
                                                                <div className='full-content'>
                                                                    <div className='d-block'>
                                                                        <small>Got an idea?</small>
                                                                        <h3>Let's craft <br /> brilliance together!</h3>
                                                                        <Button className='full-btn mt-3'>Get In Touch</Button>
                                                                    </div>
                                                                    <div className='full-view-logo'>
                                                                        <Image src={bw} className='bw-logo' />
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </div>
                                            </div>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>) : (<div className={scroll ? "d-flex justify-content-between align-items-center fixed-head" : "d-flex mt-3 align-items-center justify-content-between normal-head"}>
                                <Image src={logo} className="logo" /> <NavLink className="menuLabel text-white text-decoration-none text-end d-inline-block" to="/" onClick={openNav}><Image src={hamburger} className="hamburger" /> Menu</NavLink>
                                <div id="myNav" class="overlay">
                                    <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                                    <div class="overlay-content">
                                        <Container fluid className='p-0 overflow-hidden'>
                                            <Row className='align-items-center'>
                                                <Col lg={7} className='full-screen-left'>
                                                    <Row className='align-items-center'>
                                                        <Col lg={4}>
                                                            <List>
                                                                <li>
                                                                    <ItemLink onClick={handleClick} to="/">
                                                                        About
                                                                    </ItemLink>
                                                                </li>
                                                                <li>
                                                                    <ItemLink onClick={handleClick} to="/">
                                                                        Work
                                                                    </ItemLink>
                                                                </li>
                                                                <li>
                                                                    <ItemLink onClick={handleClick} to="/">
                                                                        Services
                                                                    </ItemLink>
                                                                </li>
                                                                <li>
                                                                    <ItemLink onClick={handleClick} to="/">
                                                                        Culture
                                                                    </ItemLink>
                                                                </li>
                                                                <li>
                                                                    <ItemLink onClick={handleClick} to="/">
                                                                        Careers
                                                                    </ItemLink>
                                                                </li>
                                                            </List>
                                                        </Col>
                                                        <Col lg={4}>
                                                            <List>
                                                                <li>
                                                                    <SlimLink onClick={handleClick} to="/">
                                                                        About
                                                                    </SlimLink>
                                                                </li>
                                                                <li>
                                                                    <SlimLink onClick={handleClick} to="/">
                                                                        Work
                                                                    </SlimLink>
                                                                </li>
                                                                <li>
                                                                    <SlimLink onClick={handleClick} to="/">
                                                                        Services
                                                                    </SlimLink>
                                                                </li>
                                                                <li>
                                                                    <SlimLink onClick={handleClick} to="/">
                                                                        Culture
                                                                    </SlimLink>
                                                                </li>
                                                                <li>
                                                                    <SlimLink onClick={handleClick} to="/">
                                                                        Careers
                                                                    </SlimLink>
                                                                </li>
                                                                <li>
                                                                    <SlimLink onClick={handleClick} to="/">
                                                                        Contact Us
                                                                    </SlimLink>
                                                                </li>
                                                            </List>
                                                        </Col>
                                                        <Col lg={4}>
                                                            <List>
                                                                <li>
                                                                    <SlimLink onClick={handleClick} to="/">
                                                                        Finetech
                                                                    </SlimLink>
                                                                </li>
                                                                <li>
                                                                    <SlimLink onClick={handleClick} to="/">
                                                                        Health
                                                                    </SlimLink>
                                                                </li>
                                                                <li>
                                                                    <SlimLink onClick={handleClick} to="/">
                                                                        Agriculture
                                                                    </SlimLink>
                                                                </li>
                                                                <li>
                                                                    <SlimLink onClick={handleClick} to="/">
                                                                        Enterperise
                                                                    </SlimLink>
                                                                </li>
                                                            </List>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={5} className='full-screen-right'>
                                                    <div className='full-content'>
                                                        <div className='d-block'>
                                                            <small>Got an idea?</small>
                                                            <h3>Let's craft <br /> brilliance together!</h3>
                                                            <Button className='full-btn mt-3'>Get In Touch</Button>
                                                        </div>
                                                        <div className='full-view-logo'>
                                                            <Image src={bw} className='bw-logo' />
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                            </div>)}
                        </Col>
                    </Row>
                </Container>
            </section>
            <Modal show={show} size="lg" centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Book An Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className='pt-3 pb-3'>
                        <Col lg={6}>
                            <TextField id="outlined-basic" label="First Name" className='mb-3' fullWidth variant="outlined" />
                        </Col>
                        <Col lg={6}>
                            <TextField id="outlined-basic" label="Last Name" className='mb-3' fullWidth variant="outlined" />
                        </Col>
                        <Col lg={6}>
                            <TextField id="outlined-basic" label="Phone" className='mb-3' fullWidth variant="outlined" />
                        </Col>
                        <Col lg={6}>
                            <TextField id="outlined-basic" label="Company Name" className='mb-3' fullWidth variant="outlined" />
                        </Col>
                        <Col lg={12}>
                            <TextField id="outlined-basic" label="Your Message" multiline rows={3} className='mb-3' fullWidth variant="outlined" />
                        </Col>
                        <Col lg={12}>
                            <Button className='bg-black text-white m-auto d-block mt-3 rounded-0' variant='contained'>Submit</Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Header