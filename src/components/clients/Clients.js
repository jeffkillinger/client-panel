import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render() {
    const clients = [
      {
      id: '239487298734',
      firstName: 'Kevin',
      lastName: 'Johnson',
      email: 'Kevbaby@gmail.com',
      phone: '454-454-4545',
      balance: '30'
      },
      {
    id: '3454345234566',
    firstName: 'Alia',
    lastName: 'Loverpseron',
    email: 'Aweea@gmail.com',
    phone: '434-444-4245',
    balance: '78'
  }];

      if(clients) {
        return (
          <div>
            <div className="row">
              <div className="col-md-6">
                <h2>
                  <i className="fas fa-users" /> Clients
                </h2>
              </div>
              <div className="col-md-6">
                Balance go here
              </div>
            </div>

            <table className="table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Balance</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {clients.map(client => (
                  <tr key={client.id}>
                    <td>{client.firstName} {client.lastName}</td>
                    <td>{client.email}</td>
                    <td>${parseFloat(client.balance).toFixed(2)}</td>
                    <td>
                      <Link to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                      >
                        <i class="fas fa-arrow-circle-right" />Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      } else {
        return <h1>Loading...</h1>
      }
  }
}

export default Clients;
