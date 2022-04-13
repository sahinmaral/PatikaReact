import React , {useState} from 'react'
import '../styles.css'
import {sendMessage} from '../socketApi'
import {useChat} from '../context/ChatContext'

function ChatForm() {

  const [message, setMessage] = useState("");

  const {setMessages} = useChat()

  const handleSubmit = (event)=> {
    event.preventDefault()

    setMessages((prevState)=>[...prevState,{message, fromMe:true}])
    sendMessage(message)
    
    setMessage('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className='textInput' 
        onChange={(event)=>setMessage(event.target.value)}
        value={message} />
      </form>
    </div>
  )
}

export default ChatForm