import React from "react";

export default class AddPetForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editpetdata: {
        id: 0,
        altered: false,
        name: "",
        gender: "",
        clientId: 0
      },
      alteredvalue: false,
      petNamevalue: "",
      gendervalue: "",
      petidvalue: 0
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

  handleChange = event => {
    console.log("Selected element " + event.target.name);

    if (event.target.name === "pet-id-field") {
      this.setState({ petidvalue: event.target.value });
      console.log("new value is " + event.target.value);
    } else if (event.target.name === "pet-field") {
      this.setState({ petNamevalue: event.target.value });
      console.log("new value is " + event.target.value);
    } else if (event.target.name === "gender-field") {
      this.setState({ gendervalue: event.target.value });
      console.log("new value is " + event.target.value);
    } else if (event.target.name === "altered-field") {
      this.setState({ alteredvalue: !this.state.alteredvalue });
      console.log("new value is " + this.state.alteredvalue);
    }
  };

  handleCancel = () => {
    console.log("form was succesfully cancelled");
    this.props.history.push("/pets");
  };

  handleSubmit = () => {
    fetch(`/api/pets`, {
      method: "PUT",
      body: JSON.stringify({
        id: this.state.petidvalue,
        name: this.state.petNamevalue,
        gender: this.state.gendervalue,
        altered: this.state.alteredvalue,
        clientId: this.state.editpetdata.clientId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    // const pet = await response.json();

    // this.setState({ editpetdata: pet });

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
    const pet = await response.json();

    this.setState({ editpetdata: pet });

    this.setState({ petidvalue: this.state.editpetdata.id });

    this.setState({ petNamevalue: this.state.editpetdata.name });

    this.setState({ gendervalue: this.state.editpetdata.gender });

    this.setState({ alteredvalue: this.state.editpetdata.altered });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Save" onClick={this.handleSubmit} />
          <input type="button" value="Cancel" onClick={this.handleCancel} />
          <input type="button" value="Delete" onClick={this.handleDelete} />
          <br />
          {/* Pet Id field */}
          <label>
            Pet ID:
            <input
              name="pet-id-field"
              type="text"
              value={this.state.petidvalue}
              onChange={this.handleChange}
            />
          </label>
          <br />
          {/* Pet Name field */}
          <label>
            Pet Name:
            <input
              name="pet-field"
              type="text"
              value={this.state.petNamevalue}
              // onChange="{e => this.setState({state.editpetdata.name: e.target.value })}"
              onChange={this.handleChange}
            />
          </label>
          <br />
          {/* Gender field */}
          <label>
            Gender
            <select name="gender-field" onChange={this.handleChange}>
              <option>{this.state.gendervalue}</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </label>
          <br />

          {/* Altered field */}
          <label>
            Altered
            <input
              name="altered-field"
              type="checkbox"
              //dynamic value
              checked={this.state.alteredvalue}
              onChange={this.handleChange}
            />
          </label>
          <br />
        </form>
      </div>
    );
  }
}
