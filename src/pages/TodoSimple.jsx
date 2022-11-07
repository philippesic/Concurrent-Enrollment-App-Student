import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import Utils, { Hooks, Form, Input, ErrorAlert } from '../utils'

export default function TodoSimple() {
  const db = Hooks.useDatabase('team_x', 'todo_items')
  const [items, setItems] = React.useState([])

  const refreshItems = async () => {
    const data = await db.fetchAll()
    setItems(data)
  }

  Utils.onMount(refreshItems);

  const insertItem = async (value) => {
    const item = { text: value }
    await db.insertOne(item)
    refreshItems()
  }

  const deleteItem = async (item) => {
    await db.deleteOne(item);
    refreshItems();
  }

  const createComponent = (item) => (
    <TodoItem key={item._id} item={item} remove={deleteItem} />
  )

  return (
    <>
      <ErrorAlert error={db.error} />
      <h5>Simple Todo List</h5>
      {items && items.map(createComponent)}
      <TodoInput submit={insertItem} />
    </>
  )
}


function TodoInput({ submit }) {
  const handleSubmit = async (data, form) => {
    const text = data['todoText']
    if (text && text.length > 0) {
      submit(text)
      form.reset()
    }
  }
  return (
    <Form className={'col m-0'} onSubmit={handleSubmit}>
      <Input type='text' className='m-0'
        placeholder='Enter todo item'
        id='todoText'
      />
    </Form>
  )
}


function TodoItem({ item, remove }) {
  return (
    <Stack direction='horizontal' className='mb-1'>
      <span className={'col mx-2'}>{item.text}</span>
      <Button className='btn-close' onClick={() => remove(item)} />
    </Stack>
  )
}
