import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact, addContacts } from "../redux/contact/contactSlice";
import { nanoid } from "@reduxjs/toolkit";

function Form() {
  const [contact, setContact] = useState({ name: "", phoneNumber: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contact.name === "" || contact.phoneNumber === "") return false;
    dispatch(addContact({ id: nanoid(), contact }));

    setContact({ name: "", phoneNumber: "" });
  };

  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter name"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
        <input
          type="number"
          name="phoneNumber"
          className="form-control my-2"
          placeholder="Enter phone number"
          value={contact.phoneNumber}
          onChange={(e) =>
            setContact({ ...contact, phoneNumber: e.target.value })
          }
        />

        <button className="btn btn-primary w-100">Add</button>
      </form>
    </div>
  );
}

export default Form;
