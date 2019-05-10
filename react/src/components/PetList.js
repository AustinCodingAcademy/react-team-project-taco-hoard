import React, { Component } from "react";
import { Table } from 'reactstrap';

export default class PetsList extends Component {
  state = {
    pets: []
  };

  componentDidMount = () => {
    this.fetchPets();
  };

  fetchPets = async () => {
    const response = await fetch(`/api/pets`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const petsList = await response.json();
    this.setState({ pets: petsList });
    // this.showAllPets();
  };

  ShowAllPets = () => {
    var { pets } = this.state;
    return (
      <tbody>
        {pets.map(pet => (
          <tr>
            <td>
              {/* //  http://localhost:8080/pets/1 */}
              <a href={"pets/".concat(pet.id)}>{pet.id}</a>
            </td>
            <td>{pet.name}</td>
            <td>{pet.gender}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  render() {
    // need to create table and populate

    return (
      <Table hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
          </tr>
        </thead>

        <this.ShowAllPets />
      </Table>
    );
  }
}
