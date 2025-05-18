import React from 'react';
import './Module.css';
// If you import Patients here, update the import as follows:
// import Patients from './Patients/Patients';

function Dashboard() {
  return (
    <section className="Module">
      <h2>Dashboard</h2>
      <div className="dashboard-widgets">
        <div className="widget">
          <h3>Total Patients</h3>
          <p style={{ color: '#1976d2', fontWeight: 'bold', fontSize: '1.5em' }}>1,234</p>
        </div>
        <div className="widget">
          <h3>Upcoming Appointments</h3>
          <p style={{ color: '#388e3c', fontWeight: 'bold', fontSize: '1.5em' }}>12</p>
        </div>
        <div className="widget">
          <h3>Active Campaigns</h3>
          <p style={{ color: '#fbc02d', fontWeight: 'bold', fontSize: '1.5em' }}>3</p>
        </div>
      </div>
      <div className="dashboard-summary">
        <h4>Welcome to Wellspring Nexus</h4>
        <p
          style={{
            color: '#444',
            fontSize: '1.08rem',
            marginTop: '0.5rem',
            marginBottom: 0,
            lineHeight: 1.6,
            background: '#f7fafc',
            padding: '0.9rem 1.2rem',
            borderRadius: '6px',
            border: '1px solid #e3e8ee'
          }}
        >
          This dashboard gives you a quick overview of your health CRM activity. Use the navigation above to manage patients, appointments, campaigns, and more.
        </p>
      </div>
    </section>
  );
}

export default Dashboard;
