import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactsList from "./Contacts";
import Filter from "./Filter";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) ?? []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handelCheckUniqContact = (name) => {
    const isContact = contacts.find((contact) => contact.name === name);
    return isContact && alert(`${name} is already in contact`);
  };

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const handleFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleRemove = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const visibleContacts = getVisibleContacts();
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm
        onAddContact={addContact}
        onCheckUniq={handelCheckUniqContact}
      />

      <h2>Contacts</h2>

      <Filter value={filter} onChange={handleFilter} />
      <ContactsList contacts={visibleContacts} onRemove={handleRemove} />
    </div>
  );
}

export default App;
