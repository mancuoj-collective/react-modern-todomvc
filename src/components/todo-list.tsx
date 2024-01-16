import { useTodos } from './todo-provider'
import TodoToggle from './todo-toggle'
import TodoItem from './todo-item'

export default function TodoList() {
  const { todos } = useTodos()

  return (
    todos.length > 0 && (
      <main className="main">
        <TodoToggle />
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </main>
    )
  )
}
