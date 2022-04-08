import React, { useState, useEffect } from 'react'
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'
import axios from 'axios'
import User from './User'

function Users() {

    const [users, setUsers] = useState([])
    const { path, url } = useRouteMatch()
 
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => setUsers(response.data))
    }, [])


    return (
        <div>
            <h1>Users</h1>
            <ul>
                {
                    users.map((user) => {
                        return <li key={user.id}><NavLink activeClassName='nav-active' to={`${url}/${user.id}`}>{user.name}</NavLink></li>
                    })
                }
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a user.</h3>
                </Route>
                <Route path={`${path}/:id`} component={User}>
                    {/* <Topic /> */}
                </Route>
            </Switch>
        </div>
    )
}

export default Users