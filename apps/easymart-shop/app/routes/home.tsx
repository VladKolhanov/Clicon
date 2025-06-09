import { ENV } from '~/configs/env'

import type { Route } from './+types/home'

type HealthCheckData = {
  timestamp: string
  uptime: number
  memoryUsage: Record<string, number>
  cpuUsage: Record<string, number>
  nodeVersion: string
  pid: number
}

type ResponseData = {
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
      <p>{loaderData.uptime}</p>
      <p>{loaderData.nodeVersion}</p>
      <p>{loaderData.pid}</p>
    </div>
  )
}
