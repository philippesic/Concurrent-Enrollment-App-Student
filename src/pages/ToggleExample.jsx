import { useState } from "react"

export default function App() {
  const [isItOn, setIsItOn] = useState(true)

  const toggle = () => {
    setIsItOn(!isItOn)
  }

  return (
    <button onClick={toggle}>
      {isItOn ? "On" : "Off"}
    </button>
  )
}