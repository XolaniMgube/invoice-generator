import { Navbar, Container } from 'react-bootstrap'

export default function Nav () {
    return (
        <Navbar className="bg-dark">
            <Container>
                <Navbar.Brand className='text-light'>Invoice Calculator</Navbar.Brand>
            </Container>
        </Navbar>
    )
}