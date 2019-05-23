import React from "react";
import AddPetsForm from "./AddPetsForm";

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
      clientnamevalue: "",
      addressvalue: "",
      phonenumbervalue: "",
      clientidvalue: 0,
      responseStatus: 0
    };
  }
  handleDelete = props => {
    console.log("Client was succesfully removed");
    fetch(`/api/clients/${this.props.match.params.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('JWT_TOKEN')}`
      }
    });

    this.props.history.push("/clients");
  };

  handleCancel = async () => {
    console.log("form was succesfully cancelled");
    this.props.history.push("/clients");
  };

  showAddPetForm = () => {
    //  this.props.history.push("/addpet");
    this.props.history.push("/addpet", { clientid: this.state.clientidvalue });
    // return <AddPetsForm data={this.state} />;
  };

  handleSubmit = async () => {
    const response = await fetch(`/api/clients`, {
      method: "PUT",
      body: JSON.stringify({
        id: this.state.clientidvalue,
        name: this.state.clientnamevalue,
        address: this.state.addressvalue,
        phoneNumber: this.state.phonenumbervalue
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('JWT_TOKEN')}`
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
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('JWT_TOKEN')}`
      }
    });
    const client = await response.json();

    this.setState({ editclientdata: client });

    this.setState({
      clientidvalue: this.state.editclientdata.id,
      clientnamevalue: this.state.editclientdata.name,
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
      <div className="container py-5">
        <div className="card">
          <div className="card-header d-flex align-items-center">
            <h1>{this.state.clientnamevalue}</h1>

            <input className="btn btn-danger ml-auto mr-2" type="button" value="Delete" onClick={this.handleDelete} />
            <input className="btn btn-primary" type="button" value="Add Pet" onClick={this.showAddPetForm} />
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              {/* Pet Id field */}
              <div className="form-group">
                <label for="client-id">Client ID:</label>
                <input className="form-control" id="client-id" name="client-id-field" type="text" value={this.state.clientidvalue} />
              </div>
              {/* Client Name field */}
              <div className="form-group">
                <label for="client-name">Client Name:</label>
                <input className="form-control" id="client-name" name="name-field" type="text" value={this.state.clientnamevalue} onChange={e => this.setState({ clientnamevalue: e.target.value })}/>
              </div>
              {/* Gender field */}
              <div className="form-group">
                <label for="client-address">Address</label>
                <input className="form-control" id="client-address" name="address-field" type="text" value={this.state.addressvalue} onChange={e => this.setState({ addressvalue: e.target.value })}/>
              </div>
              {/* Altered field */}
              <div className="form-group">
                <label for="client-phone">Phone Number</label>
                <input className="form-control" id="client-phone" name="phoneNumber-field" type="text" value={this.state.phonenumbervalue}
                    onChange={e =>
                      this.setState({ phonenumbervalue: e.target.value })
                    }
                  />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <input className="btn btn-success mr-2" type="submit" value="Save" onClick={this.handleSubmit} />
            <input className="btn btn-secondary mr-2" type="button" value="Cancel" onClick={this.handleCancel} />
          </div>
        </div>
      </div>
    );
  }
}
