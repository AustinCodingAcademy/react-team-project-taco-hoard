import React, { Component } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

export default class ClientList extends Component {
  state = {
    clients: []
  };


  componentDidMount = () => {
    this.fetchClients();
  };

  fetchClients = async () => {
    const response = await fetch(`/api/clients`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });


    const clientsList = await response.json();
    this.setState({ clients: clientsList });
    // this.showAllPets();
  };


  navigate = function(e) {
    e.preventDefault();
    console.log("Client ID", e.target);
    // href={"pets/".concat(pet.id)}
    return false;
  };


  ShowAllClients = () => {
    var { clients } = this.state;
    return (
      <tbody>
        {clients.map(client => (
          <tr>
            <td>
              {/* page get reloaded page redirect is done thru an anchor. A work-around here
                  https://stackoverflow.com/questions/18605563/href-must-not-reload

                http://localhost:8080/pets/1 //{" "}
              
               <a href="#" data-petid={pet.id} onClick={this.navigate}>{pet.id}</a> Yousiff's code
              <a href={"pets/".concat(pet.id)}>{pet.id}</a> - my code
              */}
              <Link to={`clients/${client.id}`}>{client.id}</Link>
            </td>
            <td>{client.name}</td>
            <td>{client.address}</td>
          </tr>
        ))}
      </tbody>
    );
  };


  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>

        <this.ShowAllClients />
      </Table>

      // <ul>
      //   {
      //      this.props.clients.map(client => <li key={client.id} >{client.name} <a href="#">delete</a></li>)
      //   }
      // </ul>
    );
  }
}

