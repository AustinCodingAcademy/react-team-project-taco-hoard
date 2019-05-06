import React from "react";

export default class AddPetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPet: [],
      isChecked: false,
      petName: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.Name]: e.target.value });
  };
  handleInputChange = event => {
    console.log("handleInputCHange was invoked");
    this.setState({ isChecked: !this.state.isChecked });
  };

  handleCancel = () => {
    console.log("Cancel button was clicked");
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
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Save" onSubmit={this.handleSubmit} />
          <input type="submit" value="Cancel" onClick={this.handleCancel} />
          <input type="submit" value="Delete" onSubmit={this.handleSubmit} />
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
  }
}
