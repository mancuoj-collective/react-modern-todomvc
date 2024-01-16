import TodoInput from './todo-input'
import TodoList from './todo-list'
import TodoFooter from './todo-footer'
import TodoProvider from './todo-provider'

export default function App() {
  return (
    <TodoProvider>
      <div className="todoapp">
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </div>
    </TodoProvider>
  )
}
