import { useTodos } from './todo-provider'
import TodoFilter from './todo-filter'

export default function TodoFooter() {
  const { todos, dispatch } = useTodos()
  const remaining = todos.filter((todo) => !todo.completed).length

  return (
    todos.length > 0 && (
      <footer className="footer">
        <span className="todo-count">
          <strong>{remaining}</strong>
          <span>{remaining === 1 ? ' item' : ' items'}</span>
        </span>
        <TodoFilter />
        {todos.length > remaining && (
          <button className="clear-completed" onClick={() => dispatch({ type: 'remove-completed' })}>
            Clear completed
          </button>
        )}
      </footer>
    )
  )
}
