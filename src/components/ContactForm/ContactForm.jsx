import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import {
  Container,
  ContactFild,
  ContactLabel,
  ButtonSub,
} from "./ContactForm.styled";

function ContactForm({ onAddContact, onCheckUniq }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    event.currentTarget.name === "name" && setName(event.currentTarget.value);
    event.currentTarget.name === "number" &&
      setNumber(event.currentTarget.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    onCheckUniq();
    onAddContact(contact);

    setName("");
    setNumber("");
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <Container>
          <ContactLabel>
            Name
            <ContactFild
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </ContactLabel>
          <ContactLabel>
            Number
            <ContactFild
              type="tel"
              name="number"
              placeholder="Enter number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </ContactLabel>
        </Container>

        <ButtonSub type="submit">Add contact</ButtonSub>
      </form>
    </div>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  onCheckUniq: PropTypes.func.isRequired,
};
