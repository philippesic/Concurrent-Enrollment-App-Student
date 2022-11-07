import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Hooks, ButtonModal, Form, Input, ErrorAlert } from '../utils'


export default function LoginModal() {
  const auth = Hooks.useAuth()

  const submit = (data) => {
    auth.login(data.email, data.password)
  }

  if (auth.user) return

  return (
    <ButtonModal size='sm' label='Log in' title='Log in'
      variant='outline-success' className='mx-2'>
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
          />

          <Button type="submit">Log in</Button>
        </Form>
      </Modal.Body>
    </ButtonModal>
  )
}