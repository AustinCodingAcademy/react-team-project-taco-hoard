import React, { Component } from "react";
import AddClientForm from "../components/AddClientForm";
import ClientList from "../components/ClientList";

export default class Clients extends Component {
  state = {
    message: "",
    loggedIn: !!localStorage.getItem("JWT_TOKEN")
  };

  addClient = async e => {
    e.preventDefault();
    try{      
      console.log("name", e.target.elements.name.value);
      console.log("address", e.target.elements.address.value);
      console.log("phoneNumber", e.target.elements.phoneNumber.value);

      await fetch("/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem("JWT_TOKEN")}`
        },
        body: JSON.stringify({
          name: e.target.elements.name.value,
          address: e.target.elements.address.value,
          phoneNumber: e.target.elements.phoneNumber.value
        })
      });
      this.setState({ message: "Client Added" });
   }catch (error){
      localStorage.removeItem("JWT_TOKEN");
   }
  };

  render() {
    return (
      <div>
        <h1>Add A Client</h1>
        <AddClientForm addClient={this.addClient} />
        <h3>{this.state.message}</h3>
      </div>
    );
  }
}
