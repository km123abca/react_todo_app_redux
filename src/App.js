import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";
import { useDispatch } from "react-redux";
import { reloadTodos } from "./features/todoSlice";
import { getFromDB } from "./components/Databasefns";
const todoList2 = [
  { item: "todo1", done: false, id: 1 },
  { item: "todo2", done: true, id: 2 },
];

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);
  let [suscribed, setSuscribed] = useState(true);
  useEffect(() => {
    dispatch(reloadTodos(getFromDB()));
    return () => {
      setSuscribed(false);
    };
  }, []);
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((x, k) => (
            <TodoItem name={x.item} done={x.done} id={x.id} key={k} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
