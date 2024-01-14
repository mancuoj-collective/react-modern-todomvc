import { ReactNode, createContext, useContext, useReducer } from 'react'
import { ActionType, TodoItem, TodoProviderState } from '../lib/types'

const initialTodos: TodoItem[] = []
const TodosContext = createContext<TodoProviderState>({
  todos: initialTodos,
  dispatch: () => null,
})

function todosReducer(todos: TodoItem[], action: ActionType) {
  switch (action.type) {
    case 'add':
      return [...todos, { id: crypto.randomUUID(), title: action.title, completed: false }]
    case 'remove':
      return todos.filter((todo) => todo.id !== action.id)
    case 'edit':
      return todos.map((todo) => (todo.id === action.todo.id ? action.todo : todo))
    default:
      return todos
  }
}

export default function TodoProvider({ children, ...props }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos)
  return (
    <TodosContext.Provider value={{ todos, dispatch }} {...props}>
      {children}
    </TodosContext.Provider>
  )
}

export function useTodos() {
  return useContext(TodosContext)
}
