import "./Contact.css";
import React, { Component } from 'react';
import {Form, InputGroup, Button} from 'react-bootstrap';
import Map from "./ContactComponents/Map";
import HL from '../../Components/HL';

class Contact extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-sm-8" style={{margin: "0 auto"}}>

          <div class="col-sm-8 float-left" style={{marginTop: "20px"}}>
            <Map />
          </div>

          <div class="col-sm-4 float-right" style={{padding: "20px"}}>
            <p class="Text"><b>Address:</b> L-3-15, Jaya shopping mall, Jalan Professor Khoo Kay Kim, Section 14, 46100 Petaling Jaya, Selangor, Malaysia</p>
            <p class="Text"><b>Email:</b> <a href="mailto:dragoncave@gmail.com">dragoncave@gmail.com</a></p>
            <p class="Text"><b>Phone:</b> <a href="tel:+60379321523">+60379321523</a></p>
            <p class="Text"><b>Mobile:</b> <a href="tel:+60379321523">+60379321523</a></p>
          </div>
        </div>
        <HL />

        <div class="col-sm-5" style={{margin: "0 auto"}}>
          <h1>Contact Us</h1>
          <Form>
            <Form.Group controlId="Name">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="Phone">
              <Form.Control type="tel" placeholder="Phone" />
            </Form.Group>
            <Form.Group controlId="Subject">
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group controlId="Message">
              <Form.Control as="textarea" rows={5} type="text" placeholder="Message"/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;
