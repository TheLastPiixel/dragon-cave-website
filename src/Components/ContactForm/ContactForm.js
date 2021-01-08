import React, { Component } from 'react';
import {Form, Alert, Button, Row, Col} from 'react-bootstrap';

class ContactForm extends Component {
  constructor(props) {
    super(props);
      this.state = {Name: '', Phone: '', Email: '', Subject: '', Message: ''};
      //this.handleChange = this.handleChange.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlePhoneChange = this.handlePhoneChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleSubjectChange = this.handleSubjectChange.bind(this);
      this.handleMessageChange = this.handleMessageChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleNameChange = (e) =>{
    this.setState({Name: e.target.value})
  }
  handlePhoneChange = (e) =>{
    this.setState({Phone: e.target.value})
  }
  handleEmailChange = (e) =>{
    this.setState({Email: e.target.value})
  }
  handleSubjectChange = (e) =>{
    this.setState({Subject: e.target.value})
  }
  handleMessageChange = (e) =>{
    this.setState({Message: e.target.value})
  }

  handleSubmit() {
    const templateId = 'dragoncave';
    
    this.sendFeedback(templateId, {from_name: this.state.Name, from_phone: this.state.Phone, from_email: this.state.Email, subject: this.state.Subject, message: this.state.Message})
  }

  sendFeedback (templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
        console.log('Email successfully sent!')
      })
      .then(this.setState({Name: '', Phone: '', Email: '', Subject: '', Message: ''}))
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Error Sending Email: ', err))
    }

  render() {
    return (
      <Form>
        <Form.Group controlId="NameAndPhone">
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Name" onChange={this.handleNameChange} value={this.state.Name}/>
            </Col>
            <Col>
              <Form.Control type="tel" placeholder="Phone Number" onChange={this.handlePhoneChange} value={this.state.Phone}/>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Control type="email" placeholder="Email" onChange={this.handleEmailChange} value={this.state.Email}/>
        </Form.Group>
        <Form.Group controlId="Subject">
          <Form.Control type="text" placeholder="Subject" onChange={this.handleSubjectChange} value={this.state.Subject}/>
        </Form.Group>
        <Form.Group controlId="Message">
          <Form.Control as="textarea" rows={5} type="text" placeholder="Message" onChange={this.handleMessageChange} value={this.state.Message}/>
        </Form.Group>
        <Button variant="secondary" style={{width: "100%"}} onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
