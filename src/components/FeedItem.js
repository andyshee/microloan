import React from 'react';
import { Card } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import myimg from "../assets/profile-pic-icon-square.png"
import './FeedItem.css'

export default class FeedItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card>
                <Card.Header>Franklin Food Pantry</Card.Header>
                <Card.Body className="less-pad-card">
                    <img src={myimg} alt="a" className="user" ></img>
                    <div className="supporting-text">
                        <span className="helper-name">John Doe &bull; Nov 16 &bull; 4 hrs</span>
                        <span className="description">I plan on going to the franklin food pantry Sunday morning to help out.</span>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}
