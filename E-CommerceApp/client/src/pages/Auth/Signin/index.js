import React from 'react'
import { useFormik } from 'formik'
import { Flex, Box, Heading, Button, FormLabel, Input, Alert, AlertIcon, Text } from '@chakra-ui/react'
import validations from './validations'
import { useAuth } from '../../../contexts/AuthContext'
import { fetchLogin } from "../../../api"
import { Link , useNavigate} from 'react-router-dom'

function Signin() {

  const { login } = useAuth()

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values, bag) => {
      try {
        const loginResponse = await fetchLogin({ email: values.email, password: values.password })
        login(loginResponse)

        navigate("/profile")
      } catch (e) {
        bag.setErrors({ general: e.response.data.message })
      }
    },
    validationSchema: validations
  })

  return (
    <div>
      <div>
        <Flex align='center' width='full' justifyContent='center'>
          <Box pt='10'>
            <Box textAlign='center' mb='5'>
              <Heading>Sign In</Heading>
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

                <Button my='4' width='full' type='submit'>Sign In</Button>

                <Text>
                  Don't have account ?{' '}
                  <Link to='/signup' style={{ color: '#319795', fontWeight: 'bold' }}>
                    You can sign up here
                  </Link>
                </Text>

              </form>
            </Box>
          </Box>
        </Flex>
      </div>
    </div>
  )
}

export default Signin