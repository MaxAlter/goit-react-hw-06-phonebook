import React from "react";
import List from "./list";
import { CSSTransition } from "react-transition-group";
import slideStyle from "../../transition/slide.module.css";

const ContactListItems = ({ item }) => (
  <>
    <CSSTransition
      in
      timeout={250}
      classNames={slideStyle}
      key={item.id}
      unmountOnExit
    >
      <li>
        <List {...item} />
      </li>
    </CSSTransition>
  </>
);

export default ContactListItems;
