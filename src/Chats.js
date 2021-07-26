import React from 'react';
import './Chats.css' ;
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name="Sarah"
                message="hey! how are you :)"
                timestamp="35 minutes ago"
                profilePic="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

            />
            <Chat 
                name="Ellen"
                message="Whats up <3 ?"
                timestamp="55 minutes ago"
                profilePic="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                
            />
            <Chat 
                name="Sandra"
                message="Ola!"
                timestamp="3 days ago"
                profilePic="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                
            />
            <Chat 
                name="Natasha"
                message="Oops there is he is..."
                timestamp="1 week ago"
                profilePic="https://images.unsplash.com/photo-1594744803086-b902dd06f88a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                
            />
        </div>
    )
}

export default Chats

