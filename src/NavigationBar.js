import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Route } from 'react-router-dom'
import Analytics from './components/Analytics'
// import scheduleDrive from './components/scheduleDrive'
import schedulePage from './components/schedulePage'


const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand > <b>HTD</b> </Navbar.Brand>
                    <Nav className="d-flex justify-content-md-center ">
                        <Nav.Link > <Link to='/' className='text' > <b > Analytics </b> </Link> </Nav.Link>
                        <Nav.Link > <Link to='/schedulePage' className='text'><b> Schedule Drive </b> </Link> </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Route exact path="/" component={Analytics} />
            <Route path="/schedulePage" component={schedulePage} />

        </div>
    )
}

export default NavigationBar
