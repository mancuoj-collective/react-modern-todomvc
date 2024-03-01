import TodoInput from "./components/todo-input"
import TodoList from "./components/todo-list"
import TodoFooter from "./components/todo-footer"
import TodoProvider from "./components/todo-provider"

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
