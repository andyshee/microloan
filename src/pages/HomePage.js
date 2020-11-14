import React from 'react';
import Listitem from '../components/listitem'
import Detaileditem from '../components/DetailedPost'
import './HomePage.css'
import FeedItem from '../components/FeedItem';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selectedPost: null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({posts: this.getFakePosts()});
        }, 300);
    }

    getFakePosts() {
        const posts = [];
        for (let i = 1; i < 12; i++) {
            const p = {
                id: i,
                name: 'John Doe',
                title: 'Franklin Food Pantry',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                targetDate: new Date(),
                activityLength: 4.5
            };
            posts.push(p);
        }
        return posts;
    }

    render() {
        return <div className="home-container">
            <div className="sidebar scrolly">
                {this.state.posts.map(p => 
                    <FeedItem key={p.id} post={p} onClick={() => this.setState({selectedPost: p})} />
                )}
            </div>
            <div className="maincontent scrolly"><Detaileditem post={this.state.selectedPost} /></div>
        </div>;
    }
}
