import React from "react";
import Clients from "./containers/Clients";
import LogIn from "./containers/LogIn";
import AddClient from "./containers/AddClient";
import Pets from "./containers/Pets";
import UpdatePetForm from "./components/UpdatePetForm";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./App.css";

export default class App extends React.Component {
  render = () => {
    return (
      <BrowserRouter>
        {/* Using bootstrap */}
        <Navbar id="masthead">
          <Navbar.Brand><i id="logo" className="fa fa-paw"></i> ENDLESS PAWSIBILITES</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              {" "}
              <Link to="/login">Login </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/clients">Clients </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/pets">Pets </Link>{" "}
            </Nav.Link>
            {/* <Nav.Link>
              {" "}
              <Link to="/clients/new">New Client </Link>{" "}
            </Nav.Link> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 border-0 rounded-sm" />
            <Button variant="outline-primary"><i className="fa fa-search"></i></Button>
          </Form>
        </Navbar>

        <Route exact path="/" component={LogIn} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/pets/:id" component={UpdatePetForm} />
        <Route exact path="/pets" component={Pets} />
        <Route exact path="/clients/new" component={AddClient} />
      </BrowserRouter>
    );
  };
}
