import React from "react";
import "./App.css";
import Clients from "./containers/Clients";
import LogIn from "./containers/LogIn";
import AddClient from "./containers/AddClient";
import Pets from "./containers/Pets";
import UpdatePetForm from "./components/UpdatePetForm";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  render = () => {
    return (
      <BrowserRouter>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/clients/">Clients</Link>
        <br />
        <Link to="/pets">Pets</Link>
        <br />
        <Link to="/clients/new">Add a Client</Link>

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
