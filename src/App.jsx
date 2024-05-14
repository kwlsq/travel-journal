import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Cards from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Cards/>
    </>
  )
}

export default App
