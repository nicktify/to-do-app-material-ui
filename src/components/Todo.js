import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Checkbox, makeStyles, TextField } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import styled from "styled-components";

import { deleteTodo, editTodo } from "../redux/actions";

const styles = makeStyles(() => ({
  root: {
    height: "30px",
  },
  DeleteForeverIcon: {
    marginLeft: "10px",
    paddingTop: "12px",
  },
}));

const Text = styled.div`
  padding-top: 10px;
  font-size: 20px;
`;

const Todo = ({ id, text, checked, editing, status, editTodo, deleteTodo }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    editTodo({
      id,
      text,
      checked,
      editing,
      status: checked ? "complete" : "incomplete",
    });
  }, [checked]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      editTodo({
        id,
        text: value,
        checked,
        editing: false,
        status,
      });
    }
  };

  const handleChecked = () => {
    editTodo({
      id,
      text,
      checked: !checked,
      editing,
      status: status,
    });
  };

  const handleEdit = () => {
    editTodo({
      id,
      text,
      checked,
      editing: true,
    });
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  const classes = styles();

  return (
    <div className="todo">
      <Checkbox
        className={classes.root}
        checked={checked}
        onChange={handleChecked}
      />
      {!editing ? (
        <Text onClick={handleEdit}>{text}</Text>
      ) : (
        <TextField
          autoFocus
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      )}
      <DeleteForeverIcon
        className={classes.DeleteForeverIcon}
        onClick={handleDelete}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    editTodo: (todo) => dispatch(editTodo(todo)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Todo);
