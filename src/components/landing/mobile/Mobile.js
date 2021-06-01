import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from "framer-motion";
import './mobile.scss';
import NavBar from '../../utilities/navbar/NavBar';

const words = [" ideas to design.", " designs to life."];
let i = 0;

const typingEffect = () => {
  let word = words[i].split("");
  var loopTyping = function() {
    if (word.length > 0) {
      document.getElementById('typing-text').innerHTML += word.shift();
    } else {
      setTimeout(deletingEffect, 2000)
      return false;
    };
    setTimeout(loopTyping, 200);
  };
  loopTyping();
}

const deletingEffect = () => {
  let word = words[i].split("");
  var loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      document.getElementById('typing-text').innerHTML = word.join("");
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      };
      typingEffect();
      return false;
    };
    setTimeout(loopDeleting, 100);
  };
  loopDeleting();
}

const btnTap = {scale: 0.9};
const btnHover= {
  scale: 1.05,
  transition: { duration: 0.2 },
};

class Mobile extends React.Component{

  componentDidMount(){
    console.log(window.innerWidth)
    document.getElementById('typing-text').innerHTML += "";
    typingEffect();
  }

  renderTopPanel = () => {
    return(
      <div className="top-panel">
        <div className="image-container">
          <div className="top-semi-circle"></div>
          <div className="bottom-semi-circle"></div>
          <div className="profile-pic"></div>
        </div>
      </div>
    )
  }

  renderBottomPanel = () => {
    return(
      <div className="bottom-panel">
        <Container>
          <h1>Hi, this is Mitali!</h1>
          <h3>
            I bring 
          <span id="typing-text"></span>
          <span className="header-sub-title blink">|</span></h3>
        <div className="buttons-container">
          <motion.button whileHover={btnHover} whileTap={btnTap}>Know more about me!</motion.button>
          <motion.button whileHover={btnHover} whileTap={btnTap}>Explore my artspace!</motion.button>
        </div>
        <div className="social-media-container">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
          <i class="fa fa-behance" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </div>
        </Container>
      </div>
    )
  }

  render(){
    return(
      <div id="mobile-landing">
        <NavBar brandLight={true} toggleLight={true}></NavBar>
        {this.renderTopPanel()}
        {this.renderBottomPanel()}
      </div>
    )
  }
}

export default Mobile;