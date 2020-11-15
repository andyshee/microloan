import React from 'react';
import './Messages.css'
import { ListGroup } from 'react-bootstrap';
import { sendMessage } from '../services/api/messagesService';

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
            msgToSend: ""
        }

        this.renderChats = this.renderChats.bind(this);
        this.renderMsgs = this.renderMsgs.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.renderName = this.renderName.bind(this);
        this.handleKeystrokeEnter = this.handleKeystrokeEnter.bind(this);
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

    handleKeystrokeEnter = (event) => {
        if (event.key === 'Enter') {
            const msg = this.state.msgToSend;
            // do something w this

            this.sendMessage(msg);
            // send user data as well.

            this.setState({
                msgToSend: ""
            })
        }
    }

    handleMessageChange = (event) => {
        if (event.key === 'Enter') return;
        this.setState({
            msgToSend: event.target.value
        })
    }

    renderMsgs = () => {
        if (this.state.selected != null) {
            const chat = this.state.chats[this.state.selected];
            const msgs = chat.messages;
            //console.log(msgs);
            return msgs.map((value, index) => {
                return <div className={value.sent ? 'right primary' : 'left primary'} key={index}>
                    {value.msg}
                </div>
            })

        } else {
            return '';
        }
    }

    renderName = () => {
        if (this.state.selected != null) {
            return <h1>{this.state.chats[this.state.selected].name}</h1>;
        } else {
            return null;
        }
    }

    renderMsgInput = () => {
        const active = this.state.selected != null;
        return <input
            type="text"
            value={this.state.msgToSend}
            onChange={this.handleMessageChange}
            onKeyPress={this.handleKeystrokeEnter}
            disabled={!active}
        ></input>
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
                    {this.renderMsgInput()}
                </div>
            </div>
        );
    }
}
