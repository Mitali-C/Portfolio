import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { motion, AnimatePresence } from "framer-motion";
import close from '../../../images/icons/close.svg';
import './navbar.scss';

const btnTap = {scale: 0.9};
const btnHover= {
  scale: 1.05,
  transition: { duration: 0.2 },
};

class NavBar extends React.Component{
  state = {
    showMenu: false
  }
  checkIfMobile = () => {
    // if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      return true;
    }else{
      // false for not mobile device
      return false;
    }
  }

  renderNavDrawer = () => {
    return(
      <motion.div className="nav-drawer container" 
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 0.5 }}
        exit={{ x: -300, opacity: 0 }}
      >
        <div className="close-container">
          <motion.img src={close} alt="close-icon" whileHover={btnHover} whileTap={btnTap} onClick={()=>{this.setState({showMenu:false})}}></motion.img>
        </div>
        <div className="items-container">
          <div className="menu">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/about-me">About me</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </div>
        </div>
      </motion.div>
    )
  }

  render(){
    return(
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id={this.checkIfMobile() ? 'mobile-nav' : 'web-nav'}>
        {
          // this.checkIfMobile() ? (
          //   <Container>
          //     <Navbar.Brand href="/" className={this.props.brandLight ? 'brand-light' : 'brand-dark'}>Mitali</Navbar.Brand>
          //     <Nav className="ml-auto">
          //       <motion.div className={this.props.toggleLight ? "toggle-container-light" : "toggle-container-dark"} whileHover={btnHover} whileTap={btnTap} onClick={()=>{
          //         this.setState({showMenu:true})
          //       }}>
          //         <i class="fa fa-bars" aria-hidden="true"></i>
          //       </motion.div>
          //     </Nav>
          //   </Container>
          // ) : (
            <>
              <Navbar.Brand href="/" className={this.props.brandLight ? 'brand-light' : 'brand-dark'}>Mitali</Navbar.Brand>
              <Nav className="ml-auto">
                <motion.div className={this.props.toggleLight ? "toggle-container-light" : "toggle-container-dark"} whileHover={btnHover} whileTap={btnTap} onClick={()=>{
                  this.setState({showMenu:true})
                }}>
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </motion.div>
              </Nav>
            </>
          // )
        }
      </Navbar>
      { this.state.showMenu && 
        <AnimatePresence>
          {this.renderNavDrawer()}
        </AnimatePresence>
      }
      </>
    )
  }
}

export default NavBar;