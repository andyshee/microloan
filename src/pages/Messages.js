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
                },
                {
                    name: 'Mark',
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
            selected: null
        }

        this.renderChats = this.renderChats.bind(this);
        this.renderMsgs = this.renderMsgs.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = async (index) => {
        // e.preventDefault();
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

    renderMsgs = () => {
        if (this.state.selected != null) {
            const chat = this.state.chats[this.state.selected];
            const name = chat.name;
            const msgs = chat.messages;
            console.log(msgs);
            return msgs.map((value, index) => {
                return <div className={value.sent ? 'right' : 'left'} key={index}>
                    {value.msg}
                </div>
            })

        } else {
            return 'Select a message';
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
                    {this.renderMsgs()}
                </div>
            </div>
        );
    }
}
