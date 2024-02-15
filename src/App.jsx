import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './Components/Swipe/ProfileCard'

function App() {

  return (
    <>
    <div className='flex w-screen h-screen'>

      <div className='w-96 h-full bg-gray-900'>
        <div  className='h-24 w-full bg-red-400 flex '>
           </div>
      </div>
      <div className='flex-grow'>
        <ProfileCard/>
      </div>

    </div>

      
    </>
  )
}

export default App
