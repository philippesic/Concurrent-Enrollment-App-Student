import { Link as RLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

export function Link({children, label, ...props}) {
  return (
    <Nav.Link as={RLink} href={props.to} {...props}>
      {children ? children : label}
    </Nav.Link>
  )
}

export default Link;