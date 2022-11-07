import React from 'react'
import Button from 'react-bootstrap/Button'
import Input from '../utils/ui/Input'
import Form from '../utils/ui/Form'

export default function RadioTest() {
  
  const submit = (data) => {
    console.log(data)
  }

  return (
    <Form onSubmit={submit}>
      <h5>Radio Test</h5>
      <div className='my-3'>1. What is blue?</div>
      <Input 
        label='blue'
        type='radio'
        id='question1'
      />
      <Input 
        label='not blue'
        type='radio'
        id='question1'
      />
      <Input 
        label='red'
        type='radio'
        id='question1'
      />
      <div className='my-3'>2. What is red?</div>
      <Input 
        label='yellow'
        type='checkbox'
        id='yellow'
      />
      <Input 
        label='purple'
        type='checkbox'
        id='purple'
      />
      <Input 
        label='Switch Example'
        type='switch'
        id='switch-example'
      />
      <Input
        label='Select Example:'
        type='select'
        id='select-example'
      >
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>       
      </Input>
      
      <Button type="submit">
        Submit
      </Button>

    </Form>
  )
}
