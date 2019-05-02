import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    clients: []
  };

  componentDidMount = async () => {
    const response = await fetch("/api/clients");
    const clients = await response.json();
    this.setState({ clients: clients });
  };

  addClient = async e => {
    e.preventDefault();
    console.log("name", e.target.elements.name.value);
    console.log("address", e.target.elements.address.value);
    console.log("phoneNumber", e.target.elements.phoneNumber.value);

    await fetch("/api/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target.elements.name.value,
        address: e.target.elements.address.value,
        phoneNumber: e.target.elements.phoneNumber.value
      })
    });
    const response = await fetch("/api/clients");
    const clients = await response.json();
    this.setState({ clients: clients });
  };

  render = () => {
    return (
      <div>
        <h1>Clients</h1>
        <form onSubmit={this.addClient}>
          <label>
            name
            <input name="name" />
          </label>
          <label>
            address
            <input name="address" />
          </label>
          <label>
            phone number
            <input name="phoneNumber" />
          </label>
          <input type="submit" />
        </form>
        <ul>
          {this.state.clients.map(client => (
            <li key={client.id}>
              {client.name} <a href="#">delete</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
}

export default App;
