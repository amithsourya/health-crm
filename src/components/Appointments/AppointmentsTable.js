import React, { useState } from 'react';

function AppointmentsTable({ appointments, onEdit }) {
  const [patientFilter, setPatientFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const filteredAppointments = appointments.filter(app =>
    (patientFilter === '' || app.patient.toLowerCase().includes(patientFilter.toLowerCase())) &&
    (dateFilter === '' || app.date === dateFilter)
  );

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          marginBottom: '1rem',
          alignItems: 'center',
          background: '#f7fafc',
          padding: '0.8rem 1.2rem',
          borderRadius: '6px',
          border: '1px solid #e3e8ee',
          boxShadow: '0 1px 4px rgba(30, 64, 175, 0.04)'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <label style={{ fontWeight: 500, color: '#1976d2', fontSize: '0.97rem' }}>Patient</label>
          <input
            type="text"
            placeholder="Filter by patient"
            value={patientFilter}
            onChange={e => setPatientFilter(e.target.value)}
            style={{
              padding: '0.4rem 0.7rem',
              border: '1px solid #bfc9d1',
              borderRadius: '4px',
              fontSize: '1rem',
              minWidth: '160px',
              background: '#fff',
              outline: 'none',
              transition: 'border 0.2s'
            }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <label style={{ fontWeight: 500, color: '#1976d2', fontSize: '0.97rem' }}>Date</label>
          <input
            type="date"
            value={dateFilter}
            onChange={e => setDateFilter(e.target.value)}
            style={{
              padding: '0.4rem 0.7rem',
              border: '1px solid #bfc9d1',
              borderRadius: '4px',
              fontSize: '1rem',
              background: '#fff',
              outline: 'none',
              transition: 'border 0.2s'
            }}
          />
        </div>
      </div>
      <table className="module-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Date</th>
            <th>Time</th>
            <th>Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map(app => (
            <tr key={app.id}>
              <td>{app.patient}</td>
              <td>{app.date}</td>
              <td>{app.time}</td>
              <td>{app.type}</td>
              <td>{app.status}</td>
              <td>
                <button
                  className="secondary-btn"
                  style={{
                    minHeight: '32px',
                    padding: '0.4rem 1.1rem',
                    borderRadius: '4px',
                    fontWeight: 500,
                    fontSize: '0.97rem',
                    color: '#1976d2',
                    border: '1.5px solid #1976d2',
                    background: '#fff',
                    cursor: 'pointer',
                    transition: 'background 0.2s, color 0.2s, border 0.2s'
                  }}
                  onClick={() => onEdit(app)}
                  onMouseOver={e => {
                    e.currentTarget.style.background = '#e3f0fc';
                    e.currentTarget.style.color = '#125ea2';
                    e.currentTarget.style.borderColor = '#125ea2';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = '#fff';
                    e.currentTarget.style.color = '#1976d2';
                    e.currentTarget.style.borderColor = '#1976d2';
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AppointmentsTable;
