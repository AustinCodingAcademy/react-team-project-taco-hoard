import React, { Component } from "react";

export default class ClientList extends Component {
  render() {
    return (
      <ul>
        {
          //  this.props.clients.map(client => <li key={client.id} >{client.name} <a href="#">delete</a></li>)
        }
      </ul>
    );
  }
}
