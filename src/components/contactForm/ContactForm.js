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
  function addSpaces(initial) {
    let init = initial.replaceAll(" ", "").replace("-", "");
    init = init.replaceAll("(", "").replace(")", "");
    init = init.replaceAll(".", "");
    if (init.length > 10) {
      init = init.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
    } else if (init.length >= 7) {
      init = init.replace(/(\d{3})(\d{3})/, "$1 $2 ");
    } else if (init.length >= 4) {
      init = init.replace(/(\d{3})/, "$1 ");
    }

    setPhone(init);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Contact Name"
        required
      />
      <br />
      <label htmlFor="phone">Phone:</label>
      <input
        type="phone"
        id="phone"
        name="phone"
        value={phone}
        placeholder="555 555 5555"
        pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
        onChange={(e) => addSpaces(e.target.value)}
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
