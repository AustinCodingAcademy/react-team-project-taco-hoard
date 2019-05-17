import React, { Component } from 'react'
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LogIn extends Component {
  render() {
    return (
      <Container className="App d-flex py-5 justify-content-center">
        <div className="card border-0 shadow w-50">
          <div className="card-header">
            <h2>Sign In</h2>
          </div>
          <div className="card-body">
            <Form className="form">
              <FormGroup>
                <Label>Username</Label>
                <Input name="username" />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input type="password" name="password" />
              </FormGroup>
              <input className="btn btn-primary" type ="submit" />
            </Form>
          </div>
        </div>
      </Container>
    )
  }
}