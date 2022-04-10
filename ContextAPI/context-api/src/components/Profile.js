import React, { useState } from 'react'
import {useUser} from '../context/UserContext'

function Profile() {

    const { user, setUser } = useUser()

    const [loading, setLoading] = useState(false);


    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({ 'id': 1, 'username': 'sahinmaral', 'bio': 'lorem' })
            setLoading(false)
        }, 3000);
    }

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            {!user && (
                <button onClick={handleLogin}>{loading ? 'Loading ...' : 'Login'}</button>
            )}

            {user && (
                <button onClick={handleLogout}>Logout</button>
            )}

            <code>{JSON.stringify(user)}</code>
        </div>
    )
}

export default Profile