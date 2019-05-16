import React, { Component } from "react";
import PetList from "../components/PetList";

export default class Pets extends Component {
  render() {
    return (
      <div className="container py-5">
        <div className="card">
          <div className="card-header">
            <h1>Pets</h1>
          </div>
          <div className="card-body">
            <PetList />
          </div>
        </div>      
      </div>
    );
  }
}
