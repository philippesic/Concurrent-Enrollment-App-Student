import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Hooks, ButtonModal, Form, Input, ErrorAlert } from '../utils'

export default function SignUpModal() {
  const auth = Hooks.useAuth()

  const submit = (data) => {
    auth.signup(data.email, data.password)
  }

  if (auth.user) return

  return (
    <ButtonModal label='Sign up' title='Sign up' size='sm' >
      <Modal.Body>
        <ErrorAlert error={auth.error} />
        <Form onSubmit={submit}>
          <Input floating required
            label='Email:'
            type='email'
            id='email'
          />
          <Input floating required
            label='Password:'
            type='password'
            id='password'
            text='Passwords must be at least 8 characters'
          />
          <Button type="submit">Sign up</Button>
        </Form>
      </Modal.Body>
    </ButtonModal>
  )
}