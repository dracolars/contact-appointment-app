import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  let contacts = props.contacts;

  const [name, setName] = useState("");
  useEffect(() => {
    let duplicateIndex = -1;
    if (contacts.length > 0) {
      duplicateIndex = contacts.findIndex((contact) => contact.name === name);
    }
    if (duplicateIndex !== -1) {
      setTimeout(() => {
        alert(
          "This is a duplicate name. Please consider changing before submitting."
        );
      }, 1000);
    }
  }, [name, contacts]);

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let duplicateIndex = -1;
    if (contacts.length > 0) {
      duplicateIndex = contacts.findIndex((contact) => contact.name === name);
    }
    if (duplicateIndex === -1) {
      props.addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    } else {
      alert("Name duplicate. Please choose a different name to save.");
    }
  };

  function handleRemove(name) {
    props.handleRemoveContact(name);
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts} handleRemove={handleRemove} />
      </section>
    </div>
  );
};
