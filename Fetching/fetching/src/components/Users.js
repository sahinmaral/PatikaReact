import { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setUsers(data)
    //         })
    //         .catch((error) => console.log(error))
    //         .finally(() => setIsLoading(false))
    // }, [])

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <div>
            <h1>Users</h1>

            {isLoading && <div>Loading ...</div>}

            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            {user.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users