import React, { useState, useEffect } from 'react';

function AppointmentModal({ open, onClose, onSave, appointment }) {
  const [form, setForm] = useState({
    patient: '',
    date: '',
    time: '',
    type: '',
    status: ''
  });

  useEffect(() => {
    if (appointment) {
      setForm(appointment);
    } else {
      setForm({
        patient: '',
        date: '',
        time: '',
        type: '',
        status: ''
      });
    }
  }, [appointment, open]);

  if (!open) return null;

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave({ ...form, id: appointment ? appointment.id : undefined });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{appointment ? 'Edit' : 'Add'} Appointment</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <label style={{ minWidth: 80 }}>Patient</label>
              <input
                name="patient"
                placeholder="Patient"
                value={form.patient}
                onChange={handleChange}
                required
                style={{ flex: 1 }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <label style={{ minWidth: 80 }}>Date</label>
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                required
                style={{ flex: 1 }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <label style={{ minWidth: 80 }}>Time</label>
              <input
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
                style={{ flex: 1 }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <label style={{ minWidth: 80 }}>Type</label>
              <input
                name="type"
                placeholder="Type"
                value={form.type}
                onChange={handleChange}
                style={{ flex: 1 }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <label style={{ minWidth: 80 }}>Status</label>
              <input
                name="status"
                placeholder="Status"
                value={form.status}
                onChange={handleChange}
                style={{ flex: 1 }}
              />
            </div>
          </div>
          <div className="modal-actions">
            <button type="submit" className="primary-btn" style={{height: '40px'}}>
              Save
            </button>
            <button
              type="button"
              className="secondary-btn"
              style={{height: '40px', display: 'inline-flex', alignItems: 'center'}}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AppointmentModal;
