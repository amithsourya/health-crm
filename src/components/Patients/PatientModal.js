import React from 'react';

function PatientModal({ show, newPatient, onChange, onSave, onCancel, requiredFields = ['name', 'contact'], isEdit }) {
  if (!show) return null;
  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '2.5rem 2rem 2rem 2rem',
          borderRadius: '12px',
          minWidth: '350px',
          maxWidth: '95vw',
          boxShadow: '0 6px 32px rgba(0,0,0,0.18)',
          border: '1px solid #e0e0e0'
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: '#1976d2', letterSpacing: '0.5px' }}>
          {isEdit ? 'Edit Patient' : 'Add Patient'}
        </h3>
        <form
          onSubmit={e => { e.preventDefault(); onSave(); }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
            <label style={{ fontWeight: 500, minWidth: '90px', marginBottom: 0, textAlign: 'left' }}>
              Name:
              {requiredFields.includes('name') && <span style={{ color: 'red', marginLeft: 2 }}>*</span>}
            </label>
            <input
              type="text"
              name="name"
              value={newPatient.name}
              onChange={onChange}
              style={{
                flex: 1,
                padding: '0.5em',
                borderRadius: '5px',
                border: '1px solid #bdbdbd',
                fontSize: '1em'
              }}
              required={requiredFields.includes('name')}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
            <label style={{ fontWeight: 500, minWidth: '90px', marginBottom: 0, textAlign: 'left' }}>
              DOB:
              {requiredFields.includes('dob') && <span style={{ color: 'red', marginLeft: 2 }}>*</span>}
            </label>
            <input
              type="date"
              name="dob"
              value={newPatient.dob}
              onChange={onChange}
              style={{
                flex: 1,
                padding: '0.5em',
                borderRadius: '5px',
                border: '1px solid #bdbdbd',
                fontSize: '1em'
              }}
              required={requiredFields.includes('dob')}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
            <label style={{ fontWeight: 500, minWidth: '90px', marginBottom: 0, textAlign: 'left' }}>
              Contact:
              {requiredFields.includes('contact') && <span style={{ color: 'red', marginLeft: 2 }}>*</span>}
            </label>
            <input
              type="tel"
              name="contact"
              value={newPatient.contact}
              onChange={onChange}
              style={{
                flex: 1,
                padding: '0.5em',
                borderRadius: '5px',
                border: '1px solid #bdbdbd',
                fontSize: '1em'
              }}
              required={requiredFields.includes('contact')}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
            <label style={{ fontWeight: 500, minWidth: '90px', marginBottom: 0, textAlign: 'left' }}>
              Email:
              {requiredFields.includes('email') && <span style={{ color: 'red', marginLeft: 2 }}>*</span>}
            </label>
            <input
              type="email"
              name="email"
              value={newPatient.email}
              onChange={onChange}
              style={{
                flex: 1,
                padding: '0.5em',
                borderRadius: '5px',
                border: '1px solid #bdbdbd',
                fontSize: '1em'
              }}
              required={requiredFields.includes('email')}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
            <label style={{ fontWeight: 500, minWidth: '90px', marginBottom: 0, textAlign: 'left' }}>
              Last&nbsp;Visit:
              {requiredFields.includes('lastVisit') && <span style={{ color: 'red', marginLeft: 2 }}>*</span>}
            </label>
            <input
              type="date"
              name="lastVisit"
              value={newPatient.lastVisit}
              onChange={onChange}
              style={{
                flex: 1,
                padding: '0.5em',
                borderRadius: '5px',
                border: '1px solid #bdbdbd',
                fontSize: '1em'
              }}
              required={requiredFields.includes('lastVisit')}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
            <label style={{ fontWeight: 500, minWidth: '90px', marginBottom: 0, textAlign: 'left' }}>
              Status:
              {requiredFields.includes('status') && <span style={{ color: 'red', marginLeft: 2 }}>*</span>}
            </label>
            <select
              name="status"
              value={newPatient.status}
              onChange={onChange}
              style={{
                flex: 1,
                padding: '0.5em',
                borderRadius: '5px',
                border: '1px solid #bdbdbd',
                fontSize: '1em'
              }}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1em', marginTop: '1.2rem' }}>
            <button
              type="button"
              onClick={onCancel}
              style={{
                background: '#f5f5f5',
                color: '#333',
                border: '1px solid #bdbdbd',
                borderRadius: '5px',
                padding: '0.5em 1.5em',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background 0.2s',
                fontSize: '1em',
                height: '40px'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="primary-btn"
              style={{
                padding: '0.5em 1.5em',
                borderRadius: '5px',
                fontWeight: 500,
                fontSize: '1em',
                height: '40px'
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PatientModal;
