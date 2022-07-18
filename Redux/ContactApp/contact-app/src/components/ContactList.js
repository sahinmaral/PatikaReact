import { contactSelectors,deleteAllContacts } from "../redux/contact/contactSlice";
import { useSelector,useDispatch } from "react-redux";
import ContactItem from "./ContactItem";

function ContactList() {
  const contacts = useSelector(contactSelectors.selectAll);
  const dispatch = useDispatch()

  return (
    <>
      {contacts.length > 0 && (
        <div className="my-2">
          <button className="btn" style={{ float: "right" }} onClick={()=>dispatch(deleteAllContacts())}>
            Delete All
          </button>
        </div>
      )}
      <div className="mx-auto mt-5">
        {contacts.map((item) => {
          return (
            <ContactItem key={item.id} contact={item.contact} id={item.id} />
          );
        })}
      </div>
    </>
  );
}

export default ContactList;
