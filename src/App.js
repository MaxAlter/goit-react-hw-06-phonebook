import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";

import ContactForm from "./components/ContactForm/contactForm";
import VisibleContactList from "./containers/VisibleContacts";
import Filter from "./components/filter/filter";
import PhoneBook from "./components/PhoneBook/PhoneBook";
import { connect } from "react-redux";
import { filterContact } from "./Redux/actions/actions";
import { onContact } from "./Redux/reducers/Selectors/contactSelectors";

class App extends Component {
  handleFIlter = (e) => {
    this.props.filterContact(e.target.value);
  };

  render() {
    return (
      <TransitionGroup component={null}>
        <>
          <PhoneBook title="PhoneBook" />
          <ContactForm onHandleForm={this.handleForm} />
          <h2>Contacts</h2>
          {this.props.contacts.length >= 2 && (
            <Filter onChangeFilter={this.handleFIlter} />
          )}
          <VisibleContactList
            items={filterContact}
            onDeleteList={this.deleteList}
          />
        </>
      </TransitionGroup>
    );
  }
}

const MSTP = (state) => ({
  contacts: onContact(state),
});

const MDTP = (dispatch) => ({
  filterContact: (text) => dispatch(filterContact(text)),
});

export default connect(MSTP, MDTP)(App);
