
import HoverShadow from './HoverShadow'
import Card from 'react-bootstrap/Card'

export function CardButton({children, ...props}) {

  return (
    <Card role='button' {...props}>
      <HoverShadow>
        {children}
      </HoverShadow>
    </Card>
  )
}

export default HoverShadow;