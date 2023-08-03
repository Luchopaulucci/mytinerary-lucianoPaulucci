import Main from './layouts/Main'
import Home from './pages/Home'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main>
        <Home />
      </Main>
    </>
  )
}

export default App
