import React from 'react'
import './Profile.css'
import {Image, EnvelopeFill, Card, Button} from 'react-bootstrap'
import JobForm from './JobForm'
import {Link} from 'react-router-dom'
import { PencilSquare } from 'react-bootstrap-icons';

import profpic from '../assets/profile-pic-icon-square.png'
import pfp2 from '../assets/opulent-profile-square-07.jpg'

export default class Profile extends React.Component{
    constructor(props){
        console.log(props.user);
        console.log(props.user);
        super(props);
        this.state = {
        }
    }


    render(){
        return (
            <div className="profile-container">
                <Card className="half-green-background">
                    <Card.Body className="profile-header">
                        <h3>Joe Schmoe</h3>
                        <h6>Columbus, OH</h6>
                        <p style={{marginBottom: 0}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </Card.Body>
                    <img src={pfp2} className="absolute-pfp"></img>
                    <div className="profile-button-abs">
                        <Button variant="outline-success">Message Me</Button>
                        <Link to='update-profile'><Button variant="outline-success" style={{marginLeft: '.75rem'}}>Edit Profile</Button></Link>
                        {/* <div> <PencilSquare color="#28a745" size={36} /> </div> */}
                    </div>
                </Card>

                <Card style={{marginTop: '1.25rem'}}>
                    <Card.Header>
                        <h5 style={{margin: 0}}>Active Service Events</h5>
                        <Link to= '/create-job'><h7 style={{display:'inline-block', position:'relative', float:'right'}}> Add A new Post</h7></Link>
                    </Card.Header>
                    <Card.Body>
                        This user currently has no active service events.
                    </Card.Body>
                </Card>

                <Card style={{marginTop: '1.25rem'}}>
                    <Card.Header>
                        <h5 style={{margin: 0}}>Past Sponsorships</h5>
                    </Card.Header>
                    <Card.Body>
                        This user currently has no previous sponsorships.
                    </Card.Body>
                </Card>
            </div>
        );

    }
}
<p><a href='/create-job'> Create New Post</a></p>