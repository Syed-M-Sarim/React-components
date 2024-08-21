import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card
      title='Image'
      image='https://images.unsplash.com/photo-1464047736614-af63643285bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnQlMjBwbGFubmVyfGVufDB8fDB8fHww'
      description='Random Image for assingment'/>
      <Card
      title='Image'
      image='https://images.unsplash.com/photo-1425421598808-4a22ce59cc97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnQlMjBwbGFubmVyfGVufDB8fDB8fHww'
      description='Random Image for assingment'/>
      <Card
      title='Image'
      image='https://images.unsplash.com/photo-1627935722051-395636b0d8a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnQlMjBwbGFubmVyfGVufDB8fDB8fHww'
      description='Random Image for assingment'/>
    </>
  )
}

export default App
