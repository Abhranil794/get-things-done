import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Todo from "./Todo";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [APIData, setAPIData] = useState([]);

  const addTodo = (todo) => {
    // setTodos([
    //   ...todos,
    //   { id: uuidv4(), task: todo, completed: false, isEditing: false },
    // ]);
    axios
      .post("https://64ad29a9b470006a5ec5746f.mockapi.io/Todo", {
        task: todo,
      })
      .then(function (response) {
        console.log(response);
        let arr = [...APIData, response.data];
        setAPIData(arr);
        // console.log(arr);
      });
    // console.log(todos);
  };
  useEffect(() => {
    axios
      .get(`https://64ad29a9b470006a5ec5746f.mockapi.io/Todo`)
      .then((response) => {
        setAPIData(response.data);
      })
      .then(() => {
        getData();
      });
  }, []);
  const getData = () => {
    axios
      .get(`https://64ad29a9b470006a5ec5746f.mockapi.io/Todo`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };
  const onDelete = (id) => {
    axios
      .delete(`https://64ad29a9b470006a5ec5746f.mockapi.io/Todo/${id}`)
      .then(() => {
        getData();
      });
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <h1>Get things done</h1>
      <TodoForm addTodo={addTodo} />
      {APIData.map((todo, index) => (
        <Todo
          task={todo}
          key={index}
          toggleComplete={toggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
export default TodoWrapper;

//mock-api = https://64ad29a9b470006a5ec5746f.mockapi.io/Todo
