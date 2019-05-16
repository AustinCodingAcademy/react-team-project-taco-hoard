import React from "react";

export default class UpdateClientForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editclientdata: {
        id: 0,
        name: "",
        address: "",
        phonenumber: ""
      },
      clientNamevalue: "",
      addressvalue: "",
      phonenumbervalue:"",
      clientidvalue: 0,
      responseStatus: 0
    };
  }
  handleDelete = props => {
    console.log("Client was succesfully removed");
    fetch(`/api/clients/${this.props.match.params.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    this.props.history.push("/clients");
  };

  handleChange = event => {
    console.log("Selected element " + event.target.name);

    if (event.target.name === "client-id-field") {
      this.setState({ clientidvalue: event.target.value });
      console.log("new value is " + event.target.value);
    } else if (event.target.name === "name-field") {
      this.setState({ clientNamevalue: event.target.value });
      console.log("new value is " + event.target.value);
    } else if (event.target.name === "phoneNumber-field") {
      this.setState({ phonenumbervalue: event.target.value });
      console.log("new value is " + event.target.value);
    } else if (event.target.name === "address-field") {
      this.setState({ addressvalue: event.target.value });
      console.log("new value is " + event.target.value);
    } 
  };

  handleCancel = async () => {
    console.log("form was succesfully cancelled");
    this.props.history.push("/clients");
  };

  handleSubmit = async () => {
    const response = await fetch(`/api/clients`, {
      method: "PUT",
      body: JSON.stringify({
        id: this.state.clientidvalue,
        name: this.state.clientNamevalue,
        address: this.state.addressvalue,
        phoneNumber: this.state.phonenumbervalue
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log(response);
    const statusCode = await response.status;
    console.log(statusCode);
    this.setState({ responseStatus: statusCode });

    //  this.props.history.push("/pets");
  };

  componentDidMount = async props => {
    // need to check how to dynamically pass the pet id
    const response = await fetch(`/api/clients/${this.props.match.params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const client = await response.json();

    this.setState({ editclientdata: client });

    this.setState({
      clientidvalue: this.state.editclientdata.id,
      clientNamevalue: this.state.editclientdata.name,
      addressvalue: this.state.editclientdata.address,
      phonenumbervalue: this.state.editclientdata.phoneNumber
    });
  };

  render() {
    const statusCode = this.state.responseStatus;

    if (statusCode !== 200 && statusCode !== 0) {
      return <div>Oops!! Something went wrong!!</div>;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Save" onClick={this.handleSubmit} />
          <input type="button" value="Cancel" onClick={this.handleCancel} />
          <input type="button" value="Delete" onClick={this.handleDelete} />
          <br />
          {/* Pet Id field */}
          <label>
            Client ID:
            <input
              name="client-id-field"
              type="text"
              value={this.state.clientidvalue}
              onChange={this.handleChange}
            />
          </label>
          <br />
          {/* Pet Name field */}
          <label>
            Client Name:
            <input
              name="name-field"
              type="text"
              value={this.state.clientNamevalue}
              // onChange="{e => this.setState({state.editpetdata.name: e.target.value })}"
              onChange={this.handleChange}
            />
          </label>
          <br />
          {/* Gender field */}
          <label>
            Address
            <input
              name="address-field"
              type="text"
              value={this.state.addressvalue}
              // onChange="{e => this.setState({state.editpetdata.name: e.target.value })}"
              onChange={this.handleChange}
            />

          </label>
          <br />

          {/* Altered field */}
          <label>
            Phone Number
            <input
              name="phoneNumber-field"
              type="text"
              value={this.state.phonenumbervalue}
              // onChange="{e => this.setState({state.editpetdata.name: e.target.value })}"
              onChange={this.handleChange}
            />
          </label>
          <br />
        </form>
      </div>
    );
  }
}

