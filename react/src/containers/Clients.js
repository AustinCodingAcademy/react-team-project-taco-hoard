import React, { Component } from 'react';
import AddClientForm from '../components/AddClientForm';
import ClientList from '../components/ClientList';

export default class Clients extends Component {
  state = {
    'clients': []
  }

  componentDidMount = async () => {
    const response = await fetch('/api/clients', { method: 'GET' });
    const clients = await response.json();
    this.setState({ 'clients': clients })
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
    const response = await fetch('/api/clients');
    const clients = await response.json();
    this.setState({ 'clients': clients });
  }

  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-8">
            <div className="card border-0 shadow-sm">
              <div className="card-header">
                <h1>Clients</h1>
              </div>
              <div className="card-body">  
                <ClientList />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card border-0 shadow-sm">
              <div className="card-header">
                <h2>Add a New Client</h2>
              </div>
              <div className="card-body">
                <AddClientForm addClient={this.addClient} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}