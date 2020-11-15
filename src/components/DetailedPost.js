import React from 'react'
import { Button } from 'react-bootstrap'
// import { Image } from 'react-bootstrap'
// import myimg from "../assets/IMG_4243c.jpg"
import './DetailedPost.css'
import pfp2 from '../assets/opulent-profile-square-07.jpg'

export default class DetailedPost extends React.Component {

    numToHrsString(num) {
        const newNum = (Math.round(num * 4) / 4);
        return newNum.toString() + ' hrs';
    }

    getTopPText() {
        try {
            const p = this.props.post;
            const city = 'Columbus, OH';
            const day = p.targetDate.toString().substring(4, 10);
            const time = this.numToHrsString(p.activityLength);
            return <p style={{ margin: 0 }}> {city} &bull; {day} &bull; {time}</p>;
        } catch (error) {
            return null;
        }
    }

    render() {
        const post = this.props.post;
        if (!post) return (<h3>Please select a post.</h3>);
        return (
            <div>
                {this.getTopPText()}
                <h1>{post.title}</h1>
                <div className="flex-div">
                    <img src={pfp2} className="user" style={{ width: '50px', height: '50px' }} ></img>
                    <h4 style={{ margin: 0, marginLeft: '.75rem' }}> {post.name} </h4>
                    <Button variant="outline-success" size="sm" style={{ marginLeft: '.75rem' }}>View Profile</Button>
                </div>
                <div style={{marginTop: '1rem'}}> {post.description} </div>
                <div className="space-around-full">
                    <Button variant="outline-success">Message Me</Button>
                    <Button variant="outline-success" style={{ marginLeft: '1rem' }}>Sponsor Me</Button>
                </div>
            </div>
        );
    }
}