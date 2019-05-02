import React, { Component } from 'react'

export default class AddClientForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.addClient}>
        <label>
          name
          <input name="name" />
        </label>
        <label>
          address
          <input name="address" />
        </label>
        <label>
          phone number
          <input name="phoneNumber" />
        </label>
        <input type="submit"/>
      </form>
    )
  }
}