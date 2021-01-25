import React, { Component, useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import ContactForm from '../ContactForm';

class EnquireModal extends Component {
  constructor(props) 
  { 
    super(props);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.state = {
      isClicked: false,
    }
  };
 
  handleMouseClick() {
    this.setState(this.toggleClickState);
  }

  toggleClickState(state) {
    return {
      isClicked: !state.isClicked,
    };
  }

  render() {
    
    return (
      <>
        <Button variant="success" onClick={this.handleMouseClick} style={{width: "60%", position: "absolute", bottom: "0", left: "0", textAlign: "center", marginBottom: "15px", marginLeft: "20%"}}>
          Enquire
        </Button>
        {this.state.isClicked && 
          <Modal show={this.handleMouseClick} onHide={this.handleMouseClick}>
            <Modal.Header closeButton>
              <Modal.Title>Enquiry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ContactForm ItemName={this.props.ItemName}/>
            </Modal.Body>
          </Modal>
        }
      </>
    );
  }
}

export default EnquireModal;
