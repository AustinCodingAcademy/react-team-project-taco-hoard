import React from "react";
import Clients from "./containers/Clients";
import LogIn from "./containers/LogIn";
import AddClient from "./containers/AddClient";
import Pets from "./containers/Pets";
import UpdatePetForm from "./components/UpdatePetForm";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
// import { LinkContainer } from 'react-router-bootstrap';
import {
  Collapse,
  NavItem,
  NavbarToggler,
  NavbarBrand,
  Dropbox,
  DropboxItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";
import "./App.css";

export default class App extends React.Component {
  render = () => {
    return (
      <BrowserRouter>
        {/* Using bootstrap */}

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>ENDLESS PAWSIBILITES</Navbar.Brand>
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
            <Nav.Link>
              {" "}
              <Link to="/clients/new">New Client </Link>{" "}
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        {/* Using reactstrap */}
        {/* <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/clients">Clients</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/pets">Pets</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/clients/new">New Client</NavLink>
          </NavItem>      
        </Nav>
      </div>    */}

        {/* <Link to="/login">Login</Link>
        <br />
        <Link to="/clients/">Clients</Link>
        <br />
        <Link to="/pets">Pets</Link>
        <br />
        <Link to="/clients/new">Add a Client</Link> */}

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
