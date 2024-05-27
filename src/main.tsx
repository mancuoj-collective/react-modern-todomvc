import ReactDOM from 'react-dom/client'
import TodoInput from './components/todo-input'
import TodoList from './components/todo-list'
import TodoFooter from './components/todo-footer'
import TodoProvider from './components/todo-provider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TodoProvider>
    <div className="todoapp">
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </div>
  </TodoProvider>,
)
