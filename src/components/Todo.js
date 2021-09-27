import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { useHistory } from "react-router";
// import DeleteIcon from "@mui/icons-material/Delete";
const Todo = ({ user }) => {
  const history = useHistory();

  const [text, setText] = useState("");
  const [mytodos, setTodos] = useState([]);

  const addTodo = () => {
    db.collection("todos")
      .doc(user.uid)
      .set({
        todos: [...mytodos, text],
      });
    // history.push("/details");
  };
  // const nextTodo = () => {
  //   history.push("/details");
  // };
  const deleteTodo = (deleteTodo) => {
    const docRef = db.collection("todos").doc(user.uid);
    docRef.get().then((docSnap) => {
      const result = docSnap.data().todos.filter((todo) => todo != deleteTodo);
      docRef.update({
        todos: result,
      });
    });
  };
  const delAllTodo = (delAllTodo) => {
    const docRef = db.collection("todos").doc(user.uid);
    docRef.get().then((docSnap) => {
      const res = docSnap.data().todos.filter((todo) => todo == delAllTodo);
      docRef.update({
        todos: res,
      });
    });
  };
  useEffect(() => {
    if (user) {
      const docRef = db.collection("todos").doc(user.uid);
      docRef.onSnapshot((docSnap) => {
        if (docSnap.exists) {
          // console.log(docSnap.data().todos);
          setTodos(docSnap.data().todos);
        } else {
          console.log("NO TODOS");
        }
      });
    } else {
      history.push("/login");
    }
  });

  return (
    <>
      <h1>Add Your Todo</h1>
      <div className="todo">
        <span className="text-centers">Add your TODOS here :)</span>
        <div className="input-field">
          <input
            className="input"
            type="text"
            placeholder="Add TODO"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button className="btn2" onClick={() => addTodo()}>
          Add the Todos
        </button>
        <div className="displays">
          <ul className="todos">
            {mytodos.map((todo) => {
              return (
                <li className="todo-item">
                  {todo}
                  <i
                    className="material-icons"
                    onClick={() => history.push(`/details`)}
                  >
                    add
                  </i>
                  <i
                    className="material-icons right"
                    onClick={() => deleteTodo(todo)}
                  >
                    delete
                  </i>
                </li>
              );
            })}
            {/* <DeleteIcon /> */}
          </ul>
        </div>
        <button className="delete-btn" onClick={() => delAllTodo()}>
          Delete All the TODOS
        </button>
      </div>
    </>
  );
};
export default Todo;
