import React from 'react'
import {Button} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import myimg from "../assets/IMG_4243c.jpg"

export default class DetailedPost extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const post = this.props.post;
        if (!post) return (<h3>Please select a post.</h3>);
        return(
            <div>
                <h1>{post.title}</h1>
                <a href="/" className="username-linked"> {post.name} </a>
                <div> {post.description} </div>
                <Button variant="Link">Message Me</Button>
                <Button variant="Link">Sponsor Me</Button>
            </div>
        );
    }
}