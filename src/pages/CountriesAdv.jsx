import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Utils, { Hooks, ErrorAlert, CardButton, Thumbnail } from '../utils'
import Country from './Country'

export default function CountriesAdv() {
  //create database connection 
  const db = Hooks.useDatabase('sample_countries', 'countries')

  //create a state to store countries
  const [items, setItems] = React.useState([])

  // the selected country or null if no country has been selected
  const [selectedCountry, setSelectedCountry] = React.useState(null)

  //fetch specific fields and sort by population decending
  const fetchItems = async () => {
    const options = {
      projection: { name: 1, flags: 1, capital: 1, population: 1, cca3: 1 },
      sort: { population: -1 },
      limit: 24
    }
    const data = await db.fetchAll(options)
    setItems(data)
  }

  //Call fetchItems when component mounts
  Utils.onMount(fetchItems)

  const createComponent = (country, index) => (
    <Col key={index}>
      <CountryCard country={country}
        select={() => setSelectedCountry(country)}
      />
    </Col>
  )

  if (selectedCountry) {
    return (
      <Country
        id={selectedCountry._id}
        close={() => { setSelectedCountry(null) }}
      />
    )
  }

  return (
    <>
      <h5>Countries Cards Demo</h5>
      <div className='mb-3'>
        Click on the card to see country details.
      </div>
      <ErrorAlert error={db.error} />
      <Row className="g-3">
        {items && items.map(createComponent)}
      </Row>
    </>
  )
}

function CountryCard({ country, select }) {
  const name = country.name.common
  const flag = country.flags.png
  const capital = country.capital ? country.capital[0] : 'None'
  const pop = country.population.toLocaleString('en-US')

  return (
    <CardButton style={{ width: '320px' }}
      onClick={select}>
      <Card.Header>
        <Thumbnail src={flag} height={'180px'} />
      </Card.Header>
      <Card.Body>
        <Card.Title>{name} ({country.cca3})</Card.Title>
        <Card.Text>
          Capital: {capital}<br />
          Population: {pop}<br />
        </Card.Text>
      </Card.Body>
    </CardButton>
  )
}

