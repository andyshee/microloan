import React from 'react';
import Detaileditem from '../components/DetailedPost'
import './HomePage.css'
import FeedItem from '../components/FeedItem';
import { Button, Modal } from 'react-bootstrap';
import { getOpenJobs } from '../services/api/jobService';


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selectedPost: null
        }

        this.setPost = this.setPost.bind(this);
    }

    componentDidMount() {
        this.populatePosts();
    }
    setPost(post) {
        this.setState({ selectedPost: post });
    }

    handleClose() {
        this.setState({pledge: null});
    }

    populatePosts(){
        var processedPosts =[];
        getOpenJobs().then( res => {
            var openJobs = res.data;
            var date;
            var holder;
            var dateObj;
            for(let i =0; i<25 && i<openJobs.length-1; i++){
                dateObj = new Date(openJobs[i].dateCreated)
                date = ""+ dateObj.getMonth()+ " "+dateObj.getDate()+ " "+dateObj.getFullYear()
                holder = {
                    postTitle: openJobs[i].postTitle,
                    description: openJobs[i].description,
                    targetDate: date,
                    activityLength: 4,
                    name: 'John Doe',
                    id: i,
                    dateCreated: date
                };
                processedPosts.push(holder);
            }
            console.log(processedPosts)
            this.setState({posts: processedPosts})
            console.log("openJobs:"+ openJobs)
            console.log(this.state)
        }).catch( err => {
            console.log(err)
        })
        
    }

    render() {
        
        const selectedId = this.state.selectedPost && this.state.selectedPost.id;
        return <div  className="home-container">
            <div className="sidebar scrolly">
                {this.state.posts.map(p =>
                    <div key={p.id} onClick={() => this.setPost(p)} style={{ cursor: 'pointer' }}>
                        <FeedItem  post={p} isSelected={p.id === selectedId} />
                    </div>
                )}
            </div>
            <div className="maincontent scrolly"><Detaileditem post={this.state.selectedPost} /></div>
        </div>;
    }
}
