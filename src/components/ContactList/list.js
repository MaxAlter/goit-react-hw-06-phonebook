import React from "react";
import PropTypes from "prop-types";
import style from "./list.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../Redux/actions/actions";

const List = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <div className={style.list}>
        {number} : {name}
        <button
          className={style.button}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

List.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteList: PropTypes.func.isRequired,
};

const mapDispathToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(null, mapDispathToProps)(List);
