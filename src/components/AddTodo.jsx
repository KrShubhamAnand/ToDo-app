import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import Button from "@mui/material/Button";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="">
      <input
        type="text"
        className=""
        placeholder="Enter a Todo."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <Button  size= "small" type="submit" variant="contained" color="success">
        Add Todo
      </Button>
    </form>
  );
};

export default AddTodo;
