import React from "react";

const ContactRow = ({ contact, setSelectedContactId }) => {
  const handleRowClick = () => {
    setSelectedContactId(contact.id);
  };

  return (
    <tr onClick={handleRowClick}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
};

export default ContactRow;
