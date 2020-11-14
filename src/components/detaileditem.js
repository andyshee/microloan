import React from 'react'
import Button from 'react-bootstrap'
import Image from 'react-bootstrap'

export default class Detaileditem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Job Title </h1>
                <h3>User Profile Name + Link to Page</h3>
                <h5>Request Amount: $100</h5>
                <div>Volunteer Task Full Description </div>
                <Image src="IMG_4243c.jpg"/>
                <Button variant="Link">Message Me</Button>
                <Button variant="Link">Accept Job</Button>
            </div>
        );
    }
}