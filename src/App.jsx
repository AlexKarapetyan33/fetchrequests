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


  return (
    <>
      <input value={title} onChange={changeTitle}/>
      <button>Add</button>

      <ul>
        {
          todos.map((todo) => {
            return(
              <li key={todo.id}>
                <b>{todo.id}</b>
                  <span>{todo.title}</span>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

