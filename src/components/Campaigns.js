import React from 'react';
import './Module.css';

function Campaigns() {
  return (
    <section className="Module">
      <h2>Campaigns</h2>
      <table className="module-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Target</th>
            <th>Status</th>
            <th>Sent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spring Wellness</td>
            <td>Email</td>
            <td>All Patients</td>
            <td>Active</td>
            <td>2024-05-15</td>
          </tr>
          <tr>
            <td>Flu Shots</td>
            <td>SMS</td>
            <td>High Risk</td>
            <td>Completed</td>
            <td>2024-04-10</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Campaigns;
