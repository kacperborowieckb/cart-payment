import { useState } from "react"
import Header from "./components/header/Header"
import "./styles/main.scss"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

export default App
