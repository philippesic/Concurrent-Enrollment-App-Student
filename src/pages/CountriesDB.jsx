import React from 'react'
import Utils, { Hooks, ObjectInspector } from '../utils'

export default function Countries() {
  //1. Use database hook to connect to 'sample_countries/countries' 
  const db = Hooks.useDatabase('sample_countries', 'countries')

  //2. create state to store fetched countries
  const [items, setItems] = React.useState([])

  //3. function that fetches countries from database and sets the state
  const fetchItems = async () => {
    const data = await db.fetchAll()
    setItems(data)
  }

  //4. Call fetchItems when component mounts
  Utils.onMount(fetchItems)

  return (
    <>
      <h5> Example Fetching Countries from DB</h5>
      <div className='mb-1'>This examples fetches all countries from the 'sample_countries' database. </div>
      <ol className='mb-1'>
        <li>Connect to the 'sample_countries' database using <code>Hooks.useDatabase(database, collection)</code>.</li>
        <li>Create a state to store the countries using <code>React.useState()</code>.</li>
        <li>Create an <code>async</code> callback function to fetch the countries and then sets the state.</li>
        <li>Use <code>Utils.onMount(callback)</code> to call your fetch function when the component mounts</li>
      </ol>
      <div className='mb-3'>This example uses the <code>ObjectInspector</code> component to show the database results.</div>

      <ObjectInspector data={items} />
    </>
  )
}
