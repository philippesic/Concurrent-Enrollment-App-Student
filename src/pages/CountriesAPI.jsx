import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Hooks, ObjectInspector } from '../utils'

export default function Countries() {
  const [countries, error] = Hooks.useFetchOnMount('https://restcountries.com/v3.1/all')

  const createComponent = (country, index) => (
    <Col key={index}>
      <CountryCard country={country} />
    </Col>
  )

  return (
    <>
      <h5>Countries API</h5>

      <div className='mb-3'>Data is fetched from https://restcountries.com</div>

      <Row className="g-3">
        {countries && countries.map(createComponent)}
      </Row>

      <ObjectInspector data={error} />
      <ObjectInspector data={countries} />
    </>
  )
}

function CountryCard({ country }) {
  const name = country.name.common
  const flag = country.flags.png
  const capital = country.capital ? country.capital[0] : 'None'
  const pop = country.population.toLocaleString('en-US')
  const lang = country.languages ? Object.values(country.languages).toString() : 'N/A'
  const map = country.maps.googleMaps
  const currency = country.currencies.toString

  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img style={{ height: '12rem' }} src={flag} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Capital: {capital}<br />
          Population: {pop}<br />
          Language(s): {lang}<br />
          <Card.Link href={map}>map</Card.Link>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
