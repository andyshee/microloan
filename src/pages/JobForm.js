import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './JobForm.css'
import { postJob } from '../services/api/jobService'

export default class JobForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);

    }

    handleSubmit = (event) => {
        event.preventDefault();
        postJob(this.state)
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
            <div className="form-box">
                <Form>
                    <Form.Group controlId="formPostTitle">
                        <Form.Label>Post Title</Form.Label>
                        <Form.Control as="textarea" rows={1} onChange={this.handleChange} name="postTitle" />
                        <Form.Text >Title here</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formDescription" >
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={this.handleChange} name="description" />
                    </Form.Group>
                    <Form.Group controlId="formImage">
                        <label>Choose photo to upload</label>
                        <input id="file-input" type="file" name="photo" onChange={this.handleFileChange} />
                    </Form.Group>
                    <Button onClick={this.handleSubmit} type="submit"> Submit</Button>
                </Form>
            </div>

        );
    }
}


