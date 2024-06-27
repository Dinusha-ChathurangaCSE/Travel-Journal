import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Data from './data.js'
import Card from './components/Card.jsx'

function App() {
  const card = Data.map(post => <Card
  key={post.id}
  {...post}
  
  />)

  return (
    <div className='main-container'>
      <Navbar />
      <div className='card-list'>
        {card}
      </div>
    </div>
  )
}

export default App
