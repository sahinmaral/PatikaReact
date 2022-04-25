import React from 'react'
import {useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext'
import {Text , Button} from '@chakra-ui/react'

function Profile() {

    const { user,logout } = useAuth()
    const navigate = useNavigate()

    return (
        <div>
            <Text fontSize='22'>Profile : </Text>
            <code>
                {JSON.stringify(user)}
            </code>

            <br />
            <br />
            <Button colorScheme='pink' size='sm' onClick={async () => logout(() => {
              navigate('/')
            })}>
              Logout
            </Button>
        </div>
    )
}

export default Profile