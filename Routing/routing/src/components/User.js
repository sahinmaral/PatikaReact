import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'


function User() {

    const { id } = useParams();

    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => setUser(response.data))
    }, [id])


    return (
        <div>
            <h2>User Detail</h2>
            <ul>
                <li>User ID : {user.id}</li>
                <li>User Name : {user.name}</li>
                <li>User Email : {user.email}</li>
                <li>User Phone : {user.phone}</li>
            </ul>

            <button>
                <Link to={`/users/${Number(id) + 1}`}>Next User</Link>
            </button>

        </div>
    )
}

export default User