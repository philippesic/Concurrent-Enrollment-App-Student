import React from 'react'
import Utils, { Hooks, ObjectInspector, Thumbnail } from '../utils'
import Table from 'react-bootstrap/Table'

export default function Country({ id, close }) {
  const db = Hooks.useDatabase('sample_countries', 'countries')
  const [country, setCountry] = React.useState()

  const fetchCountry = async () => {
    const data = await db.findOne({ _id: id })
    setCountry(data)
  }

  Utils.onMount(fetchCountry)

  if (!country) return

  const name = country.name.common
  const capital = country.capital ? country.capital[0] : 'None'
  const pop = country.population.toLocaleString('en-US')
  const lang = country.languages ? Object.values(country.languages).toString() : 'N/A'
  const currencies = country.currencies && Object.keys(country.currencies)
  const map = country.maps?.googleMaps

  return (
    <>
      <div className='text-center'>
        <div className='btn mb-3' onClick={close}> close </div>
        <h3>{name} ({country.cca3}) </h3>
        <Thumbnail src={country.flags?.png} />
        <Table bordered hover>
          <tbody>
            <tr>
              <td>Official name</td>
              <td>{country.name.official}</td>
            </tr>
            <tr>
              <td>Capital</td>
              <td>{capital}</td>
            </tr>
            <tr>
              <td>Population</td>
              <td>{pop}</td>
            </tr>
            <tr>
              <td>Language(s)</td>
              <td>{lang}</td>
            </tr>
            <tr>
              <td>Currencies</td>
              <td>
                {currencies && currencies.map((item, index) => (
                  <div key='index'>
                    {item} - {country.currencies[item].name} (
                    {country.currencies[item].symbol})
                  </div>
                ))}
              </td>
            </tr>
            <tr>
              <td>Map</td>
              <td>{map}``</td>
            </tr>
          </tbody>
        </Table>

      </div>
      <div><ObjectInspector data={country} /></div>
    </>
  )
}