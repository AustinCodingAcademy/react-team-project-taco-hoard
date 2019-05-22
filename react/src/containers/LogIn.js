import React, { Component } from 'react'
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';

export default class LogIn extends Component {

  state = {
    loggedIn: false
  }

  onSubmit = async (e) => {
    e.preventDefault();
    // e.target.elements.username.value => 'kevin'
    // e.target.elements.password.value => 'hello123'
    console.log(e);
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: e.target.elements.username.value,
          password: e.target.elements.password.value
        })
      }
    );
    const token = await response.text();
    console.log(token)
    localStorage.setItem('JWT_TOKEN', token);
    this.setState({ loggedIn: true });
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/clients" />
    }
    return (
      <Container className="App d-flex py-5 justify-content-center">
        <div className="card border-0 shadow w-50">
          <div className="card-header">
            <h2>Sign In</h2>
          </div>
          <div className="card-body">
            <Form  onSubmit={this.onSubmit} inline className="form">
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