import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'/
import Flow from './component/Graph'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Flow />
    </>
  )
}

export default App
