import { ENV } from '~/configs/env'

export const App = () => {
  console.log(ENV.VITE_API_URL)
  return <div>Hello world</div>
}
