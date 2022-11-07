import React from 'react'
import { Stack, Accordion } from 'react-bootstrap'

import CollectionList from '../utils/ui/db/CollectionList'
import ErrorAlert from '../utils/ui/ErrorAlert'
import Utils, { Hooks, DBExplorer } from '../utils'

export default function SampleDatabases() {
  const [dbs, setDbs] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [collections, setCollections] = React.useState([])

  const db = Hooks.useDatabase()

  const fetchDbs = async () => {
    const url = 'https://backend.leonyoung.repl.co/api/db/samples'
    const [databases, err] = await Utils.get(url)
    setDbs(databases)
    setError(err)
  }

  Utils.onMount(fetchDbs)

  const changeDatabase = async () => {
    setCollections([])
    db.setCollection(null)
    const collections = await db.list()
    setCollections(collections)
  }

  Utils.onChange(changeDatabase, db.database)

  return (
    <>
      <ErrorAlert error={error} />
      <h5>Sample Databases</h5>
      <Stack direction="horizontal" gap={3} className='align-items-start'>
        <Accordion className='shadow'>
          {dbs && dbs.map((item, i) => (
            <Accordion.Item key={i} eventKey={item.name}
              onClick={() => db.setDatabase(item.name)}>
              <Accordion.Header>{item.name}</Accordion.Header>
              <Accordion.Body className='py-1 pe-1'>
                <CollectionList collections={collections} db={db} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <DBExplorer db={db} />
      </Stack>
    </>
  )
}
