import React from "react";
import LogIn from "./containers/LogIn";
import Clients from "./components/ClientList";
import AddClientForm from "./components/AddClientForm";
import UpdateClientForm from "./components/UpdateClientForm";
import Pets from "./containers/Pets";
import AddPetsForm from "./components/AddPetsForm";
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
              <Link to="/newclient">New Client </Link>{" "}
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <Route exact path="/" component={LogIn} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/newclient" component={AddClientForm} />
        <Route exact path="/clients/:id" component={UpdateClientForm} />
        <Route exact path="/pets/:id" component={UpdatePetForm} />
        <Route exact path="/pets" component={Pets} />
        <Route exact path="/addpet" component={AddPetsForm} />
      </BrowserRouter>
    );
  };
}
