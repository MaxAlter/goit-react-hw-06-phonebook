import React from "react";
import List from "./list";
import style from "./ContactList.module.css";
import { CSSTransition } from "react-transition-group";
import slideStyle from "../../transition/slide.module.css";

const ContactList = ({ contacts, onDeleteList }) => {
  return (
    contacts.length > 0 && (
      <ul className={style.contactList}>
        {contacts.map((item) => (
          <li key={item.id}>
            <CSSTransition
              in
              timeout={250}
              classNames={slideStyle}
              key={item.id}
              unmountOnExit
            >
              <List {...item} onDeleteList={() => onDeleteList(item.id)} />
            </CSSTransition>
          </li>
        ))}
      </ul>
    )
  );
};

export default ContactList;
