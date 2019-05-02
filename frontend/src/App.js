import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PetsList from "./container/PetsList";

const Homes = () => {
  return <h1>Home Page</h1>;
};

const Clients = () => {
  return <h1>Clients</h1>;
};

const SignOut = () => {
  return <h1>Sign Out</h1>;
};

class App extends React.Component {
  render = () => {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to="/login">Home</Link>
            <Link to="/clients">Clients</Link>
            <Link to="/pets">Pets</Link>
            <Link to="/signout">Sign Out</Link>
          </header>

          <Route exact path="/" component={Homes} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/pets" component={PetsList} />
          <Route exact path="/signout" component={SignOut} />
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
