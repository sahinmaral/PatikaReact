import { useState, useEffect } from 'react'
import './style.css'

import List from './List'
import Form from './Form'

function Contacts() {

    const [contacts, setContacts] = useState([
        {fullName:'Şahin MARAL',phoneNumber:'12345'},
        {fullName:'Ali MARAL',phoneNumber:'3452'}
    ])

    useEffect(()=>{
    },[contacts])

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List addedContacts={contacts}/>
            <Form addContact={setContacts} addedContacts={contacts}/>
        </div>
    )
}

export default Contacts