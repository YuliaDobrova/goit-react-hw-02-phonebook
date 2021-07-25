import React, { Component } from "react";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = (contact) => {
    this.setState((prev) => ({ contacts: [...prev.contacts, contact] }));
  };

  render() {
    return (
      <>
        <ContactForm addContact={this.addContact} />
        <ContactList />
      </>
    );
  }
}

export default App;
