import React from "react";
import "./TodoItem.css";
import { Checkbox, Button } from "@material-ui/core";
// import { DeleteIcon } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import { setCheck, deleteTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";
import { checkUnCheck, deleteItem } from "./Databasefns";

function TodoItem({ name, done, id }) {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
    checkUnCheck(id);
  };
  const deleteThis = () => {
    deleteItem(id);
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p className={done ? "todoItem--done" : null}>{name}</p>
      <Button onClick={deleteThis}>
        <DeleteIcon />
      </Button>
    </div>
  );
}

export default TodoItem;
