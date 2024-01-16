import { ReactNode, createContext, useContext, useEffect, useReducer } from 'react'
import { ActionType, Todo, TodoProviderState } from '../lib/types'

const STORAGE_KEY = 'react-todomvc'
const TodosContext = createContext<TodoProviderState>({
  todos: [],
  dispatch: () => null,
})

function todosReducer(todos: Todo[], action: ActionType) {
  switch (action.type) {
    case 'add':
      return [...todos, { id: crypto.randomUUID(), title: action.title, completed: false }]
    case 'remove':
      return todos.filter((todo) => todo.id !== action.id)
    case 'edit':
      return todos.map((todo) => (todo.id === action.todo.id ? action.todo : todo))
    case 'toggle-all':
      return todos.map((todo) => ({ ...todo, completed: action.checked }))
    case 'remove-completed':
      return todos.filter((todo) => !todo.completed)
    default:
      return todos
  }
}

export default function TodoProvider({ children, ...props }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(todosReducer, [], (init) => {
    const storedTodos = localStorage.getItem(STORAGE_KEY)
    return storedTodos ? JSON.parse(storedTodos) : init
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  return (
    <TodosContext.Provider value={{ todos, dispatch }} {...props}>
      {children}
    </TodosContext.Provider>
  )
}

export function useTodos() {
  return useContext(TodosContext)
}
