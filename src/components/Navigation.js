import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const navLinkStyle = {
  color: '#1976d2',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '1.08rem',
  padding: '0.35em 1.1em',
  borderRadius: '6px',
  transition: 'background 0.18s, color 0.18s',
  margin: '0 0.1em',
  display: 'inline-block'
};

const activeStyle = {
  background: '#e3f0fc',
  color: '#125ea2',
  fontWeight: 700
};

function Navigation() {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const { deltaY } = event;
      navRef.current.scrollLeft += deltaY;
    };

    const node = navRef.current;
    node.addEventListener('wheel', handleScroll);

    return () => {
      node.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1450px',
      margin: '0 auto',
      padding: '0.7rem 2.5rem 1.2rem 2.5rem',
      boxSizing: 'border-box',
      gap: '2.5rem'
    }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '100%',
          minHeight: '64px'
        }}
      >
        <img
          src="https://i.pinimg.com/474x/85/95/f4/8595f4b711e503bc72fe396e5043e0c2.jpg"
          alt="Healthcare Logo"
          style={{
            width: '60px',
            height: '60px',
            marginRight: '1.1rem',
            display: 'inline-block',
            verticalAlign: 'middle',
            flexShrink: 0
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1
            style={{
              color: '#1976d2',
              margin: 0,
              fontSize: '2.3rem',
              letterSpacing: '1.2px',
              fontWeight: 700,
              lineHeight: 1.1,
              whiteSpace: 'nowrap'
            }}
          >
            Wellspring Nexus
          </h1>
          <div
            style={{
              color: '#1976d2',
              fontWeight: 500,
              fontSize: '1.15rem',
              letterSpacing: '0.5px',
              marginTop: '0.15rem',
              marginBottom: 0,
              lineHeight: 1.2,
              whiteSpace: 'nowrap'
            }}
          >
            Health CRM Platform
          </div>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          minWidth: 0
        }}
      >
        <nav
          ref={navRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            overflowX: 'auto',
            width: 'fit-content',
            minWidth: 0,
            whiteSpace: 'nowrap',
            scrollbarWidth: 'thin',
            scrollbarColor: '#b2dfdb #f7fafc',
            msOverflowStyle: 'auto',
            WebkitOverflowScrolling: 'touch',
            cursor: 'grab',
            maxWidth: '100vw',
            marginLeft: 'auto' // This aligns the nav to the right
          }}
          tabIndex={0}
        >
          <NavLink
            to="/"
            end
            style={({ isActive }) =>
              isActive
                ? { ...navLinkStyle, ...activeStyle }
                : navLinkStyle
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/patients"
            style={({ isActive }) =>
              isActive
                ? { ...navLinkStyle, ...activeStyle }
                : navLinkStyle
            }
          >
            Patients
          </NavLink>
          <NavLink
            to="/appointments"
            style={({ isActive }) =>
              isActive
                ? { ...navLinkStyle, ...activeStyle }
                : navLinkStyle
            }
          >
            Appointments
          </NavLink>
          <NavLink
            to="/campaigns"
            style={({ isActive }) =>
              isActive
                ? { ...navLinkStyle, ...activeStyle }
                : navLinkStyle
            }
          >
            Campaigns
          </NavLink>
          <NavLink
            to="/reports"
            style={({ isActive }) =>
              isActive
                ? { ...navLinkStyle, ...activeStyle }
                : navLinkStyle
            }
          >
            Reports
          </NavLink>
          <NavLink
            to="/settings"
            style={({ isActive }) =>
              isActive
                ? { ...navLinkStyle, ...activeStyle }
                : navLinkStyle
            }
          >
            Settings
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
