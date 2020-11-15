import React from 'react'
import { Button } from 'react-bootstrap'
// import { Image } from 'react-bootstrap'
// import myimg from "../assets/IMG_4243c.jpg"
import './DetailedPost.css'
import pfp2 from '../assets/opulent-profile-square-07.jpg'

export default class DetailedPost extends React.Component {

    render() {
        const post = this.props.post;
        if (!post) return (<h3>Please select a post.</h3>);
        return (
            <div>
                <h1>{post.title}</h1>
                <div className="flex-div">
                    <img src={pfp2} className="user" ></img>
                    <h4 style={{marginLeft: '1rem'}}> {post.name} </h4>
                </div>
                <div> {post.description} </div>
                <div className="space-around-full">
                    <Button variant="outline-success">Message Me</Button>
                    <Button variant="outline-success" style={{ marginLeft: '1rem' }}>Sponsor Me</Button>
                </div>
            </div>
        );
    }
}