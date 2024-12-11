import React from 'react';
import { Button } from 'react-bootstrap';
import './OrdersTable.css';

const OrdersTable = () => {
  const orders = [
    { id: 1, customer: 'Jane Cooper', fulfillment: 'Vettel', phone: '(223) 555-0118', email: 'jane@microsoft.com', address: 'United States', status: 'Complete' },
    { id: 2, customer: 'Floyd Miles', fulfillment: 'GHTK', phone: '(205) 555-0100', email: 'floyd@yahoo.com', address: 'Kiribati', status: 'Cancel' },
    { id: 3, customer: 'Ronald Richards', fulfillment: 'GHTK', phone: '(302) 555-0107', email: 'ronald@adobe.com', address: 'Israel', status: 'Cancel' },
    { id: 4, customer: 'Marvin McKinney', fulfillment: 'Vettel', phone: '(252) 555-0126', email: 'marvin@tesla.com', address: 'Iran', status: 'Complete' },
    { id: 5, customer: 'Jerome Bell', fulfillment: 'GHN', phone: '(629) 555-0129', email: 'jerome@google.com', address: 'Réunion', status: 'Complete' }
  ];

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h2>All Orders</h2>
        <div className="orders-actions">
          <div className="search-container">
            <input type="text" placeholder="Search" />
          </div>
          <select defaultValue="newest">
            <option value="newest">Sort by: Newest</option>
            <option value="oldest">Sort by: Oldest</option>
          </select>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Fulfillment</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.customer}</td>
                <td>{order.fulfillment}</td>
                <td>{order.phone}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>
                  <button className={`status-button ${order.status.toLowerCase()}`}>
                    {order.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        <div class="row align-items-center">
          <div class="col-md-6 text-start">
            <p class="text-muted">
              Showing data 1 to 8 of 256 entries
            </p>
          </div>
          <div class="col-md-6 text-md-end mt-3 mt-md-0">
            <div class="d-flex justify-content-md-end gap-2">
              <button class="btn btn-outline-secondary btn-sm">Previous</button>
              <button class="btn btn-outline-secondary btn-sm">1</button>
              <button class="btn btn-outline-secondary btn-sm">2</button>
              <button class="btn btn-outline-secondary btn-sm">3</button>
              <button class="btn btn-outline-secondary btn-sm">4</button>
              <button class="btn btn-outline-secondary btn-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;

