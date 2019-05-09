import React, { Component } from "react";
import PetList from "../components/PetList";

export default class Pets extends Component {
  render() {
    return (
      <div>
        <h1>Pets</h1>
        <PetList />
      </div>
    );
  }
}
