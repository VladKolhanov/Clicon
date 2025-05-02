import type { Route } from './+types/home'

interface Todo {
  id: string
  title: string
  description: string
  completed: boolean
  createdAt: Date
}

export async function clientLoader() {
  const res = await fetch(`http://localhost:3000/`)

  const data = (await res.json()) as Todo[]

  return data
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <ul>
      {loaderData.map((todo) => (
        <li>
          <p>{todo.title}</p>
          <p>{todo.description}</p>
        </li>
      ))}
    </ul>
  )
}
