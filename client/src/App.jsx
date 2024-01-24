import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NewPage from './pages/NewPage'

function App() {

  const [user,setresult]= useState('')
  return (
    <>
      <h1>MERN RENDER</h1>
      <button onClick={
        async () => {
          const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`)
          const data = await res.json()
          setresult(data)
        }
      }>users</button>

      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
      <BrowserRouter>
      <Routes>
        <Route path='/newpage' element={<NewPage />}>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
