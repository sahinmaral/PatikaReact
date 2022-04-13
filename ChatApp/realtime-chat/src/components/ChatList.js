import React from 'react'
import "../styles.css";
import {useChat} from '../context/ChatContext'
import ChatItem from './ChatItem'
import ScrollableFeed from 'react-scrollable-feed'

function ChatList() {

  const {messages} = useChat()

  return (
    <div className='chatlist'>
        <ScrollableFeed forceScroll={true}>
        {
          messages.map((message,index)=>{
            return <ChatItem 
            item={message}
            key={index}/>
          })
        }
        </ScrollableFeed>
    </div>
  )
}

export default ChatList