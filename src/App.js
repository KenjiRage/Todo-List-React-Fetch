import React, { useState,useEffect } from "react";

const Home = () => {

	const [todoList, setTodoList] = useState([]);

//Peticiones FETCH	

	useEffect(() => {
		getTodos()
		
	},[]);

	const getTodos = async () => {
       	
		const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/manuelcebador");
		const data = await response.json();
		setTodoList(data);
	  };

	const addTodo = async (todo) => {
		
		const updatedTodos1 = [...todoList, { label: todo, done: false }];
		const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/manuelcebador", {
		  method: "PUT",
		  body: JSON.stringify(updatedTodos1),
		  headers: {
			"Content-Type": "application/json"
		  }
		});
		
		const data = await response.json();
		setTodoList([...todoList, {label: todo, done: false }]);
	  };
	
	const deleteTodo = async (index) => {
		
		const updatedTodos2 = todoList.filter((t, i) => i !== index);
		const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/manuelcebador", {
		  method: "PUT",
		  body: JSON.stringify(updatedTodos2),
		  headers: {
			"Content-Type": "application/json"
		  }
		});
		
		const data = await response.json();
		setTodoList(updatedTodos2);
	  };

    const clearTodos = async () => {
	    await fetch("https://assets.breatheco.de/apis/fake/todos/user/manuelcebador", {
	    method: "PUT",
	    body: JSON.stringify([{label: "Pepito", done: false}]),
	    headers: {
		"Content-Type": "application/json"
	  }
	    });
	    setTodoList([]);
        };
  
//Lógica de los componentes
	
return (

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setList([...list, newTodo]);

    // clear input box
    setInput("");
  };

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
