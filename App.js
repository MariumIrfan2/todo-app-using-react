import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  // let a = "Students Table"
  //   let b = [
  //     { name: "ABC", id: 1 },
  //     { name: "ABC", id: 2 },
  //     { name: "ABC", id: 3 }
  //   ]
  // const [count, setCount] = useState(0);

  // let addCount = () => {
  //   // setCount(count + 1)
  //   setCount(prevCount => prevCount + 1)
  // }

  const [text, setText] = useState("");
  const [todo, setTodos] = useState([]);

  let add = () => {
    setTodos([
      ...todo,
      {
        item: text,
      }
    ])
    setText("");
  };

  let deleteTodo = (todoIndex) => {
    const todosClone = [...todo]
    todosClone.splice(todoIndex, 1);
    console.log(todosClone, "allTodos");
    setTodos(todosClone);
    console.log(4)

    
    let editTodo = (todoIndex) => {
      const todosClone = [...arr]
      let editIndex = todosClone.splice(todoIndex, 1)
      console.log(editIndex, "allTodos");
      let r = prompt("Edit text")
      console.log(r, todosClone)
      todosClone.push(r)
      setTodos(todosClone);
    



  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <h1>{a}</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {b.map((x,i)=>{
              return <tr><td>{x.name}</td>
              <td>{x.id}</td></tr>
            })}
          </tbody>
        </table> */}


        {/* <h1>State</h1> */}
        {/* <button onClick={addCount}>{count}</button> */}

        <h1>Todo App Using React</h1>
        <p>{text}</p>
        <input onChange={(e) => setText(e.target.value)} placeholder="Enter Text" value={text} />
        <button onClick={() => add("abc")}>Add</button>

        <div>
          {todo.map((todo, index) => (
            <div key={index}>
              <p>
                {todo.item}
              </p>
              <button>edit</button>
              <button onClick={() => (deleteTodo())}>delete</button>
            </div>
          ))}
        </div>

      </header>
    </div>
  );
}

export default App;
