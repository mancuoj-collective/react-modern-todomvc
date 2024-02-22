import { clsx } from "clsx"
import { useVisibility } from "./todo-provider"
import { VisibilityType } from "../lib/types"

export default function TodoFilter() {
  const { visibility, setVisibility } = useVisibility()
  const filters: VisibilityType[] = ["all", "active", "completed"]

  return (
    <ul className="filters">
      {filters.map((filter) => (
        <li key={filter}>
          <a
            className={clsx({ selected: visibility === filter })}
            onClick={() => setVisibility(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </a>
        </li>
      ))}
    </ul>
  )
}
