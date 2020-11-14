import React from 'react'
import {Button, Form} from 'react-bootstrap'
import './VolunteerRequest.css'

export default class VolunteerRequest extends React.Component{
    constructor(props){
        super(props)
    }

    formData = {
        title: "",
        description: ""
    }


    handleSubmit = (e) => {
        console.log(e)
    }

    


    render(){
        return(
            <div className="form-box">
                <Form>
                    <Form.Group controlId="formPostTitle">
                        <Form.Label>Post Title</Form.Label>
                        <Form.Control as="textarea" rows={1}/>
                        <Form.Text >Title here</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control as="textarea" rows={3}/>
                    </Form.Group>
                    <Form.Group controlId="formImage"> 
                        <Form.File id="Image" label="Pictures associated with request"/>
                    </Form.Group>
<<<<<<< HEAD
                    <Button onClick={(e)=> {console.log(e)}} type="submit"> Submit</Button>
=======
                    <Button type="submit"> Submit</Button>
>>>>>>> 4e93b54a30d73d1e3e0fcb0596690b6ad02c54b5
                </Form> 
            </div>

        );
    }
}


