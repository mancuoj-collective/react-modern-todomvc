import clsx from 'clsx'
import { useTodos } from './todo-provider'
import { TodoItem } from '../lib/types'

export default function TodoList() {
  const { todos } = useTodos()

  return (
    todos.length > 0 && (
      <main className="main">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </main>
    )
  )
}

function Todo({ todo }: { todo: TodoItem }) {
  const { dispatch } = useTodos()

  return (
    <li className={clsx('todo', { completed: todo.completed })}>
      <input
        type="checkbox"
        className="toggle"
        checked={todo.completed}
        onChange={(e) => {
          dispatch({
            type: 'edit',
            todo: { ...todo, completed: e.target.checked },
          })
        }}
      />
      <label>{todo.title}</label>
      <button className="destroy" onClick={() => dispatch({ type: 'remove', id: todo.id })}></button>
    </li>
  )
}
