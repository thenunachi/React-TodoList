// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [input, setInput] = useState(""); //inputbox will take empty string
  const [toDoList, settoDoList] = useState([]) // list to add all tasks
  const handleClick = () => {
    const id = toDoList.length +1
    settoDoList ((prevL)=>[
      ...prevL,
      {
        id:id,
        task : input
      },
    ]);
    setInput("")
  }
  
  return (
    <div className="App">
      <header className="App-header">

        <p>
          To-do-list app
          {/* 1)input box and button
          2) new task will be added down */}
        </p>
        <div>
          <input type="text"
            placeholder='Enter a task'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button onClick={() => handleClick()}>Add</button>
          <ul>
            {toDoList.map((todo)=>{
              return(
               <div
               id = {todo.id}
               >

               
               {todo.task}

               </div>
                
                  

               
              )
            })}
          </ul>
        </div>
      </header>

    </div>
  );
}

export default App;
