import React, { Component } from "react";
import { Button, Form, FormGroup, label, Input, FormText } from "reactstrap";

export default class AddClientForm extends Component {
  render() {
    return (
      <div className="container py-5">
        <div className="card">
          <div className="card-header">
            <h1>Add a Client</h1>
          </div>
          <div className="card-body">
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
          </div>
        </div>
      </div>
    )
  }
}
