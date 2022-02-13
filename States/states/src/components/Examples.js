import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Examples() {

    const [name, setName] = useState('undefined')
    const [friends, setFriends] = useState(["Ahmet", "Mehmet"])
    const [address, setAddress] = useState({ title: "Istanbul", zipCode: 34899 })
    return (
        <div>
            <h1>Merhaba {name}</h1>
            <button onClick={() => setName('Şahin')}>Click</button>

            <hr />

            {
                friends.map((element) => {
                    return <div key={uuidv4()}>{element}</div>
                })
            }

            <button onClick={() => setFriends([...friends, "Ayşe"])}>Click</button>

            <hr />

            <h3>Adres : {address.title} , {address.zipCode}</h3>

            <button onClick={() => setAddress({ ...address, title: "Ankara" })}>Click</button>

        </div>
    )
}

export default Examples