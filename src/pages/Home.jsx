import React from 'react'
import Button from 'react-bootstrap/Button'

// import Counter from '../components/Counter'
import ExampleModal from '../components/ExampleModal'

export default function Home() {

  return (
    <div className='text-center '>
      <ExampleModal />
      <h5>Hello World</h5>
      <Button variant='success'>Test</Button>
    </div>
  )
}
