import TodoInput from './todo-input'
import TodoList from './todo-list'
import TodoProvider from './todo-provider'

export default function App() {
  return (
    <TodoProvider>
      <div className="todoapp">
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  )
}
