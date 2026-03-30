import { useState } from 'react'
import { useEffect } from 'react'


export function App() {

  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then((res) => res.json())
      .then((res) => setTodos(res))
  }, [])

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const addTodo = () => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title,
        completed: false
      })
    }).then((res) => res.json())
      .then((res) => setTodos([res, ...todos]))
  }

  const removeTodo = (id) => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method : 'DELETE'
      })
  }

  return (
    <>
      <input value={title} onChange={changeTitle} />
      <button onClick={addTodo}>Add</button>

      <ul>
        {
          todos.map((todo) => {
            return (
              <li key={todo.id}>
                <b>{todo.id}</b>
                <span>{todo.title}</span>
                <button onClick={() => removeTodo(todo.id)}>X</button>
              </li>
            )
          })
        }
      </ul>

    </>
  )
}

