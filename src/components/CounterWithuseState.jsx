import React from 'react'
import Button from 'react-bootstrap/Button'

export default function Counter() {

  const [count, setCount] = React.useState(0)
  
  const decrement = () => {setCount(count - 1)}
  const increment = () => {setCount(count + 1)}

  return (
    <>      
      Count: {count}
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </>
  )
}