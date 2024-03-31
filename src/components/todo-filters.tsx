import { clsx } from 'ts-clsx'
import { useVisibility } from './todo-provider'
import { VisibilityType } from '../types'

export default function TodoFilters() {
  const filters: VisibilityType[] = ['all', 'active', 'completed']
  return (
    <ul className="filters">
      {filters.map((filter) => (
        <Filter key={filter} filter={filter} />
      ))}
    </ul>
  )
}

function Filter({ filter }: { filter: VisibilityType }) {
  const { visibility, setVisibility } = useVisibility()
  return (
    <li>
      <a className={clsx({ selected: visibility === filter })} onClick={() => setVisibility(filter)}>
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </a>
    </li>
  )
}
