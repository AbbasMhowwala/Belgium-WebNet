import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap'
import logo from '../../../Assets/Images/logo.png'
import '../../../Assets/Css/Header.css'
import styled from "styled-components";
import Helmet from 'react-helmet'
import { isDesktop } from 'react-device-detect';
import { NavLink } from 'react-router-dom';

const COLORS = {
    primaryDark: "#447119",
    primaryLight: "#244404",
};
const MenuLabel = styled.label`
    position: fixed;  
    z-index: 1000;  
  text-align: center;
  top: -10px;
  right: 175px;
  cursor: pointer;
  @media (min-width: 1150px) and (max-width: 1300px) {
    top: -16px;
    right: 20px;
  }
  @media (max-width: 768px) {
    right: 20px !important;
    top: -20px !important;
  }

`;
const NavBackground = styled.div`
  position: fixed;
  top: 0;
  right: 9.5rem;
  background-image: radial-gradient(
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
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};

  transition: width 0.8s, opacity 0.8s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
   text-align: center;
  width: 100%;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem !important;
    font-weight: 800 !important;
    line-height: 80px !important;
    color: #fff !important;
`;
const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 200);
        });
    }, [])
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
                                            <NavLink to="/"><Button className='bw-header-btn'>Book An Appointment</Button></NavLink>
                                            <NavLink to="/"><MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                                                <Icon clicked={click}>&nbsp;</Icon>
                                            </MenuLabel>
                                                <NavBackground clicked={click}>&nbsp;</NavBackground>
                                            </NavLink>
                                            <Navigation clicked={click}>
                                                <Container>
                                                    <Row className='align-items-center'>
                                                        <Col lg={12}>
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
                                                                <li>
                                                                    <ItemLink onClick={handleClick} to="/">
                                                                        Contact Us
                                                                    </ItemLink>
                                                                </li>
                                                            </List>
                                                        </Col>
                                                        {/* <Col lg={6}>
                                                            <div className='content'>
                                                                <Image src={bwlogoo} />
                                                            </div>
                                                            <div className='drawer-content'>
                                                                <h3>Our Studios</h3>
                                                            </div>
                                                        </Col> */}
                                                    </Row>
                                                </Container>
                                            </Navigation>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>) : (<div className={scroll ? "d-flex fixed-head" : "d-flex mt-3 normal-head"}>
                                <Image src={logo} className="logo" /> <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                                    <Icon clicked={click}>&nbsp;</Icon>
                                </MenuLabel>
                                <NavBackground clicked={click}>&nbsp;</NavBackground>
                                <Navigation clicked={click}>
                                    <Container>
                                        <Row className='align-items-center'>
                                            <Col lg={12}>
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
                                                    <li>
                                                        <ItemLink onClick={handleClick} to="/">
                                                            Contact Us
                                                        </ItemLink>
                                                    </li>
                                                    <hr />
                                                    <li>
                                                        <ItemLink onClick={handleClick} to="/">
                                                            Plans and Pricing
                                                        </ItemLink>
                                                    </li>
                                                    <li>
                                                        <ItemLink onClick={handleClick} to="/">
                                                            Blogs
                                                        </ItemLink>
                                                    </li>
                                                    <li>
                                                        <Nav.Link to="/"><Button className='bw-header-btn'>Book An Appointment</Button></Nav.Link>
                                                    </li>
                                                </List>
                                            </Col>
                                            {/* <Col lg={6}>
                                        <div className='content'>
                                            <Image src={bwlogoo} />
                                        </div>
                                        <div className='drawer-content'>
                                            <h3>Our Studios</h3>
                                        </div>
                                    </Col> */}
                                        </Row>
                                    </Container>
                                </Navigation>
                            </div>)}
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Header