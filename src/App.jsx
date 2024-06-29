import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeDatabase from './Components/Employee Database Management/EmployeDatabase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EmployeDatabase />
    </>
  )
}

export default App
