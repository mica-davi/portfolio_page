import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./css/styles.css"
import Presentation from './components/presentation'
import Profile from './components/profile'
import Stack from './components/stack'
import Footer from './components/footer'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Presentation/>
      <Profile />
      <Stack />
      <Footer />
    </>
  )
}

export default App
