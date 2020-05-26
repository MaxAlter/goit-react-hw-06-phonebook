export const Type = {
  ADD: "ADD",
  DELETE: "DELETE_CONTACT",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER",
};

export const deleteContact = (id) => ({
  type: Type.DELETE,
  payload: id,
});

export const addContact = (contact) => ({
  type: Type.ADD,
  payload: contact,
});

export const filterContact = (value) => ({
  type: Type.SET_VISIBILITY_FILTER,
  payload: value,
});
