import { useState } from "react"
import Header from "./components/header/Header"
import Main from "./pages/main"
import "./styles/main.scss"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
