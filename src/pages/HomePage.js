import React from 'react';
import Listitem from '../components/listitem'
import Detaileditem from '../components/DetailedPost'
import './HomePage.css'
import FeedItem from '../components/FeedItem';
import api from '../services/api/api';
import { Button, Modal } from 'react-bootstrap';


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selectedPost: null,
            pledge: 1
        }

        this.setPost = this.setPost.bind(this);
    }

    componentDidMount() {
        this.setState({ posts: this.getFakePosts() });

        // api.get('openoffers').then(jobs => {
        //     this.setState({posts: jobs.data.offers});
        // });
    }

    getRealPosts() {
        //working get request
        var openjobs;
        openjobs = api.get('openoffers').then(jobs => {
            return jobs.data.offers
        });
    }

    getFakePosts() {
        const posts = [];
        for (let i = 1; i < 12; i++) {
            const p = {
                id: i,
                name: 'John Doe',
                title: 'Franklin Food Pantry ' + i,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                targetDate: new Date(),
                activityLength: 4.5
            };
            posts.push(p);
        }
        return posts;
    }

    setPost(post) {
        this.setState({ selectedPost: post });
    }

    handleClose() {
        this.setState({pledge: null});
    }

    submitPledge() {

    }

    render() {
        const selectedId = this.state.selectedPost && this.state.selectedPost.id;

        return <div className="home-container">
            <div className="sidebar scrolly">
                {this.state.posts.map(p =>
                    <div key={p.id} onClick={() => this.setPost(p)} style={{ cursor: 'pointer' }}>
                        <FeedItem post={p} isSelected={p.id === selectedId} />
                    </div>
                )}
            </div>
            <div className="maincontent scrolly"><Detaileditem post={this.state.selectedPost} /></div>
            <Modal show={this.state.pledge} onHide={() => this.handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleClose()}>
                        Close
                    </Button>
                    <Button variant="success" onClick={() => this.submitPledge()}>
                        Pledge
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>;
    }
}
