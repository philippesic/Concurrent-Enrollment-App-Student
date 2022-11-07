import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Utils, { Input, Form } from '../utils'

export default function AddressForm() {

  const statesUS = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]

  const submit = (data) => {
    console.log(data)
  }

  const createComponent = (abbr, index) => {
    return <option key={index} value={abbr}>{abbr}</option>
  }

  return (
    <Form onSubmit={submit}>
      <Row>
        <h5>Address Form</h5>
        <div className='mb-3'>
          Practice using <code>Row</code> and <code>Col</code>
        </div>
      </Row>
      <Row>
        <Input floating required
          label='Email:'
          type='email'
          id='email' />
      </Row>
      <Row>
        <Col>
          <Input floating required
            label='First name:'
            type='text'
            id='firstName'
          />
        </Col>
        <Col>
          <Input floating required
            label='Last name:'
            type='text'
            id='lastName'
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input floating required
            label='Street address:'
            type='text'
            id='streetAddress'
          />
        </Col>
        <Col>
          <Input floating
            label='Apt/Unit:'
            type='text'
            id='aptUnit'
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input floating required
            label='City:'
            type='text'
            id='city'
          />
        </Col>
        <Col>
          <Input floating required
            label='State:'
            type='select'
            id='state'
          >
            {Utils.forEach(statesUS, createComponent)}
          </Input>
        </Col>
        <Col>
          <Input floating required
            label='Zip code:'
            type='number'
            id='zipCode'
          />
        </Col>
      </Row>

      <Button type="submit">
        Submit
      </Button>
      <Button className='ms-1' type="Reset">
        Reset
      </Button>
    </Form>
  )
}
