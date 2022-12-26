import { contacts } from "./contacts-info";
import React, { Component } from "react";
import Contact from "./Contact.js";
import "./contacts-style.css";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: contacts,
    };
  }

  handleSearchChange = (event) => {
    const { value } = event.target;

    if (!value.trim()) {
      return this.setState({ people: contacts });
    }

    const filterContacts = this.state.people.filter((el) =>
      `${el.firstName} ${el.lastName} ${el.phone}`
        .toLowerCase()
        .includes(value.toLowerCase())
    );

    this.setState({ people: filterContacts });
  };

  render() {
    return (
      <div className="contacts-container">
        <h1>CONTACTS</h1>
        <input
          className="search"
          placeholder="Search"
          onChange={this.handleSearchChange}
        />
        {this.state.people.map((elems) => (
          <Contact {...elems} />
        ))}
      </div>
    );
  }
}
export default Contacts;
