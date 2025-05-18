import React, { useState, useEffect } from 'react';
import './Appointments.css';
import AppointmentsTable from './AppointmentsTable';
import AppointmentModal from './AppointmentModal';

const STORAGE_KEY = 'appointments_data';

const DEFAULT_APPOINTMENTS = [
  {
    id: 1,
    patient: 'Amith Sourya',
    date: new Date().getFullYear()+'-06-05',
    time: '3:00 PM',
    type: 'Check-up',
    status: 'Pending'
  },
  {
    id: 2,
    patient: 'Jane Doe',
    date: new Date().getFullYear()+'-06-10',
    time: '10:00 AM',
    type: 'Consultation',
    status: 'Confirmed'
  },
  {
    id: 3,
    patient: 'John Smith',
    date: new Date().getFullYear()+'-06-12',
    time: '2:00 PM',
    type: 'Follow-up',
    status: 'Pending'
  }
];

function Appointments() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editAppointment, setEditAppointment] = useState(null);
  const [appointments, setAppointments] = useState([]);

  // Load from localStorage on mount, fallback to default if empty or invalid
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setAppointments(parsed);
        } else {
          setAppointments(DEFAULT_APPOINTMENTS);
        }
      } catch {
        setAppointments(DEFAULT_APPOINTMENTS);
      }
    } else {
      setAppointments(DEFAULT_APPOINTMENTS);
    }
  }, []);

  // Save to localStorage on appointments change
  useEffect(() => {
    // Avoid saving empty array on first render if appointments is empty
    if (appointments.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
    }
  }, [appointments]);

  const handleAdd = () => {
    setEditAppointment(null);
    setModalOpen(true);
  };

  const handleEdit = (appointment) => {
    setEditAppointment({ ...appointment });
    setModalOpen(true);
  };

  const handleSave = (appointment) => {
    setAppointments(prev => {
      if (appointment.id) {
        // Edit existing
        return prev.map(a => a.id === appointment.id ? { ...appointment } : a);
      } else {
        // Add new
        const newId = prev.length > 0 ? Math.max(...prev.map(a => a.id || 0)) + 1 : 1;
        return [
          ...prev,
          { ...appointment, id: newId }
        ];
      }
    });
    setModalOpen(false);
  };

  return (
    <section className="Module">
      <h2>Appointments</h2>
      <button className="primary-btn" style={{marginBottom: '1rem'}} onClick={handleAdd}>
        Schedule Appointment
      </button>
      <AppointmentsTable
        appointments={appointments}
        onEdit={handleEdit}
      />
      <AppointmentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        appointment={editAppointment}
      />
    </section>
  );
}

export default Appointments;
