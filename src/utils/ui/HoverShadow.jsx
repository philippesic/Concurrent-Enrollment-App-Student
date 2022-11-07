import {useState} from 'react'

export function HoverShadow({children}) {
  const [shadow, setShadow] = useState('');
  return (
    <div  className={"p-0 m-0 " + shadow}      
      onMouseEnter={() => setShadow('shadow')}
      onMouseLeave={() => setShadow('')}>
      {children}
    </div>
  )
}

export default HoverShadow;