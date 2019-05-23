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
  
  handleCancel = async () => {
    this.props.history.push("/pets");
  }

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
      <div className="container py-5">
        <div className="card">
          <div className="card-header">
            <h1>Add New Pet</h1>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
            {/* Client Name field */}
            <div className="form-group">
              <label for="client-name">Client</label>
              <input id="client-name" className="form-control" name="client-name" type="text" readonly="true"
                  value={this.state.clientname}
                />
            </div>
            {/* Pet Name field */}
            <div className="form-group">
              <label for="pet-name">Pet Name</label>
              <input id="pet-name" className="form-control"
                name="petname"
                type="text"
                value={this.state.petname}
                // onChange="{e => this.setState({state.editpetdata.name: e.target.value })}"
                onChange={e => this.setState({ petname: e.target.value })}
              />
            </div>
            {/* Gender field */}
            <div className="form-group">
              <label for="pet-gender">Gender</label>
              <select id="pet-gender" className="form-control custom-select"
                  name="petgender"
                  onChange={e => this.setState({ petgender: e.target.value })}
                >
                  <option>{this.state.petgender}</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
            </div>
            {/* Altered field */}
            <div className="custom-control custom-checkbox">
            <input id="altered" className="custom-control-input"
                name="altered"
                type="checkbox"
                //dynamic value
                checked={this.state.isaltered}
                onChange={e =>
                  this.setState({ isaltered: !this.state.isaltered })
                }
              />
              <label for="altered" className="custom-control-label">Altered</label>
            </div>
          </form>
          </div>
          <div className="card-footer">
            <input className="btn btn-success mr-2" type="submit" value="Save" onClick={this.handleSubmit} />
            <input className="btn btn-secondary" type="button" value="Cancel" onClick={this.handleCancel} />
          </div>
        </div>
      </div>
    );
  }
}
