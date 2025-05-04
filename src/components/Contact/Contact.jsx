import React from 'react';
import User from '../Icons/User.jsx';
import PhoneCall from '../Icons/PhoneCall.jsx';

const Contact = ({ id, name, number, deleteContact }) => (
  <li>
    <div className="info">
      <div className="row">
        <User />
        <p>{name}</p>
      </div>
      <div className="row">
        <PhoneCall />
        {number}
      </div>
    </div>
    <div className="actions">
      <button onClick={deleteContact(id)}>Delete</button>
    </div>
  </li>
);

export default Contact;
