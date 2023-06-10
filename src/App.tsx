import { useMemo, useState } from 'react'
import './App.css'
import { AppProvider } from './components/Application'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

function App() {

  const router = useMemo(() => {
    return createBrowserRouter(routes);
  }, [routes]);

  return (
    <>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </>
  )
}

export default App
