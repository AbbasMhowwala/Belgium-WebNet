import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Modal, Row } from 'react-bootstrap'
import '../../../Assets/Css/Home.css'
import mockup from '../../../Assets/Images/mockup.png'
import b1 from '../../../Assets/Images/b1.png'
import b2 from '../../../Assets/Images/b2.png'
import b3 from '../../../Assets/Images/b3.png'
import b4 from '../../../Assets/Images/b4.png'
import s1 from '../../../Assets/Images/s1.gif'
import s2 from '../../../Assets/Images/s2.gif'
import s3 from '../../../Assets/Images/s3.gif'
import s4 from '../../../Assets/Images/s4.gif'
import s5 from '../../../Assets/Images/s5.gif'
import s6 from '../../../Assets/Images/s6.gif'
import brand1 from '../../../Assets/Images/brand1.png'
import brand2 from '../../../Assets/Images/brand2.png'
import brand3 from '../../../Assets/Images/brand3.png'
import brand4 from '../../../Assets/Images/brand4.png'
import play from '../../../Assets/Images/play.png'
import project1 from '../../../Assets/Images/project1.png'
import project2 from '../../../Assets/Images/project2.png'
import google from '../../../Assets/Images/google.png'
import blogs from '../../../Assets/Images/blogs.png'
import blog1 from '../../../Assets/Images/blog1.png'
import blog2 from '../../../Assets/Images/blog2.png'
import blog3 from '../../../Assets/Images/blog3.png'
import instalogo from '../../../Assets/Images/instalogo.png'
import nleft from '../../../Assets/Images/nleft.png'
import nright from '../../../Assets/Images/nright.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "video-react/dist/video-react.css";
import { Player } from 'video-react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'
const Home = () => {
    const [lgShow, setLgShow] = useState(false);
    const [insta, setInsta] = useState(false)
    const projects = {
        className: "center",
        infinite: false,
        Nav: true,
        slidesToShow: 1.7,
        speed: 500,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    const settings = {
        className: "center",
        infinite: false,
        Nav: true,
        slidesToShow: 3,
        speed: 500,
        rows: 3,
        slidesPerRow: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                rows: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                slidesPerRow: 1,
                rows: 3,
                Nav: false
              }
            }
          ]
    };
    const review = {
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        prevArrow: <ArrowBackIosNewIcon />,
        nextArrow: <ArrowForwardIosIcon />,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className='bw-main-home'>
            <section className='bw-hero'>
                <Container className='bw-container'>
                    <Row className='align-items-center'>
                        <Col lg={6} sm={6}>
                            <div className='bw-hero-home'>
                                <h1 className='bw-hero-heading'>Experience the <b className='bw-bold'>Fastest <br /> Websites </b> available In <br /> the market</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <Button className='bw-hero-btn'>Click Here</Button>
                            </div>
                        </Col>
                        <Col lg={6} sm={6}>
                            <div className='bw-hero-image'>
                                <Image src={mockup} className='bw-mockup' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className='cursor'>
                                <div className="field">
                                    <div className="mouse"></div>
                                    <small className='text-center d-block mt-1'>Scroll to explore</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='branding-section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <div className='content-branding'>
                                <small className='subheading'>Overview</small>
                                <h1 className='main-heading medium-font'>About Our <br /> Company Insight</h1>
                                <p className='paragraph'>Triplet I award-winning interdisciplinary architectural studio cultural, residential and commercial projects built worldwide. We pride ourselves on being builders creating architectural.</p>
                                <Button className='theme-btn text-decoration-none'>Let's Chat</Button>
                                {/* <div className='partners'></div> */}
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Row>
                                <Col lg={6} md={6}>
                                    <div className='branding-box'>
                                        <Image src={b1} className="branding-img" />
                                        <h3 className='branding-count'>63</h3>
                                        <h6 className='branding-subhead'>Years of experience</h6>
                                        <p>Duis aute irure dolor in velit reprehenderit in voluptate esse cillum dolore neris.</p>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} className='branding-margin'>
                                    <div className='branding-box'>
                                        <Image src={b2} className="branding-img" />
                                        <h3 className='branding-count'>63</h3>
                                        <h6 className='branding-subhead'>Years of experience</h6>
                                        <p>Duis aute irure dolor in velit reprehenderit in voluptate esse cillum dolore neris.</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} md={6}>
                                    <div className='branding-box'>
                                        <Image src={b3} className="branding-img" />
                                        <h3 className='branding-count'>63</h3>
                                        <h6 className='branding-subhead'>Years of experience</h6>
                                        <p>Duis aute irure dolor in velit reprehenderit in voluptate esse cillum dolore neris.</p>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} className='branding-margin'>
                                    <div className='branding-box'>
                                        <Image src={b4} className="branding-img" />
                                        <h3 className='branding-count'>63</h3>
                                        <h6 className='branding-subhead'>Years of experience</h6>
                                        <p>Duis aute irure dolor in velit reprehenderit in voluptate esse cillum dolore neris.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='services-section'>
                <Container>
                    <Row>
                        <Col lg={12} className='mb-5'>
                            <small className='subheading'>Our Services</small>
                            <h1 className='main-heading medium-font'>New Branding Agency</h1>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='services-box'>
                                <Image src={s1} className='services-image' />
                                <h3 className='services-head'>Business Stratagy</h3>
                                <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='services-box'>
                                <Image src={s2} className='services-image' />
                                <h3 className='services-head'>UX & Product Design</h3>
                                <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='services-box'>
                                <Image src={s3} className='services-image' />
                                <h3 className='services-head'> Web Development</h3>
                                <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='services-box'>
                                <Image src={s4} className='services-image' />
                                <h3 className='services-head'>Marketing Stratagy </h3>
                                <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='services-box'>
                                <Image src={s5} className='services-image' />
                                <h3 className='services-head'>Digital Marketing</h3>
                                <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='services-box'>
                                <Image src={s6} className='services-image' />
                                <h3 className='services-head'>Keyword Research</h3>
                                <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='brands-section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <h1 className='main-heading medium-font mb-3'> We worked with <br />the World’s <br />Biggest Brands</h1>
                            <p className='mt-3 pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                        </Col>
                        <Col lg={6}>
                            <div className='brand-section'>
                                <Slider {...settings}>
                                    <div className='brand-logo'>
                                        <Image src={brand1} className='brand' />
                                    </div>
                                    <div className='brand-logo'>
                                        <Image src={brand2} className='brand' />
                                    </div>
                                    <div className='brand-logo'>
                                        <Image src={brand3} className='brand' />
                                    </div>
                                    <div className='brand-logo'>
                                        <Image src={brand4} className='brand' />
                                    </div>
                                    <div className='brand-logo'>
                                        <Image src={brand1} className='brand' />
                                    </div>
                                    <div className='brand-logo'>
                                        <Image src={brand2} className='brand' />
                                    </div>
                                    <div className='brand-logo'>
                                        <Image src={brand3} className='brand' />
                                    </div>
                                    <div className='brand-logo'>
                                        <Image src={brand4} className='brand' />
                                    </div>
                                    <div className='brand-logo'>
                                        <Image src={brand1} className='brand' />
                                    </div>
                                    <div className='brand-logo'>
                                        <Image src={brand2} className='brand' />
                                    </div>
                                    <div className='brand-logo'>
                                        <Image src={brand3} className='brand' />
                                    </div>
                                    <div className='brand-logo'>
                                        <Image src={brand4} className='brand' />
                                    </div>
                                    <div className='brand-logo'>
                                        <Image src={brand1} className='brand' />
                                    </div>
                                    <div className='brand-logo'>
                                        <Image src={brand2} className='brand' />
                                    </div>
                                    <div className='brand-logo'>
                                        <Image src={brand3} className='brand' />
                                    </div>
                                    <div className='brand-logo'>
                                        <Image src={brand4} className='brand' />
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='video-section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <h1 className='main-heading big-font mb-3'> Global Leader in <br /> Modern Business <br /> Innovation</h1>
                            <p className='mt-3 pt-3'>With unique business passionate people behind.</p>
                            <Button className='bw-hero-btn'>Let's Talk</Button>
                        </Col>
                        <Col lg={6}>
                            <div className='vide-section text-center'>
                                <Image src={play} onClick={() => setLgShow(true)} className='play-vid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='projects-section'>
                <Container fluid>
                    <Row className='align-items-center'>
                        <Col lg={{ span: 2, offset: 2 }}  >
                            <h1 className='main-heading medium-font mb-3'> Recent <br />Projects</h1>
                            <p className='mt-3 pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vivamus pretium maecenas amet, pellentesque sollicitudin.</p>
                            <Button className='theme-btn text-decoration-none'>Let's Work</Button>
                        </Col>
                        <Col lg={8}>
                            <div className='vide-section text-center'>

                                <Slider {...projects}>
                                    <div className='project-section'>
                                        <Image src={project1} className='project' />
                                        <div className='d-flex text-start my-5 px-5'>
                                            <h6 className='project-heading'>Lake Hillier</h6>
                                            <p>Lake Hillier is an effective, unique, custom designed theme with a clear, informative hierarchy that showcases relevant content</p>
                                        </div>
                                    </div>
                                    <div className='project-section'>
                                        <Image src={project2} className='project' />
                                        <div className='d-flex text-start my-5 px-5'>
                                            <h6 className='project-heading'>Lake Hillier</h6>
                                            <p>Lake Hillier is an effective, unique, custom designed theme with a clear, informative hierarchy that showcases relevant content</p>
                                        </div>
                                    </div>
                                    <div className='project-section'>
                                        <Image src={project1} className='project' />
                                        <div className='d-flex text-start my-5 px-5'>
                                            <h6 className='project-heading'>Belgium WebNet</h6>
                                            <p>Lake Hillier is an effective, unique, custom designed theme with a clear, informative hierarchy that showcases relevant content</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='review-section bg-black text-white text-center'>
                <Container>
                    <Row>
                        <Col lg={12} className='mb-5'>
                            <h1 className='main-heading medium-font'>Relationships based <br />on trust.</h1>
                        </Col>
                        <Col lg={12} className='mb-5'>
                            <Slider {...review}>
                                <Col>
                                    <div className='review-block'>
                                        <div className='rating'>
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                        </div>
                                        <p>"I cannot recommend Vardo agency highly enough. I worked with Albor to launch Webflow at the end of 2021."</p>
                                        <h6 className='review-user'>John Doe</h6>
                                        <Image src={google} className='img-fluid google-img' />
                                    </div>
                                </Col>
                                <Col>
                                    <div className='review-block'>
                                        <div className='rating'>
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                        </div>
                                        <p>"I cannot recommend Vardo agency highly enough. I worked with Albor to launch Webflow at the end of 2021."</p>
                                        <h6 className='review-user'>John Doe</h6>
                                        <Image src={google} className='img-fluid google-img' />
                                    </div>
                                </Col>
                                <Col>
                                    <div className='review-block'>
                                        <div className='rating'>
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                        </div>
                                        <p>"I cannot recommend Vardo agency highly enough. I worked with Albor to launch Webflow at the end of 2021."</p>
                                        <h6 className='review-user'>John Doe</h6>
                                        <Image src={google} className='img-fluid google-img' />
                                    </div>
                                </Col>
                                <Col>
                                    <div className='review-block'>
                                        <div className='rating'>
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                        </div>
                                        <p>"I cannot recommend Vardo agency highly enough. I worked with Albor to launch Webflow at the end of 2021."</p>
                                        <h6 className='review-user'>John Doe</h6>
                                        <Image src={google} className='img-fluid google-img' />
                                    </div>
                                </Col>
                                <Col>
                                    <div className='review-block'>
                                        <div className='rating'>
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                            <StarIcon className='text-warning' />
                                        </div>
                                        <p>"I cannot recommend Vardo agency highly enough. I worked with Albor to launch Webflow at the end of 2021."</p>
                                        <h6 className='review-user'>John Doe</h6>
                                        <Image src={google} className='img-fluid google-img' />
                                    </div>
                                </Col>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='blogs-section'>
                <Container fluid>
                    <Row>
                        <Col lg={8} className="m-auto blogs bg-black text-white">
                            <Row>
                                <Col lg={6} sm={6}>
                                    <div className='single-blog'>
                                        <small className="subheading"><b>FEATURED</b></small>
                                        <h1 className='main-heading medium-font mb-3'>The New Microsoft Edge is Out of Preview</h1>
                                        <p className='mt-3 pt-3'> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                                        <Link to='/' className='blog-link text-white text-decoration-none mt-5 d-block'>Continue Reading <ArrowForwardIcon /></Link>
                                    </div>
                                </Col>
                                <Col lg={6} sm={6} className='text-end'>
                                    <Image src={blogs} className='img-fluid blog-img' />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col lg={8} className="m-auto border-bottom pb-5">
                            <Row>
                                <Col lg={6}>
                                    <div className="blogs-single d-flex">
                                        <Image src={blog1} className='img-fluid blog-img' />
                                        <div className='ms-5'>
                                            <small className="subheading d-block"><b>FEATURED</b></small>
                                            <h1 className='blog-heading medium-font mb-3'>Hypnotize Yourself into The Ghost of Christmas Future</h1>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='blog-right'>
                                        <Link to='/' className='blog-link text-black text-end text-decoration-none mt-5 d-block'>Continue Reading <ArrowForwardIcon /></Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={8} className="m-auto border-bottom pt-5 pb-5">
                            <Row>
                                <Col lg={6}>
                                    <div className="blogs-single d-flex">
                                        <Image src={blog2} className='img-fluid blog-img' />
                                        <div className='ms-5'>
                                            <small className="subheading d-block"><b>FEATURED</b></small>
                                            <h1 className='blog-heading medium-font mb-3'>Hypnotize Yourself into The Ghost of Christmas Future</h1>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='blog-right'>
                                        <Link to='/' className='blog-link text-black text-end text-decoration-none mt-5 d-block'>Continue Reading <ArrowForwardIcon /></Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={8} className="m-auto border-bottom pt-5 pb-5">
                            <Row>
                                <Col lg={6}>
                                    <div className="blogs-single d-flex">
                                        <Image src={blog3} className='img-fluid blog-img' />
                                        <div className='ms-5'>
                                            <small className="subheading d-block"><b>FEATURED</b></small>
                                            <h1 className='blog-heading medium-font mb-3'>Hypnotize Yourself into The Ghost of Christmas Future</h1>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='blog-right'>
                                        <Link to='/' className='blog-link text-black text-end text-decoration-none mt-5 d-block'>Continue Reading <ArrowForwardIcon /></Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12} className='text-center mt-5'>
                            <Button className='theme-btn text-decoration-none'>See More</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='insta-section' >
                <Container className='bw-container'>
                    <Row className='align-items-center'>
                        <Col lg={4} sm={6}>
                            <div className='insta-about'>
                                <Image src={instalogo} className='img-fluid logo-insta' />
                                <Link to="/" onClick={() => window.open("https://www.instagram.com/belgium_webnet", "_blank")} className='text-decoration-none insta-href'> #belgium_webnet</Link>
                                <Button className='theme-btn text-decoration-none mt-3 m-auto text-center d-block'>Follow</Button>
                                <div className='insta-text-left mt-5 text-start px-3'>
                                    <Link to="/" className='text-decoration-none text-dark insta-href'> #belgium_webnet</Link>
                                    <p className='text-muted'>Information Technology Company</p>
                                    <p className='mt-3'>@Belgium.Diamonds Digital marketing solution for jewelers.💎</p>
                                    <p>Web Development, Design, and Digital Marketing</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} sm={6} className='text-center mt-5'>
                            {insta ? (<div className="elfsight-app-7bae1688-1768-4fa2-95f4-5d42b89561d6"></div>) : (<p className='fw-bold'>Code is implemented but it's blocked on localhost. <br />Insta will show once the Website will go live.</p>)}
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='newsletter-section'>
                <Container>
                    <Row className='newsletter-box align-items-center'>
                        <Col className='desktop-view' lg={2}>
                            <Image src={nleft} className='newsletter-left' />
                        </Col>
                        <Col lg={8} className="newsletter text-black text-center">
                            <h1 className='newsletter-heading'> SIGN UP TO BE A BELGIUM WEBNET INSIDER</h1>
                            <p className='mt-3'>Become a preferred subscriber and get a special offer on your purchase.</p>
                            <Form className='newsletter-form'>
                                <Form.Group className="mb-3 frominput">
                                    <Form.Control placeholder="email@belgiumwebnet.com" />
                                    <Button type="submit"></Button>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col className='desktop-view'  lg={2}>
                            <Image src={nright} className='newsletter-left' />
                        </Col>
                    </Row>
                </Container>
            </section>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Body className='p-0'>
                    <Player
                        playsInline={false}
                        controls={false}
                        poster="/assets/poster.png"
                        autoPlay={true}
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Home

