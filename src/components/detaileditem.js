import React from 'react'
import {Button} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import myimg from "../assets/IMG_4243c.jpg"

export default class Detaileditem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div >
                <h1>Job Title </h1>
                <h3>User Profile Name + Link to Page</h3>
                <h5>Request Amount: $100</h5>
                <div>Volunteer Task Full Description </div>
                <Image width="80%" src={myimg}/>
                <Button variant="Link">Message Me</Button>
                <Button variant="Link">Accept Job</Button>
            </div>
        );
    }
}