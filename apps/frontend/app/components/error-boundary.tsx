import { isRouteErrorResponse } from 'react-router'

import { ENV } from '~/libs/env'

import type { Route } from '../+types/root'

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (ENV.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="wrapper">
      <h1>{message}</h1>
      <p>{details}</p>

      {stack && (
        <pre className="stack">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
