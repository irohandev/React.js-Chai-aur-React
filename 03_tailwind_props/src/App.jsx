import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=" bg-green-700 text-black text-3xl font-bold underline mb-4 rounded-xl"> TAILWIND CSS </h1>
      <Card username="Rohan" btnText='Click Me'/>
      <Card username="Rohan Dev Singh"/>
    </>
  )
}

export default App
