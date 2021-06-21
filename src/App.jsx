import React, { useState } from 'react'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-5xl text-pink-500 font-semibold">
        Hello, World!
      </h1>
    </div>
  )
}

export default App
