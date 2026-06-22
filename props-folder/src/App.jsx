import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
        <Card user='Harshvardhan' age={20} img='https://images.unsplash.com/photo-1781588080363-5fe0e603d5c3?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <Card user='Har.one' age={21} img='https://images.unsplash.com/photo-1780789594806-bab25c649181?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D' />
        <Card user='Arpit' age={22} img='https://plus.unsplash.com/premium_photo-1689607809841-cbbc3595f3fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D' />
    </div>
  )
}

export default App