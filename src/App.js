import React from "react";
import './App.css';
import Todo from "./todo"

function App() {
  return (
    <div className="App">
  {/* <div  id="inputWraper" >
    <input className="input" type="text" placeholder="enterTodo" />
  </div> */}
  <Todo/>
    </div>
  );
}

export default App;
