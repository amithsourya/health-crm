import React, { useState, useEffect } from 'react';
import '../Module.css';
import PatientTable from './PatientTable';
import PatientModal from './PatientModal';

function Patients() {
  const defaultPatients = [
    {
      name: 'Amith Sourya',
      dob: '1947-08-15',
      contact: '555-987-6542',
      email: 'amith@gmail.com',
      lastVisit: new Date().getFullYear()+'-04-20',
      status: 'Inactive'
    },
    {
      name: 'Jane Doe',
      dob: '1990-05-12',
      contact: '555-123-4567',
      email: 'jane@example.com',
      lastVisit: new Date().getFullYear()+'-05-01',
      status: 'Active'
    },
    {
      name: 'John Smith',
      dob: '1985-11-23',
      contact: '555-987-6543',
      email: 'john@example.com',
      lastVisit: new Date().getFullYear()+'-04-20',
      status: 'Inactive'
    }
  ];

  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem('patients');
    return saved ? JSON.parse(saved) : defaultPatients;
  });
  const [showModal, setShowModal] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: '',
    dob: '',
    contact: '',
    email: '',
    lastVisit: '',
    status: 'Active'
  });
  const [editIndex, setEditIndex] = useState(null);
  const [filterName, setFilterName] = useState('');
  const [filterContact, setFilterContact] = useState('');

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const handleOpenModal = () => {
    setNewPatient({
      name: '',
      dob: '',
      contact: '',
      email: '',
      lastVisit: '',
      status: 'Active'
    });
    setEditIndex(null);
    setShowModal(true);
  };

  const handleEditPatient = (idx) => {
    setNewPatient({ ...patients[idx] });
    setEditIndex(idx);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSavePatient = () => {
    if (editIndex !== null) {
      // Edit mode
      const updated = [...patients];
      updated[editIndex] = newPatient;
      setPatients(updated);
    } else {
      // Add mode
      setPatients([...patients, newPatient]);
    }
    setShowModal(false);
    setEditIndex(null);
  };

  const filteredPatients = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(filterName.toLowerCase()) &&
      p.contact.toLowerCase().includes(filterContact.toLowerCase())
  );

  return (
    <section
      className="Module"
      style={{
        width: '70vw',
        maxWidth: '1100px',
        margin: '2rem auto',
        boxSizing: 'border-box'
      }}
    >
      <h2 style={{ marginTop: '1rem' }}>Patients</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Filter by name"
          value={filterName}
          onChange={e => setFilterName(e.target.value)}
          style={{
            padding: '0.5em',
            borderRadius: '5px',
            border: '1px solid #bdbdbd',
            fontSize: '1em',
            minWidth: '180px'
          }}
        />
        <input
          type="text"
          placeholder="Filter by contact"
          value={filterContact}
          onChange={e => setFilterContact(e.target.value)}
          style={{
            padding: '0.5em',
            borderRadius: '5px',
            border: '1px solid #bdbdbd',
            fontSize: '1em',
            minWidth: '180px'
          }}
        />
        <button
          className="primary-btn"
          style={{ marginLeft: 'auto', marginBottom: 0 }}
          onClick={handleOpenModal}
        >
          Add Patient
        </button>
      </div>
      <PatientTable patients={filteredPatients} onEdit={handleEditPatient} />
      <PatientModal
        show={showModal}
        newPatient={newPatient}
        onChange={handleInputChange}
        onSave={handleSavePatient}
        onCancel={handleCloseModal}
        requiredFields={['name', 'contact']}
        isEdit={editIndex !== null}
      />
    </section>
  );
}

export default Patients;