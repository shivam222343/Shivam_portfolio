import { useState } from 'react'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Pop from './components/Pop.jsx'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header style={"h-44 w-screen bg-black"}/>
    <Outlet/>
    <Footer />
    </>
  )
}

export default App
