import React, { Component } from "react";
import AddPetForm from "../components/AddPetForm";
import PetList from "../components/PetList";

export default class UpdatePetsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPet: [],
      isChecked: false
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

  handleInputChange(event) {
    console.log("handleInputCHange was invoked");
    this.setState({ isChecked: !this.state.isChecked });
  }

  componentDidMount = async () => {
    // need to check how to dynamically pass the pet id
    const response = await fetch(`/api/pets/${this.props.match.params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const petLists = await response.json();

    this.setState({ currentPet: petLists });

    this.setState({ isChecked: this.state.currentPet["altered"] });
  };

  render = () => {
    return (
      <div>
        <h1>Pets</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Save" onSubmit={this.handleSubmit} />
          <input type="submit" value="Cancel" onClick={this.handleSubmit} />
          <input type="submit" value="Delete" onSubmit={this.handleSubmit} />
          <br />
          {/* Pet Id field */}
          <label>
            Pet ID:
            <input
              name="Pet ID"
              type="text"
              value={this.state.currentPet["id"]}
              onChange={this.handleChange}
            />
          </label>
          <br />
          {/* Pet Name field */}
          <label>
            Pet Name:
            <input
              name="petName"
              type="text"
              value={this.state.currentPet["name"]}
              onChange={this.handleChange}
            />
          </label>
          <br />
          {/* Gender field */}
          <label>
            Gender
            <select>
              <option>{this.state.currentPet["gender"]}</option>
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
              checked={this.state.isChecked}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
        </form>
      </div>
    );
  };
}
