export interface TodoItem {
  id: string
  title: string
  completed: boolean
}

export type ActionType = { type: 'add'; title: string } | { type: 'remove'; id: string } | { type: 'edit', todo: TodoItem}

export interface TodoProviderState {
  todos: TodoItem[]
  dispatch: React.Dispatch<ActionType>
}
