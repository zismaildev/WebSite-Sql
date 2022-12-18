// Conponents
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Logo from '../logo.svg'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

export default function NewNav() {

    const [username, setUsername] = useState('')

    // Check token
    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch('http://localhost:7777/authen', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'ok') {
                    setUsername(data.username)
                    // alert('authen sucess')
                } else {
                    alert('authen failed')
                    localStorage.removeItem('token')
                    window.location = '/login'
                }
                console.log(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])


    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('token')
        window.location = '/login'
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Zismail-Dev
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/shop">Shop</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                        <Nav className="mr-auto">
                            <NavDropdown title={username ? `${username}` : 'please login'} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Payment</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Seting</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogout} style={{ color: "red" }}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
