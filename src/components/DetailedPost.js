import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
// import { Image } from 'react-bootstrap'
// import myimg from "../assets/IMG_4243c.jpg"
import api from '../services/api/api';
import './DetailedPost.css'
import pfp2 from '../assets/opulent-profile-square-07.jpg'
import firebase from "firebase/app";

export default class DetailedPost extends React.Component {

    state = {
        pledge: null,
        sponsored: false
    }

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

    assignSponsor(e) {
        e.preventDefault();
        console.log('assignSponsor', e);
        console.log('state', this.state);
        api.post('/assign-sponsor', { job: this.props.post, user: firebase.auth().currentUser });
        this.setState({
            pledge: null
        });
        this.props.post.sponsored = true;

        return;
    }

    handleChange = (event) => {
        // console.log('handleChange', event.target.name, event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    onMessageMe() {
        console.log("message me", this.props.post);
    }

    onSponsorMe() {
        const pledge = {
            userId: 4,
            dateCreated: new Date(),
            message: '',
            amount: null,
            postId: this.props.post.id
        };
        this.setState({ pledge });
    }

    handleClose() {
        this.setState({ pledge: null });
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
                <div style={{ marginTop: '.75rem' }}> {post.description} </div>
                <div className="space-around-full">
                    <Button variant="outline-success" onClick={() => this.onMessageMe()}>Message Me</Button>
                    {/* <Button variant="outline-success" onClick={this.assignSponsor.bind(this, post)} style={{ marginLeft: '1rem', backgroundColor: this.state.sponsorButtonColor, color: this.state.sponsorButtonTextColor }}>{this.state.sponsorButtonText}</Button> */}
                    <Button variant={post.sponsored ? 'success' : 'outline-success'} style={{ marginLeft: '1rem' }} onClick={() => this.onSponsorMe()}>
                        {post.sponsored ? 'Sponsored' : 'Sponsor Me'}
                    </Button>
                </div>
                <Modal show={this.state.pledge != null} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sponsor Outreach Opportunity</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={(e) => this.assignSponsor(e)}>
                        <Modal.Body>
                            <Form.Group controlId="pledgeAmount">
                                <Form.Label>Pledge Amount</Form.Label>
                                <Form.Control required type="number" min="0.01" step="0.01" max="2500" onChange={this.handleChange} name="pledgeAmount" />
                                <Form.Text className="text-muted">
                                    Please enter a dollar amount.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="pledgeMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control required as="textarea" rows={3} onChange={this.handleChange} name="pledgeMessage" />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-secondary" onClick={() => this.handleClose()}>
                                Close
                            </Button>
                            {/* <Button variant="success" onClick={() => this.assignSponsor()}>
                            Pledge
                        </Button> */}
                            <Button variant="success" type="submit">
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        );
    }
}