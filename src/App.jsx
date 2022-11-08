import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Hooks, Documentation } from './utils'
import CCESteps from './pages/student/CCEsteps'


import Authenticator from './components/Authenticator'

/*** Pages ***/
import Home from './pages/Home'
import InputExamples from './pages/InputExamples'
import TodoSimple from './pages/TodoSimple'
import TodoAdvanced from './pages/TodoAdvanced'
import SampleDatabases from './pages/SampleDatabases'
import AddressForm from './pages/AddressForm'
import SimpleFormDB from './pages/SimpleFormDB'
import CountriesDB from './pages/CountriesDB'
import CountriesBasic from './pages/CountriesBasic'
import CountriesAdv from './pages/CountriesAdv'
import SoundExample from './pages/SoundPage'
import KeyPress from './pages/KeyPress'
import Toggle from './pages/ToggleExample'
import Timer from './pages/Timer'
import ProgressBar from './pages/ProgressBar'

export default function App() {
  const { user } = Hooks.useAuth()
  const [page, setPage] = React.useState(<Home />)

  const select = (key) => {
    if (key === '/') { setPage(<Home />) }
    else if (key === '/members') { setPage(<CountriesAdv />) }
    else if (key === '/inputs') { setPage(<InputExamples />) }
    else if (key === '/address') { setPage(<AddressForm />) }
    else if (key === '/dbform') { setPage(<SimpleFormDB />) }
    else if (key === '/todo1') { setPage(<TodoSimple />) }
    else if (key === '/todo2') { setPage(<TodoAdvanced />) }
    else if (key === '/sampledb') { setPage(<SampleDatabases />) }
    else if (key === '/fetchdb') { setPage(<CountriesDB />) }
    else if (key === '/countries1') { setPage(<CountriesBasic />) }
    else if (key === '/countries2') { setPage(<CountriesAdv />) }
    else if (key === '/documentation') { setPage(<Documentation />) }
    else if (key === '/sound-example') { setPage(<SoundExample />) }
    else if (key === '/key-press') { setPage(<KeyPress />) }
    else if (key === '/toggle') { setPage(<Toggle />) }
    else if (key === '/timer') { setPage(<Timer />) }
    else if (key === '/progress-bar') { setPage(<ProgressBar />) }
    else { setPage(<h5>{key} is not a valid page.</h5>) }
  }

  return (
    <>
      <Navbar bg='light'>
        <Container>
          <Nav defaultActiveKey='/' onSelect={select} className='me-auto'>
            <Nav.Link eventKey='/'>🏠 Home</Nav.Link>
            <Nav.Link eventKey='/documentation'>
              Documentation
            </Nav.Link>
            {user && <Nav.Link eventKey='/documentation'>
              Members
            </Nav.Link>}
            <NavDropdown title="Examples">
              <NavDropdown.Item eventKey='/inputs'>
                Input Types
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='/address'>
                Address Form
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='/dbform'>
                Simple Form with DB
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='/todo1'>
                Todo Simple
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='/todo2'>
                Todo Advanced
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='/sampledb'>
                Explore Sample Databases
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='/fetchdb'>
                Fetch Countries from DB
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='/countries1'>
                Country Cards (Basic)
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='/countries2'>
                Country Cards (Adv.)
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='/sound-example'>
                Sound Example
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='/key-press'>
                Key Press Example
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='/toggle'>
                Toggle
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='/timer'>
                Timer
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='/progress-bar'>
                Progress Bar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="justify-content-end">
            <Authenticator />
          </Nav>
        </Container>
      </Navbar>

      <Container className='my-3 center-text'>
        {page}
      </Container>
    </>
  )
}
