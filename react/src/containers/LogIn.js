import React, { Component } from 'react'
import { Container, Col, Form, FormGroup, Label, Input, Button, } from 'reactstrap';

export default class LogIn extends Component {
  render() {
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input name="username" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>PassWord</Label>
              <Input type="password" name="password" />
            </FormGroup>
          </Col>
          <input type ="submit" />
          </Form>
      </Container>







      // <div>
      //   <form>
      //     <label>
      //       username
      //       <input name="username" />
      //     </label>
      //     <label>
      //       password
      //       <input type="password" name="password" />
      //     </label>
      //     <input type="submit" />
      //   </form>
      // </div>
    )
  }
}