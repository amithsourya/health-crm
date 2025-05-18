import React from 'react';
import './Module.css';

function Reports() {
  return (
    <section className="Module">
      <h2>Reports</h2>
      <div className="reports-summary">
        <div className="report-card">
          <h4>Patient Engagement</h4>
          <p style={{
            color: '#388e3c',
            fontSize: '1.09rem',
            fontWeight: 500,
            margin: 0,
            letterSpacing: '0.2px',
            background: '#e3f0fb',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            boxShadow: '0 1.5px 6px rgba(56, 142, 60, 0.07)'
          }}>78% opened last campaign</p>
        </div>
        <div className="report-card">
          <h4>Appointment Adherence</h4>
          <p style={{
            color: '#388e3c',
            fontSize: '1.09rem',
            fontWeight: 500,
            margin: 0,
            letterSpacing: '0.2px',
            background: '#e3f0fb',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            boxShadow: '0 1.5px 6px rgba(56, 142, 60, 0.07)'
          }}>92% attended scheduled appointments</p>
        </div>
        <div className="report-card">
          <h4>Referral Sources</h4>
          <p style={{
            color: '#388e3c',
            fontSize: '1.09rem',
            fontWeight: 500,
            margin: 0,
            letterSpacing: '0.2px',
            background: '#e3f0fb',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            boxShadow: '0 1.5px 6px rgba(56, 142, 60, 0.07)'
          }}>Physician: 60%, Web: 30%, Other: 10%</p>
        </div>
      </div>
    </section>
  );
}

export default Reports;
