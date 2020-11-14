import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Listitem from '../components/listitem'
import Detaileditem from '../components/detaileditem'
import './HomePage.css'

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    render() {
        return <div>
            <h1>Homepage</h1>
            <div className="sidebar">
                <div><Listitem/></div>
                <div><Detaileditem/></div>
            </div>
        </div>;
    }
}