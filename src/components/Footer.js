import React from 'react';

function Footer() {
  return (
    <footer style={{
      width: '100%',
      textAlign: 'center',
      padding: '1.2rem 0 1.2rem 0',
      background: 'rgba(255,255,255,0.95)',
      color: '#1976d2',
      fontWeight: 500,
      fontSize: '1rem',
      letterSpacing: '0.5px',
      borderTop: '1px solid #e3e8ee',
      marginTop: '2rem'
    }}>
      &copy; {new Date().getFullYear()} by Amith Sourya Sadineni &nbsp;|&nbsp;
      <a href="https://github.com/amithsourya/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>
        GitHub
      </a>
      &nbsp;|&nbsp;
      <a href="https://www.linkedin.com/in/amith-sourya-sadineni/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>
        LinkedIn
      </a>
      &nbsp;|&nbsp;
      <span style={{ color: '#1976d2' }}>Contact: +91.9390174226</span>
    </footer>
  );
}

export default Footer;
