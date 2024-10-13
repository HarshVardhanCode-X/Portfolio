import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<><Home/></>} >
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
