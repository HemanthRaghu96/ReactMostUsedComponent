import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeDatabase from './Components/Employee Database Management/EmployeDatabase'
import CountDownTimer from './Components/Countdown Timer/CountDownTimer'
import Pagination from './Components/Pagination/Pagination'
import ProgressBar from './Components/Progress Bar/ProgressBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <EmployeDatabase /> */}
      {/* <CountDownTimer /> */}
      {/* <Pagination /> */}
      <ProgressBar />
    </>
  )
}

export default App
