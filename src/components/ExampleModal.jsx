import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { ButtonModal } from '../utils'

export default function Example() {
  return (
      <ButtonModal label='Open Modal' title='Yay 🥳 Its working!'>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!
        </Modal.Body>
      </ButtonModal>
  )
}
