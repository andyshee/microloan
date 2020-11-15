import React from 'react';
import { Card } from 'react-bootstrap'
import myimg from "../assets/profile-pic-icon-square.png"
import pfp2 from '../assets/opulent-profile-square-07.jpg'
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
        const p = this.props.post;
        return (
            <div style={{padding: '.75rem .75rem 0'}}>
                <Card className={this.props.isSelected ? 'green-border' : null}>
                    <Card.Header> {p.postTitle} </Card.Header>
                    <Card.Body className="less-pad-card">
                        <img src={pfp2} className="user" ></img>
                        <div className="supporting-text">
                            <span className="helper-name"> Timmy Turner &bull; Nov 20 &bull; ~3 Hours</span>
                            <span className="description">{p.description}</span>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
//<span className="helper-name">{p.name} &bull; Nov 16 &bull; {this.numToHrsString(p.activityLength)}</span>