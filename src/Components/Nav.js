import { Navbar, Container } from 'react-bootstrap'

export default function Nav () {
    return (
        <Navbar className="bg-dark">
            <Container>
                <Navbar.Brand className='text-light'>Asanda</Navbar.Brand>
            </Container>
        </Navbar>
    )
}