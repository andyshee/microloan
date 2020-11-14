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
        const p = this.props.post;
        return (
            <div style={{padding: '.75rem .75rem 0'}}>
                <Card className={this.props.isSelected ? 'green-border' : null}>
                    <Card.Header> {p.title} </Card.Header>
                    <Card.Body className="less-pad-card">
                        <img src={myimg} alt="a" className="user" ></img>
                        <div className="supporting-text">
                            <span className="helper-name">{p.name} &bull; Nov 16 &bull; {this.numToHrsString(p.activityLength)}</span>
                            <span className="description">{p.description}</span>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
