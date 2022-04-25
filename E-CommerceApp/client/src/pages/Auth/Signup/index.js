import React from 'react'
import { Flex, Box, Heading, Button, FormLabel, Input, Alert, AlertIcon } from '@chakra-ui/react'
import { useFormik } from 'formik'
import validations from './validations'
import { fetchRegister } from "../../../api"
import { useAuth } from '../../../contexts/AuthContext'
import {useNavigate} from 'react-router-dom'

function Signup() {

  const { login } = useAuth()

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: ""
    },
    onSubmit: async (values, bag) => {
      try {
        const registerResponse = await fetchRegister({ email: values.email, password: values.password })
        login(registerResponse)

        navigate('/profile')
      } catch (e) {
        bag.setErrors({ general: e.response.data.message })
      }
    },
    validationSchema: validations
  })

  return (
    <div>
      <Flex align='center' width='full' justifyContent='center'>
        <Box pt='10'>
          <Box textAlign='center' mb='5'>
            <Heading>Sign Up</Heading>
          </Box>
          <Box>
            {
              formik.errors.general && (
                <Alert status='error'>
                  <AlertIcon />
                  {formik.errors.general}
                </Alert>
              )
            }
          </Box>

          <Box my='5' textAlign='left'>

            <form onSubmit={formik.handleSubmit}>

              <FormLabel>E-mail</FormLabel>
              <Input name='email'
                value={formik.values.email}
                isInvalid={formik.touched.email && formik.errors.email}
                onChange={formik.handleChange} onBlur={formik.handleBlur}
              />

              <FormLabel>Password</FormLabel>
              <Input name='password'
                value={formik.values.password}
                isInvalid={formik.touched.password && formik.errors.password}
                onChange={formik.handleChange} onBlur={formik.handleBlur}
                type='password'
              />

              <FormLabel>Password Confirmation</FormLabel>
              <Input name='passwordConfirm' type='password'
                value={formik.values.passwordConfirm}
                isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                onChange={formik.handleChange} onBlur={formik.handleBlur}
              />

              <Button mt='4' width='full' type='submit'>Sign Up</Button>

            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signup