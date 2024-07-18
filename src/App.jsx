import React from 'react'
import Hello from './components/Hello.jsx'
import About from './components/About.jsx'
import Interests from './components/Interests.jsx'

function App() {
  return (
    <div className='w-[400px] ml-[140%] mt-2 h-screen bg-[#1A1B21] rounded-xl'>
      <Hello />
      <About />
      <Interests />
    </div>
  )
}

export default App
