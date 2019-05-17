import React, { Component } from "react";
import { Button, Form, FormGroup, label, Input, FormText } from "reactstrap";

export default class AddPetsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientid: 0,
      clientname: "",
      petid: 0,
      petname: "",
      petgender: "",
      isaltered: false,
      message: ""
    };
  }
  componentDidMount = async props => {
    // need to check how to dynamically pass the pet id
    // {"id":1,"name":"Rodrigo","phoneNumber":"5128888888","address":"Argentina"}
    //const response = await fetch(`/api/clients/${this.props.match.params.id}`, {
    console.log(this.props.location.state.clientid);
    const response = await fetch(
      `/api/clients/${this.props.location.state.clientid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const client = await response.json();
    this.setState({
      clientname: client["name"],
      clientid: client["id"]
    });
  };
  // {"id":1,"name":"Petco1","gender":"Male","altered":false,"clientId":4}
  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state.isaltered);
    // issue with isaltered
    console.log(this.state.clientid);
    await fetch(`/api/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.petname,
        gender: this.state.petgender,
        altered: this.state.isaltered,
        clientId: this.state.clientid
      })
    });
    this.setState({ message: "Added Client!!" });
  };
  render() {
    return (
      <div>
        <h1>Add New Pet</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Save" />
          <input type="button" value="Cancel" onClick={this.handleCancel} />
          <br />
          {/* Client Name field */}
          <label>
            Client :
            <input
              name="client-name"
              type="text"
              value={this.state.clientname}
            />
          </label>
          <br />
          {/* Pet Id field
<label>
Pet ID:
<input
name="pet-id-field"
type="text"
value={this.state.petidvalue}
onChange={e => this.setState({ value: e.target.value })}
/>
</label>
<br /> */}
          {/* Pet Name field */}
          <label>
            Pet Name:
            <input
              name="petname"
              type="text"
              value={this.state.petname}
              // onChange="{e => this.setState({state.editpetdata.name: e.target.value })}"
              onChange={e => this.setState({ petname: e.target.value })}
            />
          </label>
          <br />
          {/* Gender field */}
          <label>
            Gender
            <select
              name="petgender"
              onChange={e => this.setState({ petgender: e.target.value })}
            >
              <option>{this.state.petgender}</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </label>
          <br />
          {/* Altered field */}
          <label>
            Altered
            <input
              name="altered"
              type="checkbox"
              //dynamic value
              checked={this.state.isaltered}
              onChange={e =>
                this.setState({ isaltered: !this.state.isaltered })
              }
            />
          </label>
          <br />
        </form>
      </div>
    );
  }
}
