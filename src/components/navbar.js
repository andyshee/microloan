import React, { Component } from 'react';
import { Navbar, Button, Nav, Form, FormControl } from 'react-bootstrap';

import logo from '../assets/tree.jpg';
export default class MyNavbar extends Component {
    constructor(props) {
        super(props);
        this.UserEntry = this.UserEntry.bind(this);
    }

    /**
    * paries between sign in and sign out
    */
    UserEntry() {
        if (this.props.user) {
            return <Nav.Link href="/login" onClick={this.props.signOut}>Log Out</Nav.Link>
        }
        return <Nav.Link href="/login">Login</Nav.Link>
    }

    render() {
        return (
            <Navbar bg="success" variant="dark">
                <Navbar.Brand href="#home"><img style={{width:"40px"}} src={logo}></img></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/messages">Messages</Nav.Link>
                    {this.UserEntry()}
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        );
    }
}

