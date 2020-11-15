import React from 'react';
import './Messages.css'
import { ListGroup } from 'react-bootstrap';

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [
                {
                    name: 'Mark',
                    messages: [
                        {
                            sent: true,
                            msg: 'hey how have you been? Ive been looking for a great service opportunity and would love to blah blah blah',
                        },
                        {
                            sent: false,
                            msg: 'hello',
                        },
                        {
                            sent: true,
                            msg: 'whats your name?',
                        },

                    ]
                },
                {
                    name: 'Dan',
                    messages: [
                        {
                            sent: true,
                            msg: 'hello',
                        },
                        {
                            sent: false,
                            msg: 'hello',
                        },
                        {
                            sent: true,
                            msg: 'whats your name?',
                        },

                    ]
                }

            ],
            selected: null,
            message: ""
        }

        this.renderChats = this.renderChats.bind(this);
        this.renderMsgs = this.renderMsgs.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.renderName = this.renderName.bind(this);
    }

    handleClick = async (index) => {
        this.setState({
            selected: index
        });
    }

    renderChats = () => {
        const openMessages = this.state.chats.map((value, index) => {
            return <ListGroup.Item
                key={index}
                onClick={() => {
                    this.handleClick(index);
                }}
                active={index == this.state.selected}
            >{value.name}</ListGroup.Item>
        })
        return openMessages;
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    renderMsgs = () => {
        if (this.state.selected != null) {
            const chat = this.state.chats[this.state.selected];
            const msgs = chat.messages;
            console.log(msgs);
            return msgs.map((value, index) => {
                return <div className={value.sent ? 'right primary' : 'left primary'} key={index}>
                    {value.msg}
                </div>
            })

        } else {
            return 'Select a message';
        }
    }

    renderName = () => {
        if (this.state.selected != null) {
            return <h1>{this.state.chats[this.state.selected].name}</h1>;
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="messages-container">
                <div className="sidebar">
                    <ListGroup>
                        {this.renderChats()}
                    </ListGroup>
                </div>
                <div className="chat">
                    {this.renderName()}
                    {this.renderMsgs()}
                    <input type="text" onChange={this.handleMessageChange}></input>
                </div>
            </div>
        );
    }
}
