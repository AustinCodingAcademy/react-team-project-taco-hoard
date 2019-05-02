import React, { Component } from 'react';
import AddClientForm from '../components/AddClientForm';
import ClientList from '../components/ClientList';

export default class Clients extends Component {
  state = {
    message: ''
  }
  addClient = async (e) => {
    e.preventDefault();
    console.log('name', e.target.elements.name.value)
    console.log('address', e.target.elements.address.value)
    console.log('phoneNumber', e.target.elements.phoneNumber.value)

    await fetch('/api/clients', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": e.target.elements.name.value,
        "address" : e.target.elements.address.value,
        "phoneNumber": e.target.elements.phoneNumber.value
      })
    });

    this.setState({ message: 'Added Client!!' })
  }

  render() {
    return (
      <div>
        <h1>Add A Client</h1>
        <AddClientForm addClient={this.addClient} />
        <h3>{this.state.message}</h3>
      </div>
    )
  }
}