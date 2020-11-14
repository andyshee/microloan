import React from 'react';
import {Card} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import myimg from "../assets/IMG_4243c.jpg"
import './FeedItem.css'

export default class FeedItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Card>
                <Card.Header> Job Title</Card.Header>
                <Card.Body>
                    <Card.Text> Amount + beginning description</Card.Text>
                    <img src={myimg} alt="a" className="user" ></img>
                </Card.Body>
            </Card>
        );
    }
}