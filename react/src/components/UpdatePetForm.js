import React from "react";

export default class AddPetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPet: [],
      isChecked: false,
      petName: "",
      gender: ""
    };
  }

  handleDelete = props => {
    console.log("Pet was succesfully removed");
    fetch(`/api/pets/${this.props.match.params.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    this.props.history.push("/pets");
  };

  handleInputChange = event => {
    console.log("Altered field was changed");
    this.setState({ isChecked: !this.state.isChecked });
  };

  handleCancel = () => {
    console.log("form was succesfully cancelled");
    this.props.history.push("/pets");
  };

  handleSubmit = () => {
    fetch(`/api/pets"}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.props.history.push("/pets");
  };

  componentDidMount = async props => {
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

    this.setState({ petName: this.state.currentPet["name"] });

    this.setState({ gender: this.state.currentPet["gender"] });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Save" />
          <input type="submit" value="Cancel" onClick={this.handleCancel} />
          <input type="submit" value="Delete" onClick={this.handleDelete} />
          <br />
          {/* Pet Id field */}
          <label>
            Pet ID:
            <input
              name="Pet ID"
              type="text"
              value={this.state.currentPet["id"]}
            />
          </label>
          <br />
          {/* Pet Name field */}
          <label>
            Pet Name:
            <input
              name="petName"
              type="text"
              value={this.state.petName}
              onChange={e => this.setState({ petName: e.target.value })}
            />
          </label>
          <br />
          {/* Gender field */}
          <label>
            Gender
            <select>
              <option>{this.state.gender}</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              onChange={e => this.setState({ petName: e.target.value })}
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
  }
}
