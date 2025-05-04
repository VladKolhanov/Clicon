import type { Route } from './+types/home'

interface HealthCheck {
  status: string
  timestamp: string
  uptime: number
}

export async function clientLoader() {
  const res = await fetch(`http://localhost:3000/api/health`)

  const data = (await res.json()) as HealthCheck

  return data
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <p>{loaderData.status}</p>
      <p>{loaderData.timestamp}</p>
      <p>{loaderData.uptime}</p>
    </div>
  )
}
