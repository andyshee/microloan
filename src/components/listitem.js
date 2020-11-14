import React from 'react'
import {ListGroup} from 'react-bootstrap'
import Feeditem from './feeditem.js'

export default class Listitem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ListGroup>
                <ListGroup.item>sup</ListGroup.item>
              
            </ListGroup>
        )
    }
}

