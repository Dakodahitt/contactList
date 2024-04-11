import React, { useState } from "react";
import "./App.css";
import ContactList from "./ContactList";
import SelectedContact from "./SelectedContact"; // Import the SelectedContact component

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div className="App">
      {/* Conditionally render the selected contact view */}
      {selectedContactId ? (
        <SelectedContact contactId={selectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
}

export default App;