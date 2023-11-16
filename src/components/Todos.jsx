import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}

          <IconButton
            onClick={() => dispatch(removeTodo(todo.id))}
            aria-label="delete"
            size="small"
          >
            <DeleteIcon color="error" fontSize="small" />
          </IconButton>
        </li>
      ))}
    </>
  );
};

export default Todos;
