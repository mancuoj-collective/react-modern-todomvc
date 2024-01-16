import { clsx } from 'clsx'
import { useVisibility } from './todo-provider'

export default function TodoFilter() {
  const { visibility, setVisibility } = useVisibility()

  return (
    <ul className="filters">
      <li>
        <a className={clsx({ selected: visibility === 'all' })} onClick={() => setVisibility('all')}>
          All
        </a>
      </li>
      <li>
        <a className={clsx({ selected: visibility === 'active' })} onClick={() => setVisibility('active')}>
          Active
        </a>
      </li>
      <li>
        <a className={clsx({ selected: visibility === 'completed' })} onClick={() => setVisibility('completed')}>
          Completed
        </a>
      </li>
    </ul>
  )
}
