import React, { Component } from "react";
import AddClientForm from "../components/AddClientForm";
import ClientList from "../components/ClientList";

export default class Clients extends Component {
  state = {
    clients: []
  };

  componentDidMount = async () => {
    const response = await fetch("/api/clients", { method: "GET" });
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

  render() {
    return (
      <div>
        <h1>Clients</h1>
        <AddClientForm addClient={this.addClient} />
        <h2>Client List</h2>
        <ClientList />
        {/* <ClientList clients={this.state.clients} /> */}
      </div>
    );
  }
}
