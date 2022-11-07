import Hooks from '../utils/Hooks'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

export default function Logout(props) {
  const auth = Hooks.useAuth()

  if (!auth.user) return

  return (
    <>
      <Nav.Item className='my-1'><small>👤 {auth.user.email}</small></Nav.Item>
      <Button className='mx-2' {...props} size='sm' onClick={auth.logout}>
        Logout
      </Button>
    </>
  )
}