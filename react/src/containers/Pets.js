import React, { Component } from "react";
import AddPetForm from '../components/AddPetForm';
import PetList from '../components/PetList';

export default class Pets extends Component {
  state = {
    pets: []
  };

  componentDidMount = () => {
    this.fetchPets();
  };

  fetchPets = async () => {
    const response = await fetch("/api/pets");
    const petsList = await response.json();
    this.setState({ pets: petsList });
    // this.showAllPets();
  };

  getPets = async e => {
    e.preventDefault(); // Don't refresh the browser
    // need to test api
    await fetch("/api/pets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.fetchPets();
  };

  ShowAllPets = () => {
    var { pets } = this.state;
    return (
      <tbody>
        {pets.map(pet => (
          <tr>
            <td>{pet.id}</td>
            <td>{pet.name}</td>
            <td>{pet.gender}</td>
          </tr>
        ))}
        ;
      </tbody>
    );
  };

  render() {
    return (
      <div>
        <h1>Pets</h1>
        <AddPetForm addPet={this.addPet} />
        <PetList pets={this.state.pets} />
      </div>
    );
  }
}

