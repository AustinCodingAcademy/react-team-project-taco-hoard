import React, { Component } from "react";
import UpdateClientForm from "../components/UpdateClientForm";
import ClientList from "../components/ClientList";

export default class UpdateClientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClient: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    console.log("handleCHange was invoked");
    console.log(event.target.value);
  }

  handleSubmit(event) {
    console.log("handleSubmit was invoked");
    console.log(event.target.value);
    // event.preventDefault();
  }


  componentDidMount = async () => {
    // need to check how to dynamically pass the pet id
    const response = await fetch(`/api/clients/${this.props.match.params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const clientLists = await response.json();

    this.setState({ currentclient: clientLists });

  };

  render = () => {
    return (
      <div>
        <h1>Clients</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Save" onSubmit={this.handleSubmit} />
          <input type="submit" value="Cancel" onClick={this.handleSubmit} />
          <input type="submit" value="Delete" onSubmit={this.handleSubmit} />
          <br />
          {/* Client Id field */}
          <label>
            Client ID:
            <input
              name="Client ID"
              type="text"
              value={this.state.currentClient["id"]}
              onChange={this.handleChange}
            />
          </label>
          <br />
          {/* Pet Name field */}
          <label>
            Client Name:
            <input
              name="clientName"
              type="text"
              value={this.state.currentClient["name"]}
              onChange={this.handleChange}
            />
          </label>
          <br />
          {/* Gender field */}
          <label>
            Address
            <input
              name="address"
              type="text"
              value={this.state.currentclient["address"]}
              onChange={this.handleChange}
            />
          </label>
          <br />

          {/* Altered field */}
          <label>
            Phone Number
            <input
              name="phoneNumber"
              type="text"
              value={this.state.currentclient["phoneNumber"]}
              onChange={this.handleChange}
            />
          </label>
          <br />
        </form>
      </div>
    );
  };
}
