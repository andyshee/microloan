import React from 'react';
import Card from 'react-bootstrap'

export default class Feeditem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Card>
                <Card.Header> Job Title</Card.Header>
                <Card.Body>
                    <Card.Text> Job Description </Card.Text>
                    <Card.Img src= "IMG_4243c.jpg"></Card.Img>
                </Card.Body>
            </Card>
        );
    }
}