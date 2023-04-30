import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import logo from '../techtime.png'
import { lazy, Suspense } from 'react'
const App = lazy(() => import('./App'))

const Loader = () => {
  return (
    <div className='loader'>
      <img src={logo} alt="logo" />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>
)
