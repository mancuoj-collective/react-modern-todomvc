import { clsx } from 'clsx'
import { Todo } from '../lib/types'
import { useTodos } from './todo-provider'

export default function TodoItem({ todo }: { todo: Todo }) {
  const { dispatch } = useTodos()

  return (
    <li className={clsx('todo', { completed: todo.completed })}>
      <div className="view">
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
      </div>
    </li>
  )
}
