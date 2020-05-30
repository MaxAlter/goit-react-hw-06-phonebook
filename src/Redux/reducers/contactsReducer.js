import { Type } from "../actions/actions";

const defaultState = {
  contacts: [],
};

const contactReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Type.ADD:
      return { ...state, contacts: [...state.contacts, action.payload] };

    case Type.DELETE:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default contactReducer;



