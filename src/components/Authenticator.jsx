import SignUpModal from './SignUpModal'
import LoginModal from './LoginModal'
import Logout from './Logout'

export default function Authenticator() {
  return (
    <>
      <SignUpModal />
      <LoginModal />
      <Logout />
    </>
  )
}