import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Firstname Lastname"
        required
      />
      <br />
      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={phone}
        placeholder="(333) 777 5555"
        pattern="[^]*\d{3}[^]*\d{3}[^]*\d{4}"
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        placeholder="contact@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
};
