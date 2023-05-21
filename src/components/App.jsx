import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactsList from "./Contacts";
import Filter from "./Filter";

export default function App() {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');


  
useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
},[contacts])
  
  const addContact = (contact) => {
   setContacts([...contacts, contact])
  
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const handelCheckUniqContact = (name) => {
    const isContact = contacts.find((contact) => contact.name === name);
    return (isContact && alert(`${name} is already in contact`));
  };

  const handleRemove = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id),
    );
  };
 
  const getVisibleContacts = () => {
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

    // const visibleContacts = getVisibleContacts();


    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm
          onAddContact={addContact}
          onCheckUniq={handelCheckUniqContact}
        />

        <h2>Contacts</h2>

        <Filter value={filter} onChange={handleFilter} />
        <ContactsList contacts={getVisibleContacts} onRemove={handleRemove} />
      </div>
    );

}

