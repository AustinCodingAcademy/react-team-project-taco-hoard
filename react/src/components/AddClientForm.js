import React, { Component } from "react";
import { Button, Form, FormGroup, label, Input, FormText } from "reactstrap";

export default class AddClientForm extends Component {
  render() {
    return (
      // <Form onSubmit={this.props.addClient}>
      //   <FormGroup>
      //     <label>Name</label>
      //     <input name = "name" />
      //   </FormGroup>
      //   <FormGroup>
      //     <label>Address</label>
      //     <input name="address" />
      //   </FormGroup>
      //   <FormGroup>
      //     <label>Phone Number</label>
      //     <input name="phoneNumber" />
      //   </FormGroup>
      //   <FormGroup>
      //     <input type="submit" />
      //   </FormGroup>
      // </Form>

      
      <form onSubmit={this.props.addClient}>
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label for="address">Address</label>
          <input type="text" className="form-control" id="address" />
        </div>
        <div className="form-group">
          <label for="phone">Phone Number</label>
          <input type="text" className="form-control" id="phone" />
        </div>
        <input className="btn btn-primary" type="submit"/>
      </form>
      
    )
  }
}
