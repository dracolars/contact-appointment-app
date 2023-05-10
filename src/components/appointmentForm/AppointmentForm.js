import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Appointment Title"
        required
      />
      <br />
      <label htmlFor="contact">Contact:</label>
      <select
        type="select"
        id="contact"
        name="contact"
        value={contact}
        placeholder="Contact"
        onChange={(e) => setContact(e.target.value)}
        required
      >
        <option value=""></option>
        {contacts.map((contact, index) => {
          return (
            <option key={index} value={contact.name}>
              {contact.name}
            </option>
          );
        })}
      </select>
      <br />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
        required
      />
      <br />
      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
};
