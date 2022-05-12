import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import bw from '../../../Assets/Images/bw.png'
import c1 from '../../../Assets/Images/c1.png'
import c2 from '../../../Assets/Images/c2.png'
import c3 from '../../../Assets/Images/c3.png'
import c4 from '../../../Assets/Images/c4.png'
const Footer = () => {
  return (
    <div className='bw-footer text-white'>
      <Container>
        <Row>
          <Col lg={3} sm={4}>
            <div className='main-footer-nav'>
              <ul>
                <li><Link className='text-white text-decoration-none fw-bold' to='/'>Home</Link></li>
                <li><Link className='text-white text-decoration-none fw-bold' to='/'>Work</Link></li>
                <li><Link className='text-white text-decoration-none fw-bold' to='/'>Services</Link></li>
                <li><Link className='text-white text-decoration-none fw-bold' to='/'>Studio</Link></li>
                <li><Link className='text-white text-decoration-none fw-bold' to='/'>Blog</Link></li>
                <li><Link className='text-white text-decoration-none fw-bold' to='/'>Contact</Link></li>
                <li><Link className='text-white text-decoration-none fw-bold' to='/'>Privacy Policy</Link></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} sm={4}>
            <div className='second-footer-nav'>
              <h3 className='fw-bold mb-3'>Experts in</h3>
              <ul>
                <li><Link className='text-white text-decoration-none' to='/'>Hospitality</Link></li>
                <li><Link className='text-white text-decoration-none' to='/'>Property and Architecture</Link></li>
                <li><Link className='text-white text-decoration-none' to='/'>Film and Television</Link></li>
                <li><Link className='text-white text-decoration-none' to='/'> Business to Business</Link></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} sm={4}>
            <div className='second-footer-nav'>
              <h3 className='fw-bold mb-3'>Offices</h3>
              <ul>
                <li><Link className='text-white text-decoration-none' to='/'> 20 W 47th St, Suite 601 <br />New York, NY 10036 </Link></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} sm={12}>
            <div className='second-footer-nav text-end'>
              <h3 className='fw-bold mb-3'>Follow</h3>
              <ul className='social-media'>
                <li><Link className='text-white text-decoration-none' to='/'><TwitterIcon /></Link></li>
                <li><Link className='text-white text-decoration-none' to='/'><FacebookIcon /></Link></li>
                <li><Link className='text-white text-decoration-none' to='/'><PinterestIcon /></Link></li>
                <li><Link className='text-white text-decoration-none' to='/'> <InstagramIcon /></Link></li>
                <li><Link className='text-white text-decoration-none' to='/'> <YouTubeIcon /></Link></li>
              </ul>
              <h3 className='mt-5 pt-5 fw-bold email_text'> info@belgiumwebnet.com</h3>
              <Image src={bw} className='bw-footer-logo' />
            </div>
          </Col>
        </Row>
        <Row className='copyright-row mt-5 pt-5'>
          <Col lg={12}>
            <div className='copyright'>
              <ul className='d-flex align-items-center'>
                <li className='me-3'><Image src={c1} className='client' /></li>
                <li className='me-3'><Image src={c2} className='client' /></li>
                <li className='me-3'><Image src={c3} className='client' /></li>
                <li className='mb-3'><Image src={c4} className='client' /></li>
              </ul>
              <p>Copyright © 2022 <Link to="/" onClick={() => window.open("https://www.belgiumwebnet.com/", "_blank")} className='text-decoration-none text-white fw-bold'>Belgium WebNet</Link>. All Rights Reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer