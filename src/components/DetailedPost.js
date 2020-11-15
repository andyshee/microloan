import React from 'react'
import {Button} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import myimg from "../assets/IMG_4243c.jpg"
import api from '../services/api/api';


export default class DetailedPost extends React.Component{
    constructor(props){
        super(props)
    }

    sponsorMe(job) {
        console.log(job);
        api.post('/assignsponsor', {job: job });
        return;
    }

    messageMe(){
        console.log("message me");
    }

    render(){
        const post = this.props.post;
        if (!post) return (<h3>Please select a post.</h3>);
        return(
            <div>
                <h1>{post.title}</h1>
                <a href="/" className="username-linked"> {post.name} </a>
                <div> {post.description} </div>
                <Button variant="Button" onClick={this.messageMe.bind(this)}>Message Me</Button>
                <Button variant="Button" onClick={this.sponsorMe.bind(this, post)}>Sponsor Me</Button>
            </div>
        );
    }
}