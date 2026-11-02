import {useState, useEffect} from 'react'

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodoHandler = function(e){
    e.preventDefault();

const text = inputValue.trim();

  if (!text) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };

    setTodos(prevTodos => [
  ...prevTodos,
  newTodo
]);
    
    // Clear input field
    setInputValue('');
  }

// const deleteTodoHandler = function(id){
//       return setTodos(todos.filter(item => item.id !== id))
// }

// use below
const deleteTodoHandler = (id) => {
  setTodos(prevTodos =>
    prevTodos.filter(item => item.id !== id)
  );
};

const toggleHandler = function(id){
      return setTodos(todos.map(item => item.id === id ? {...item, completed: !item.completed} : item))
}

  return (
    <>
    <section>
      <h2>Todo App {inputValue} </h2>
      <form onSubmit={addTodoHandler}>
      <label> Add Todo </label> <br /><br />
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} /><br /><br />
      <button type='submit'> Add Todo </button>
      </form>
    </section>
    <section>
    <h2> Display Todo </h2>
    {todos.length === 0 ? (
      <p> No record found yet ! </p>
    ) : 
    (
      <ul>
      {todos.map(item => (
       <li key={item.id}> 
       <input 
       type='checkbox'
       checked={item.completed}
        onChange={() => toggleHandler(item.id)}
        /> 
       {item.text} 
       
       <button onClick={() => deleteTodoHandler(item.id)}>Delete</button>
       </li>
      ))}
      </ul>
    )
    }
    </section>
    </>
      
  )
}

export default Todo
