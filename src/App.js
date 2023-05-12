import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

const initialContacts = [
  { name: "Mangy Pup", phone: "555 222 5555", email: "mangy@puppy.com" },
  { name: "Luigi's Pizza", phone: "555 222 7777", email: "luigi@pizzeria.com" },
];

const initialAppointments = [
  {
    name: "Dog Walking",
    contact: "Mangy Pup",
    date: "2023-05-17",
    time: "13:00",
  },
  {
    name: "Dog Grooming",
    contact: "Mangy Pup",
    date: "2023-05-25",
    time: "12:00",
  },
  {
    name: "Dog Walking",
    contact: "Mangy Pup",
    date: "2023-05-17",
    time: "13:00",
  },
  {
    name: "Dog Grooming",
    contact: "Mangy Pup",
    date: "2023-05-25",
    time: "12:00",
  },
  {
    name: "Dog Walking",
    contact: "Mangy Pup",
    date: "2023-05-17",
    time: "13:00",
  },
  {
    name: "Dog Grooming",
    contact: "Mangy Pup",
    date: "2023-05-25",
    time: "12:00",
  },
];

function App() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [contacts, setContacts] = useState(initialContacts);

  function handleAddContact(name, phone, email) {
    let newContact = { name: name, phone: phone, email: email };
    setContacts((prev) => [...prev, newContact]);
  }

  function handleRemoveContact(name) {
    console.log("you want to remove " + name);
    let removalIndex = contacts.findIndex((contact) => {
      return contact.name === name;
    });
    let newContacts = contacts.slice();
    newContacts.splice(removalIndex, 1);
    setContacts(newContacts);
  }

  function handleAddAppointment(name, contact, date, time) {
    let newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time,
    };
    setAppointments((prev) => [...prev, newAppointment]);
  }

  function handleRemoveAppointment(name, contact, date, time) {
    console.log(`you want to remove ${name} ${contact} ${date} ${time}`);
    let removalIndex = appointments.findIndex((appointment) => {
      return (
        appointment.name === name &&
        appointment.contact === contact &&
        appointment.date === date &&
        appointment.time === time
      );
    });
    console.log(removalIndex);
    //remove 1 from the previous array of appointments
    let newArray = appointments.slice();
    newArray.splice(removalIndex, 1);
    setAppointments(newArray);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              contacts={contacts}
              addContact={handleAddContact}
              handleRemoveContact={handleRemoveContact}
            /> /* Add props to ContactsPage */
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              addAppointment={handleAddAppointment}
              handleRemoveAppointment={handleRemoveAppointment}
              contacts={contacts}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
