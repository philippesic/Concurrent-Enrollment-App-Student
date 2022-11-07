import React from 'react'
import Button from 'react-bootstrap/Button'

import Input from '../utils/ui/Input'
import Form from '../utils/ui/Form'

export default function InputExamples() {

  const submit = (data) => {
    console.log(data)
  }

  return (
    <Form onSubmit={submit}>
      <h5>Example of Different Input Types</h5>
      <div className='mb-3'>
        email, text, textarea, password, radio, checkbox, switch, select, color, date, time, datetime-local, month, week, number, file, range, search, url
      </div>

      <Input
        label='Email Example:'
        type='email'
        id='email-example'
        placeholder='Enter Email'
        text='this is some text explaining'
      />
      <Input
        label='Text Example:'
        type='text'
        id='text-example'
      />
      <Input
        label='Textarea Example:'
        type='textarea'
        id='textarea-example'
        style={{ height: '120px' }}
      />
      <Input
        label='Password Example:'
        type='password'
        id='password-example'
      />
      <Input
        label='Radio Example 1'
        type='radio'
        id='radio-example'
      />
      <Input
        label='Radio Example 2'
        type='radio'
        id='radio-example'
      />
      <Input
        label='Checkbox Example'
        type='checkbox'
        id='checkbox-example'
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
        <option>Choose an option</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Input>
      <Input
        label='Color Example'
        type='color'
        id='color-example'
      />
      <Input
        label='Date Example'
        type='date'
        id='date-example'
      />
      <Input
        label='Time Example'
        type='time'
        id='time-example'
      />
      <Input
        label='Date Time Local Example'
        type='datetime-local'
        id='datetime-local-example'
      />
      <Input
        label='Month Example'
        type='month'
        id='month-example'
      />
      <Input
        label='Week Example'
        type='week'
        id='week-example'
      />
      <Input
        label='Number Example'
        type='number'
        id='number-example'
      />
      <Input
        label='File Example'
        type='file'
        id='file-example'
      />
      <Input
        label='Range Example'
        type='range'
        id='range-example'
        min={0}
        max={10}
      />
      <Input
        label='Search Example'
        type='search'
        id='search-example'
      />
      <Input
        label='URL Example'
        type='url'
        id='url-example'
      />

      <Button type="submit">
        Submit
      </Button>
      <Button className='ms-1' type="Reset">
        Reset
      </Button>
    </Form>
  )
}
