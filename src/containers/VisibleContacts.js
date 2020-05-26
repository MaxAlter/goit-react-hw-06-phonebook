import { connect } from "react-redux";
import ContactList from "../components/ContactList/contactList";

const getVisibylitiContacts = (contacts, filterName) => {
  return filterName
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      )
    : contacts;
};

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: getVisibylitiContacts(contacts.contacts, filter),
});

export default connect(mapStateToProps)(ContactList);
