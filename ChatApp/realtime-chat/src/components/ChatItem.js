import React from 'react'
import "../styles.css";

function ChatItem({item}) {
  return (
    <div className={`chatItem ${item.fromMe ? 'right' : ''}`}>
        {item.message}
    </div>
  )
}

export default ChatItem