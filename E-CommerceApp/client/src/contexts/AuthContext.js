import React, { useState, createContext, useEffect, useContext } from 'react'
import { fetchLogout, fetchMe } from '../api';
import { Flex, Spinner } from '@chakra-ui/react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        (async () => {
            try {
                const me = await fetchMe()

                setLoggedIn(true)
                setUser(me)
                setLoading(false)

            } catch (error) {
                setLoading(false)
            }
        })()

    }, []);

    const login = (data) => {
        setLoggedIn(true)
        setUser(data.user)

        localStorage.setItem('access-token', data.accessToken)
        localStorage.setItem('refresh-token', data.refreshToken)
    }

    const logout = async(callback) => {

        setLoggedIn(false)
        setUser(null)

        await fetchLogout()

        localStorage.removeItem('access-token')
        localStorage.removeItem('refresh-token')

        callback()
    }

    const values = {
        loggedIn, user, login , logout
    }

    if (loading) {
        return <Flex justifyContent='center' alignItems='center' height='100vh'>
            <Spinner thickness='4px' emptyColor='gray.200' size='xl' color='red'></Spinner>
        </Flex>
    }

    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

