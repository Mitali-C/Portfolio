import React from 'react';
import Mobile from './mobile/Mobile';
import Web from './web/Web';
import './landing.scss';

class Landing extends React.Component{
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

  render(){
    return(
      <div id="landing">
        {
          this.checkIfMobile() ? <Mobile></Mobile> : <Web></Web>
        }
      </div>
    )
  }
}

export default Landing;