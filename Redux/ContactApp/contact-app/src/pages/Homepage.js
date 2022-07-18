import Form from "../components/Form";
import ContactList from "../components/ContactList";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { contactSelectors } from "../redux/contact/contactSlice";

function Homepage() {
  const contactLength = useSelector(contactSelectors.selectTotal);

  return (
    <>
      <Header text={`Contacts (${contactLength})`} />
      <Form />
      <ContactList />
    </>
  );
}

export default Homepage;
