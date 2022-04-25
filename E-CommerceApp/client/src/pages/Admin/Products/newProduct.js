import React from 'react'
import { addProduct } from '../../../api'
import { Formik, FieldArray } from 'formik'
import newProductScheme from './validations'
import { useMutation, useQueryClient } from 'react-query'
import { message } from 'antd';
import { Text, Box, FormControl, FormLabel, Input, Textarea, Button, Flex } from '@chakra-ui/react'

function NewProduct() {

    const queryClient = useQueryClient()

    const newProductMutation = useMutation(addProduct, {
        onSuccess: () => queryClient.invalidateQueries('admin:products')
    })

    const handleSubmit = async (values, bag) => {
        message.loading({ content: 'Loading...', key: 'product_add' })

        const newValues = {
            ...values,
            photos: JSON.stringify(values.photos)
        }


        newProductMutation.mutate(newValues, {
            onSuccess: () => {
                message.success({ content: 'Product successfully added', key: 'product_add', duration: 2 })
            }
        })

    }

    return (
        <div>
            <Text fontSize='2xl'>Add a product</Text>

            <Formik initialValues={{
                title: 'Test',
                description: 'TestTest',
                price: '100',
                photos: []
            }}
                validationSchema={newProductScheme}
                onSubmit={handleSubmit}
            >
                {
                    ({ handleSubmit, errors, touched, handleChange, handleBlur, values, isSubmitting }) => {
                        return <>
                            <Box>
                                <Box my='5' textAlign='left'>
                                    <form onSubmit={handleSubmit}>
                                        <FormControl>
                                            <FormLabel>Title</FormLabel>
                                            <Input name='title'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.title}
                                                disabled={isSubmitting}
                                                isInvalid={touched.title && errors.title}
                                            />
                                            {
                                                touched.title && errors.title && (
                                                    <Text color='red.500' mt='2'>{errors.title}</Text>
                                                )
                                            }
                                        </FormControl>

                                        <FormControl mt='4'>
                                            <FormLabel>Description</FormLabel>
                                            <Textarea name='description'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.description}
                                                disabled={isSubmitting}
                                                isInvalid={touched.description && errors.description}
                                            />
                                            {
                                                touched.description && errors.description && (
                                                    <Text color='red.500' mt='2'>{errors.description}</Text>
                                                )
                                            }
                                        </FormControl>

                                        <FormControl mt='4'>
                                            <FormLabel>Price</FormLabel>
                                            <Input name='price'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.price}
                                                disabled={isSubmitting}
                                                isInvalid={touched.price && errors.price}
                                            />
                                            {
                                                touched.price && errors.price && (
                                                    <Text color='red.500' mt='2'>{errors.price}</Text>
                                                )
                                            }
                                        </FormControl>

                                        <FormControl mt='4'>
                                            <FormLabel>Photos</FormLabel>
                                            <FieldArray
                                                name='photos'
                                                render={(arrayHelpers) => {
                                                    return <div>
                                                        {values.photos && values.photos.map((photo, index) => {
                                                            return <Flex key={index} my='4'>
                                                                <Input
                                                                    name={`photos.${index}`}
                                                                    value={photo}
                                                                    disabled={isSubmitting}
                                                                    onChange={handleChange}
                                                                />

                                                                <Button
                                                                    disabled={isSubmitting}
                                                                    ml='5'
                                                                    type='button'
                                                                    colorScheme='red'
                                                                    variant='solid'
                                                                    onClick={() => arrayHelpers.remove(index)}
                                                                >
                                                                    Remove
                                                                </Button>
                                                            </Flex>
                                                        })}

                                                        <Button
                                                            type='button'
                                                            colorScheme='green'
                                                            mt='4'
                                                            variant='solid'
                                                            disabled={isSubmitting}
                                                            onClick={() => arrayHelpers.push('')}
                                                        >
                                                            Add a photo
                                                        </Button>

                                                    </div>
                                                }}
                                            >

                                            </FieldArray>
                                        </FormControl>

                                        <Button
                                            disabled={isSubmitting}
                                            type='submit'
                                            colorScheme='blue'
                                            width='full'
                                            mt='4'
                                        >
                                            Save
                                        </Button>
                                    </form>
                                </Box>
                            </Box>
                        </>
                    }
                }
            </Formik>
        </div>
    )
}

export default NewProduct