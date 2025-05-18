import React from 'react';

function PatientTable({ patients, onEdit }) {
  // Custom scrollbar style
  const scrollStyle = {
    maxWidth: 160,
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'thin',
    scrollbarColor: '#cccccc #f5f5f5'
  };
  const scrollStyleContact = {
    maxWidth: 140,
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'thin',
    scrollbarColor: '#cccccc #f5f5f5'
  };
  const scrollStyleEmail = {
    maxWidth: 200,
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'thin',
    scrollbarColor: '#cccccc #f5f5f5'
  };

  return (
    <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
      <table className="module-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Last Visit</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, idx) => (
            <tr key={idx}>
              <td>
                <div
                  style={scrollStyle}
                  className="scrollable-cell"
                >
                  {patient.name}
                </div>
              </td>
              <td>{patient.dob}</td>
              <td>
                <div
                  style={scrollStyleContact}
                  className="scrollable-cell"
                >
                  {patient.contact}
                </div>
              </td>
              <td>
                <div
                  style={scrollStyleEmail}
                  className="scrollable-cell"
                >
                  {patient.email}
                </div>
              </td>
              <td>{patient.lastVisit}</td>
              <td>{patient.status}</td>
              <td>
                <button
                  className="primary-btn"
                  style={{ padding: '0.3em 1em', fontSize: '0.95em' }}
                  onClick={() => onEdit && onEdit(idx)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Add global CSS for custom scrollbars
const style = document.createElement('style');
style.innerHTML = `
.scrollable-cell::-webkit-scrollbar {
  height: 6px;
  background: transparent;
}
.scrollable-cell::-webkit-scrollbar-thumb {
  background: #e0e0e0;
  border-radius: 4px;
  min-width: 20px;
}
.scrollable-cell::-webkit-scrollbar-thumb:hover {
  background: #bdbdbd;
}
.scrollable-cell::-webkit-scrollbar-track {
  background: transparent;
}
`;
document.head.appendChild(style);

export default PatientTable;
