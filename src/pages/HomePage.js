import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    render() {
        return <div>
            <h1>Homepage</h1>
        </div>;
    }
}
export default HomePage;