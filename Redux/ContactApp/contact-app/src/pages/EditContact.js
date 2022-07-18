import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { contactSelectors, updateContact } from "../redux/contact/contactSlice";
import Header from "../components/Header";

function EditContact() {
  const { id } = useParams();
  let navigate = useNavigate();

  const contactInfo = useSelector((state) =>
    contactSelectors.selectById(state, id)
  );

  const dispatch = useDispatch();
  const [contact, setContact] = useState(contactInfo.contact);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contact.name === "" || contact.phoneNumber === "") return false;
    dispatch(
      updateContact({
        id: contactInfo.id,
        changes: {
          contact: {
            name: contact.name,
            phoneNumber: contact.phoneNumber,
          },
        },
      })
    );

    navigate("/");
  };

  return (
    <>
      <Header text={`Edit Added Contact`} />
      <div className="mx-auto">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter name"
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            value={contact.name}
          />
          <input
            type="number"
            name="phoneNumber"
            className="form-control my-2"
            placeholder="Enter phone number"
            onChange={(e) =>
              setContact({ ...contact, phoneNumber: e.target.value })
            }
            value={contact.phoneNumber}
          />

          <button className="btn btn-success w-100">Edit Added Contact</button>
        </form>
      </div>
    </>
  );
}

export default EditContact;
