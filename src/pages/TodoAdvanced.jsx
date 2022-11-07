import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import Utils, { Hooks, Form, Input, ErrorAlert } from '../utils'

export default function TodoExample() {
  const db = Hooks.useDatabase('team_x', 'todo_items')
  const [items, setItems] = React.useState([])

  const refreshItems = async () => {
    const data = await db.fetchAll()
    setItems(data)
  }

  Utils.onMount(refreshItems)

  const insertItem = async (value) => {
    const item = { text: value, complete: false, timestamp: Date.now() }
    await db.insertOne(item)
    refreshItems()
  }

  const deleteItem = async (item) => {
    await db.deleteOne(item)
    refreshItems()
  }

  const updateItem = async (item, set) => {
    await db.updateOne(item, set)
    refreshItems()
  }

  const createComponent = (item, index) => (
    <TodoItem key={item._id} item={item}
      remove={deleteItem} update={updateItem} />
  )

  return (
    <>
      <ErrorAlert error={db.error} />
      <h5>Advanced Todo List</h5>
      {items && items.map(createComponent)}
      <TodoInput submit={insertItem} />
    </>
  )
}

function TodoInput({ submit, text }) {
  const [disabled, setDisabled] = React.useState(false)

  const handleSubmit = async (data, form) => {
    const text = data['todoText']
    if (text && text.length > 0) {
      setDisabled(true)
      await submit(text)
      form.reset()
      setDisabled(false)
    }
  }

  return (
    <Form className={'col m-0'} onSubmit={handleSubmit}>
      <Input type='text' className='m-0'
        disabled={disabled}
        placeholder='Enter todo item'
        defaultValue={text}
        id='todoText'
      />
    </Form>
  )
}


function TodoItem({ item, remove, update }) {
  const complete = item.complete
  const muted = complete ? 'text-decoration-line-through text-muted' : ''
  const [editing, setEditing] = React.useState(false)

  const updateText = async (text) => {
    item.text = text
    item.timestap = Date.now()
    setEditing(false)
    const set = { text: item.text, timestamp: item.timestamp }
    await update(item, set)
  }

  const toggle = async () => {
    item.complete = !item.complete
    const set = { complete: item.complete }
    await update(item, set)
  }

  return (
    <Stack direction='horizontal' className='mb-1'>
      {editing ?
        <TodoInput submit={updateText} text={item.text} />
        :
        <span className={'col mx-2 ' + muted}
          role={complete ? '' : 'button'}
          onClick={() => { if (!complete) setEditing(true) }}>
          {item.text}
        </span>
      }

      <Button disabled={editing}
        variant={complete ? 'white' : 'warning'}
        className='btn-sm mx-1'
        onClick={toggle}>
        {complete ? 'Completed' : 'Incomplete'}
      </Button>

      <Button className='btn-close' onClick={() => remove(item)} />
    </Stack>
  )
}
