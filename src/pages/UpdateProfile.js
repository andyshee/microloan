import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { updateProfile } from '../services/api/profileService'


export default class UpdateProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        updateProfile(this.state)
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleFileChange = (event) => {
        const file = event.target.files[0];
        this.setState({ photo: file })
    };


    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formPostTitle">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control as="textarea" rows={1} onChange={this.handleChange} name="full-name" />
                    </Form.Group>
                    <Form.Group controlId="formPostTitle">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control as="textarea" rows={1} onChange={this.handleChange} name="phone-number" />
                    </Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={2} onChange={this.handleChange} name="address" />
                    <Form.Group>
                        <label>New Profile Pic</label>
                        <input type="file" name="profile-pic" onChange={this.handleFileChange} />
                    </Form.Group>
                    <Button onClick={this.handleSubmit} type="submit"> Submit</Button>
                </Form>
            </div>
        )
    }
}