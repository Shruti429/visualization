import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


// bootstrap navbar
const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Visualization Dashboard</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header