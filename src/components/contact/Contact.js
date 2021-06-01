import React from 'react';
import { Container, Form } from 'react-bootstrap';
import NavBar from '../utilities/navbar/NavBar';
import './contact.scss';

class Contact extends React.Component{
  state={
    name:'',
    email:'', message:''
  }

  submit = (e) => {
    e.preventDefault();
  }

  onChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  render(){
    return(
      <div id="contact">
        <NavBar brandLight={false} toggleLight={false}></NavBar>
        <Container>
          <h1>Contact</h1>
          <div className="header-underline"></div>
          <div className="content">
            <div className="email">
              <p>mitali.chaudhari98@gmail.com</p>
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <Form>
              <h2>Let's chat!</h2>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={this.state.name} onChange={this.onChange} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={this.state.email} onChange={this.onChange}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={5} value={this.state.message} onChange={this.onChange} />
              </Form.Group>
              <button variant="primary" type="submit" onClick={this.submit}>
                Submit
              </button>
            </Form>
            <div className="social-media-container">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
              <i class="fa fa-behance" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default Contact;