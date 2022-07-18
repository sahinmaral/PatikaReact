import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contact/contactSlice";
import {Link} from 'react-router-dom'

function ContactItem({ contact,id }) {
  const dispatch = useDispatch();

  return (
    <div className="card my-3">
      <div className="card-body d-flex justify-content-between">
        <div className="contact-infos d-flex justify-content-between">
          <p>{contact.name}</p>
          <p>{contact.phoneNumber}</p>
        </div>

        <div className="contact-process">
          <Link className="btn btn-warning" to={`/contact/${id}`}>Edit</Link>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(deleteContact(id))}
          >
            <span>X</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactItem;
