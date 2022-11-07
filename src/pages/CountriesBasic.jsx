import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Utils, { Hooks, ErrorAlert, Thumbnail } from '../utils'

export default function CountriesBasic() {
  //create database connection 
  const db = Hooks.useDatabase('sample_countries', 'countries')

  //create a state to store countries
  const [items, setItems] = React.useState([])

  //fetch name and flag of all countries from database
  const fetchItems = async () => {
    const projection = { name: 1, flags: 1 }
    const data = await db.fetchAll({ projection })
    setItems(data)
  }

  //Call fetchItems when component mounts
  Utils.onMount(fetchItems)

  const createComponent = (country, index) => (
    <Col key={index}>
      <CountryCard country={country} />
    </Col>
  )

  return (
    <>
      <h5>Countries Cards (Basic) Demo</h5>
      <div className='mb-3'>
        Data is fetched from the sample_countries database.
      </div>
      <ErrorAlert error={db.error} />
      <Row className="g-3">
        {items && items.map(createComponent)}
      </Row>
    </>
  )
}

function CountryCard({ country }) {
  const name = country.name.common
  const flag = country.flags.png

  return (
    <>
      <Card style={{ width: '320px' }}>
        <Card.Header>
          <Thumbnail src={flag} height={'180px'} />
        </Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}
