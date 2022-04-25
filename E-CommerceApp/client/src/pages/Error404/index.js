import React from 'react'
import { Alert, AlertTitle, AlertIcon, AlertDescription } from '@chakra-ui/react'

function Error404() {
  return (
    <div>
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle mr={2}>HTTP 404</AlertTitle>
        <AlertDescription>Page that you are looking for could not found</AlertDescription>
      </Alert>
    </div>
  )
}

export default Error404