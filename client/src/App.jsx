import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'/
import Flow from './component/Flow'
import GetData from './api/getData'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <GetData/>
    </>
  )
}

export default App
