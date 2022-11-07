import Button from 'react-bootstrap/Button'
import Hooks from '../utils/Hooks'

export default function Counter() {

  const [count, setCount] = Hooks.useLocalStorage("count", 0)
  
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