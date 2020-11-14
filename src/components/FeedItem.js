import React from 'react';
import { Card } from 'react-bootstrap'
import myimg from "../assets/profile-pic-icon-square.png"
import './FeedItem.css'

export default class FeedItem extends React.Component {
    constructor(props) {
        super(props)
    }

    numToHrsString(num) {
        const newNum = (Math.round(num * 4) / 4);
        return newNum.toString() + ' hrs';
    }

    render() {
        return (
            <div style={{padding: '.75rem .75rem 0'}}>
                <Card>
                    <Card.Header>Franklin Food Pantry</Card.Header>
                    <Card.Body className="less-pad-card">
                        <img src={myimg} alt="a" className="user" ></img>
                        <div className="supporting-text">
                            <span className="helper-name">{this.props.post.name} &bull; Nov 16 &bull; {this.numToHrsString(this.props.post.activityLength)}</span>
                            <span className="description">{this.props.post.description}</span>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
