import './App.css';
import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import ContactCard from "./ContactCard.js";
import AddContact from './AddContact.js';

function App() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [contactList, setContactList] = useState([]);


  // Functions used to setState when AddContact opens and closes onClick
  
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onAddContact = (newContact) => {
    setContactList([...contactList, newContact]);
    setModalOpen(false);
  };

  return(
    <Router>
      <div className="flex-container">
        <div className="addContactButton">
          <button onClick={openModal}>Add Contact</button>

          {isModalOpen && (
            <AddContact onClose={closeModal} onAddContact={onAddContact}>
              <AddContact />
            </AddContact>
          )}

          {/* Other components/routes */}
        </div>
        <div className="contactList">
          {contactList.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))}

        </div>
      </div>
    </Router>
  );
}

export default App;
