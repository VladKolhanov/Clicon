import { ENV } from '~/libs/env'

import type { Route } from './+types/home'

interface HealthCheckData {
  timestamp: string
}

interface ResponseData {
  status: boolean
  message: string
  data: HealthCheckData
}

export async function clientLoader() {
  const res = await fetch(`${ENV.VITE_API_URL}/health`)
  const data = (await res.json()) as ResponseData

  return data.data
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <p>{loaderData.timestamp}</p>
    </div>
  )
}
