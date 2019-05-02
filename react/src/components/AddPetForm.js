import React, { Component } from 'react'

export default class AddPetForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.addPet}>
        <label>
          name
          <input name="name" />
        </label>
        <label>
          breed
          <input name="breed" />
        </label>
        <label>
          owner
          <input name="owner" />
        </label>
        <input type="submit"/>
      </form>
    )
  }
}