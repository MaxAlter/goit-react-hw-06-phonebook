import React from "react";
import style from "./ContactList.module.css";
import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts }) => {
  return (
    <>
      {contacts.length > 0 && (
        <ul className={style.contactList}>
          {contacts.map((item) => (
            <ContactListItem item={item} key={item.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
