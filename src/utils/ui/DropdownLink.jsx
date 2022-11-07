import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown'

export function DropdownLink({children, label, ...props}) {
  return (
    <NavDropdown.Item as={Link} href={props.to} {...props}>
      {children ? children : label}
    </NavDropdown.Item>
  )
}

export default DropdownLink;