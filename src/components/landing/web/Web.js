import React from 'react';
import { motion } from "framer-motion";
import './web.scss';
import profile from '../../../images/me/3.jpeg';
import NavBar from '../../utilities/navbar/NavBar';

const words = [" ideas to design.", " designs to life."];
let i = 0;

const typingEffect = () => {
  let word = words[i].split("");
  var loopTyping = function() {
    if(document.getElementById('typing-text')){
      if (word.length > 0) {
        document.getElementById('typing-text').innerHTML += word.shift();
      } else {
        setTimeout(deletingEffect, 2000)
        return false;
      };
    }
    setTimeout(loopTyping, 200);
  };
  loopTyping();
}

const deletingEffect = () => {
  let word = words[i].split("");
  var loopDeleting = function() {
    if(document.getElementById('typing-text')){
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
    }
    setTimeout(loopDeleting, 100);
  };
  loopDeleting();
}

const btnTap = {scale: 0.9};
const btnHover= {
  scale: 1.05,
  transition: { duration: 0.2 },
};

class Web extends React.Component{

  componentDidMount(){
    document.getElementById('typing-text').innerHTML += "";
    typingEffect();
  }

  renderLeftPanel = () => {
    return(
      <motion.div className="left-panel">
        {/* TODO: find a good animation here! */}
        <motion.div
          // transition={{ ease: "easeOut", duration: 0.5 }}
          // initial={{ opacity: 0, scale: 0.75 }}
          // animate={{ opacity: 1, scale: 1 }}
          // exit={{ opacity: 0, scale: 0 }}
        >
          <h1>Hi, this is Mitali!</h1>
          <h2>
            I bring 
            <motion.span id="typing-text"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition = {{ease: 'easeInOut'}}
            ></motion.span>
            <span className="header-sub-title blink">|</span>
          </h2>
          <div className="buttons-container">
            <motion.button whileHover={btnHover} whileTap={btnTap}>Know more about me!</motion.button>
            <motion.button whileHover={btnHover} whileTap={btnTap}>Explore my artspace!</motion.button>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  renderRightPanel = () => {
    return(
      <div className="right-panel">
        <div className="image-container">
          <div className="left-semi-circle"></div>
          <div className="right-semi-circle"></div>
          <img src={profile} className="profile-pic" alt="profile-pic"></img>
          {/* <div className="profile-pic"></div>  */}
        </div>
        <div className="social-media-container">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
          <i class="fa fa-behance" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </div>
      </div>
    )
  }

  render(){
    return(
      <>
      <NavBar brandLight={false} toggleLight={true}></NavBar>
      <motion.div id="web-landing">
        {/* Left panel */}
        {this.renderLeftPanel()}
        {/* Right panel */}
        {this.renderRightPanel()}
      </motion.div>
      </>
    )
  }
}

export default Web;