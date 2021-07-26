import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./ChatScreen.css" ;

function ChatScreen() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Ellen",
            image : "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            message: "Whats up <3",
        },
        {
            name: "Ellen",
            image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            message: "Hows it going!",
        },
        {
            message: "Hi!! How are you Ellen!",
        },
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
           <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 20/08/21</p>
           {messages.map(message => (
               message.name ? (
                    <div className="chatScreen__message">
                    <Avatar 
                            classname="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
               ) : (
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
               )
               
           ))}
      
            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange = {(e) => setInput(e.target.value)} 
                    className="chatScreen__inputField"
                    type="text" 
                    placeholder="Type a message..." 
                />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">Send</button>

            </form>
 

        </div>
    )
}

export default ChatScreen
