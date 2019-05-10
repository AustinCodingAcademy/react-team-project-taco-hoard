import React, { Component } from 'react';
import { Button, Form, FormGroup, label, Input, FormText} from 'reactstrap';

export default class AddClientForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.addClient}>
        <FormGroup>
          <label>Name</label>
          <input name = "name" />
        </FormGroup>
        <FormGroup>
          <label>Address</label>
          <input name="address" />
        </FormGroup>
        <FormGroup>
          <label>Phone Number</label>
          <input name="phoneNumber" />
        </FormGroup>
        <FormGroup>
          <input type="submit" />
        </FormGroup>
      </Form>

      
      // <form onSubmit={this.props.addClient}>
      //   <label>
      //     name
      //     <input name="name" />
      //   </label>
      //   <label>
      //     address
      //     <input name="address" />
      //   </label>
      //   <label>
      //     phone number
      //     <input name="phoneNumber" />
      //   </label>
      //   <input type="submit"/>
      // </form>
      
    )
  }
}