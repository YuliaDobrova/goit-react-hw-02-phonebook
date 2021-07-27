import React, { Component } from "react";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";

class App extends Component {
  state = {
    contacts: [{ name: "Tanya Petrukhnova", number: "050-699-28-68" }],
    filter: "",
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    this.setState({ contacts: contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  addContact = (contact) => {
    const addingContact = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (addingContact) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState((prev) => ({ contacts: [...prev.contacts, contact] }));
  };

  removeContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  filteredContacts = () => {
    if (this.state.contacts) {
      const lowerCaseContact = this.state.filter.toLowerCase();
      return this.state.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(lowerCaseContact)
      );
    }
    return;
  };

  onFilter = (value) => {
    this.setState({ filter: value });
  };

  render() {
    return (
      <>
        <h1 className="appHeading">Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2 className="appHeading">Contacts</h2>
        <Filter value={this.state.filter} onFilter={this.onFilter} />
        <ContactList
          contacts={this.filteredContacts()}
          addContact={this.addContact}
          removeContact={this.removeContact}
        />
      </>
    );
  }
}

export default App;
