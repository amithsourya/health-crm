import React from 'react';
import './Module.css';

function Settings() {
  return (
    <section className="Module">
      <h2>Settings</h2>
      <form className="settings-form enhanced-settings-form">
        <div className="form-group">
          <label htmlFor="notification-email">Notification Email</label>
          <input id="notification-email" type="email" placeholder="your@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="timezone">Timezone</label>
          <select id="timezone">
            <option>UTC</option>
            <option>IST</option>
            <option>PST</option>
            <option>EST</option>
          </select>
        </div>
        <div className="form-group switch-group">
          <label htmlFor="sms-reminders">Enable SMS Reminders</label>
          <label className="switch">
            <input id="sms-reminders" type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <button className="primary-btn" type="submit">Save Settings</button>
      </form>
    </section>
  );
}

export default Settings;
