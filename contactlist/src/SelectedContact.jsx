import React from "react";

const SelectedContact = ({ contact }) => {
  // Check if contact exists before accessing its properties
  if (!contact) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  // Display contact details
  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
};

export default SelectedContact;