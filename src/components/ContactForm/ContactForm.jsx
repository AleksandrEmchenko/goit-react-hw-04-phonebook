import React, { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import {
  Form,
  ContactFild,
  ContactLabel,
  ButtonSub,
} from "./ContactForm.styled";

// export default function ContactForm(onAddContact, onCheckUniq) {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");

//   const handleChange = (event) => {
//     event.currentTarget.name === "name"
//       ? setName(event.currentTarget.value)
//       : setNumber(event.currentTarget.value);
//   };

//   const contact = {
//     id: nanoid(),
//     name: name,
//     number: number,
//   };

//   const handleSubmitForm = (event) => {
//     event.preventDefault();
//     console.log(contact);
//     onCheckUniq({name});
//     onAddContact({contact});

//     setName("");
//     setNumber("");
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmitForm}>
//         <Form>
//           <ContactLabel>
//             Name
//             <ContactFild
//               type="text"
//               name="name"
//               placeholder="Enter name"
//               value={name}
//               onChange={handleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </ContactLabel>
//           <ContactLabel>
//             Number
//             <ContactFild
//               type="tel"
//               name="number"
//               placeholder="Enter number"
//               value={number}
//               onChange={handleChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </ContactLabel>
//         </Form>

//         <ButtonSub type="submit">Add contact</ButtonSub>
//       </form>
//     </div>
//   );
// }
export default class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onAddContact(contact);
    this.props.onCheckUniq(this.state.name);

    this.setState({
      name: "",
      number: "",
    });

  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <Form><ContactLabel>
            Name
            <ContactFild
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
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
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </ContactLabel>
          </Form>

          <ButtonSub type="submit">Add contact</ButtonSub>
              </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  onCheckUniq: PropTypes.func.isRequired,
};
