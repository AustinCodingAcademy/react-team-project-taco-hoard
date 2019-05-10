import React, { Component } from "react";
import { Table } from 'reactstrap';
import { Link } from "react-router-dom"

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

  navigate = function(e) {
    e.preventDefault();
    console.log("Pet ID", e.target);
    // href={"pets/".concat(pet.id)}
    return false;
  };

  ShowAllPets = () => {
    var { pets } = this.state;
    return (
      <tbody>
        {pets.map(pet => (
          <tr>
            <td>
              {/* page get reloaded page redirect is done thru an anchor. A work-around here
                  https://stackoverflow.com/questions/18605563/href-must-not-reload

                http://localhost:8080/pets/1 //{" "}
              
               <a href="#" data-petid={pet.id} onClick={this.navigate}>{pet.id}</a> Yousiff's code
              <a href={"pets/".concat(pet.id)}>{pet.id}</a> - my code
              */}
              <Link to={`pets/${pets.id}`}>{pet.id}</Link>
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
