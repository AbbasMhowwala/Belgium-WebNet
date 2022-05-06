import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const scroll = () => {
        window.scrollTo(0, 500);
    }
    const settings = {
        className: "center",
        infinite: false,
        Nav: true,
        slidesToShow: 3,
        speed: 500,
        rows: 3,
        slidesPerRow: 1
    };
    return (
        <div className='bw-main-home'>
            <section className='bw-hero'>
                <Container className='bw-container'>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <div className='bw-hero-home'>
                                <h1 className='bw-hero-heading'>Experience the <b className='bw-bold'>Fastest <br /> Websites </b> available In <br /> the market</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <Button className='bw-hero-btn'>Click Here</Button>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='bw-hero-image'>
                                <Image src={mockup} className='bw-mockup' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className='cursor'>
                                <div className="field" onClick={scroll()}>
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
                                <h1 className='main-heading'>About Our <br /> Company Insight</h1>
                                <p className='paragraph'>Triplet I award-winning interdisciplinary architectural studio cultural, residential and commercial projects built worldwide. We pride ourselves on being builders creating architectural.</p>
                                <Button className='theme-btn'>Let's Chat</Button>
                                {/* <div className='partners'></div> */}
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Row>
                                <Col lg={6}>
                                    <div className='branding-box'>
                                        <Image src={b1} className="branding-img" />
                                        <h3 className='branding-count'>63</h3>
                                        <h6 className='branding-subhead'>Years of experience</h6>
                                        <p>Duis aute irure dolor in velit reprehenderit in voluptate esse cillum dolore neris.</p>
                                    </div>
                                </Col>
                                <Col lg={6} className='branding-margin'>
                                    <div className='branding-box'>
                                        <Image src={b2} className="branding-img" />
                                        <h3 className='branding-count'>63</h3>
                                        <h6 className='branding-subhead'>Years of experience</h6>
                                        <p>Duis aute irure dolor in velit reprehenderit in voluptate esse cillum dolore neris.</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <div className='branding-box'>
                                        <Image src={b3} className="branding-img" />
                                        <h3 className='branding-count'>63</h3>
                                        <h6 className='branding-subhead'>Years of experience</h6>
                                        <p>Duis aute irure dolor in velit reprehenderit in voluptate esse cillum dolore neris.</p>
                                    </div>
                                </Col>
                                <Col lg={6} className='branding-margin'>
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
                            <h1 className='main-heading'>New Branding Agency</h1>
                        </Col>
                        <Col lg={4}>
                            <div className='services-box'>
                                <Image src={s1} className='services-image' />
                                <h3 className='services-head'>Business Stratagy</h3>
                                <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='services-box'>
                                <Image src={s2} className='services-image' />
                                <h3 className='services-head'>UX & Product Design</h3>
                                <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='services-box'>
                                <Image src={s3} className='services-image' />
                                <h3 className='services-head'> Web Development</h3>
                                <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='services-box'>
                                <Image src={s4} className='services-image' />
                                <h3 className='services-head'>Marketing Stratagy </h3>
                                <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='services-box'>
                                <Image src={s5} className='services-image' />
                                <h3 className='services-head'>Digital Marketing</h3>
                                <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
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
                            <h1 className='main-heading mb-3'> We worked with <br />the World’s <br />Biggest Brands</h1>
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
        </div>
    )
}

export default Home