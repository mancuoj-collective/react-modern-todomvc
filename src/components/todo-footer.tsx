import { useTodos } from './todo-provider'

export default function TodoFooter() {
  const { todos, dispatch } = useTodos()
  const remaining = todos.filter((todo) => !todo.completed).length

  return (
    todos.length && (
      <footer className="footer">
        <span className="todo-count">
          <strong>{remaining}</strong>
          <span>{remaining === 1 ? ' item' : ' items'}</span>
        </span>

        {todos.length > remaining && (
          <button className="clear-completed" onClick={() => dispatch({ type: 'remove-completed' })}>
            Clear completed
          </button>
        )}
      </footer>
    )
  )
}
