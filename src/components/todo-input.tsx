import { KeyboardEvent, useState } from 'react'
import { useTodos } from './todo-provider'

export default function TodoInput() {
  const [text, setText] = useState('')
  const { dispatch } = useTodos()

  function addTodo(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && text.trim()) {
      dispatch({ type: 'add', title: text })
      setText('')
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        autoFocus
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={(e) => addTodo(e)}
      />
    </header>
  )
}
