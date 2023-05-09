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
  { name: "Mangy Pup", phone: "(555) 222 4141", email: "mangy@puppy.com" },
];

const initialAppointments = [
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

  function handleAddAppointment(name, contact, date, time) {
    let newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time,
    };
    setAppointments((prev) => [...prev, newAppointment]);
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
            /> /* Add props to ContactsPage */
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              addAppointment={handleAddAppointment}
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
