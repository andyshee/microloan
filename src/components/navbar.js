import React, { Component } from 'react';
import { Navbar, Button, Nav, Form, FormControl } from 'react-bootstrap';
export default class MyNavbar extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/messages">Messages</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        );
    }
}