import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../utilities/navbar/NavBar';
import profile from '../../images/me/2.jpeg'
import './about.scss';

class About extends React.Component{
  render(){
    return(
      <div id="about">
        <NavBar brandLight={false} toggleLight={false}></NavBar>
        <Container>
          <h1>About</h1>
          <div className="header-underline"></div>
          <div className="content">
            <div className="left-panel">
              <div className="image-container">
                <div className="frame"></div>
                <img src={profile} alt="me"></img>
              </div>
              <button>Download Resume</button>
            </div>
            <div className="right-panel">
              <h2>Hello!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna id. Vel pretium lectus quam id leo in vitae turpis massa. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. </p>
              <p>Aliquam eleifend mi in nulla posuere. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Egestas sed tempus urna et pharetra pharetra massa massa. Consequat ac felis donec et odio pellentesque diam. </p>
              <p>Sit amet massa vitae tortor condimentum. Felis eget nunc lobortis mattis aliquam. In ante metus dictum at tempor. </p>
              <p>Thanks for taking the time out to check my site!</p>
            </div>
          </div>

          <div className="social-media-container">
            <div className="divider"></div>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            <i class="fa fa-behance" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <div className="divider"></div>
          </div>
        </Container>
      </div>
    )
  }
}

export default About;