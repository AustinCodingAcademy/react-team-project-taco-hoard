    
import React from 'react';
import './App.css';
import Clients from './containers/Clients';
import LogIn from './containers/LogIn';
import AddClient from './containers/AddClient';
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component {

  render = () => {
    return (
      <BrowserRouter>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/clients/">Clients</Link>
        <br />
        <Link to="/clients/new">Add a Client</Link>

        <Route exact path="/" component={LogIn} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/clients/" component={Clients} />
        <Route exact path="/clients/new" component={AddClient} />
      </BrowserRouter>
    );
  }
}

export default App;