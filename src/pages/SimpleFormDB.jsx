import React from 'react'
import Button from 'react-bootstrap/Button'
import { Hooks, Form, Input, DBExplorer } from '../utils'

export default function FavoritesForm() {
  // Use database hook to connect to database collection
  const db = Hooks.useDatabase('team_x', 'favorites')

  const submit = async (data, form) => {
    console.log(data)
    await db.insertOne(data)
    //await db.deleteMany()
    form.reset()
  }

  return (
    <>
      <Form onSubmit={submit} className='mb-3'>
        <h5>Simple Form with Database</h5>
        <div className='mb-3'>
          In this form we insert the new data from the form into a database.
        </div>
        <Input required
          label='Favorite Ice Cream Flavor:'
          type='text'
          id='favoriteIceCream'
        />
        <Input required
          label='Favorite Movie:'
          type='text'
          id='favoriteMovie'
        />
        <Button type="submit">
          Submit
        </Button>
      </Form>
      <div className='mb-3'>
        The <code>DBExplorer</code> component below is a useful debugging tool to help you explore the documents stored in your database. This component is intended to be used when troubleshooting and developing your app.
      </div>
      <DBExplorer className='shadow p-3' db={db} />
    </>
  )
}
