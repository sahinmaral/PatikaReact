import React from 'react'
import { useParams } from 'react-router'
import { fetchProductById, updateProduct } from '../../../api'
import { useQuery } from 'react-query'
import { Formik, FieldArray } from 'formik'
import editScheme from './validations'
import { message } from 'antd';
import { Text, Box, FormControl, FormLabel, Input, Textarea, Button, Flex } from '@chakra-ui/react'

function ProductDetail() {

    const { product_id } = useParams()

    const { isLoading, error, data } = useQuery(['admin:product', product_id], () => fetchProductById(product_id))

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const handleSubmit = async (values, bag) => {
        message.loading({ content: 'Loading...', key: 'product_update' })

        try {
            await updateProduct(values,product_id)

            message.success({ content: 'Product successfully updated', key: 'product_update', duration: 2 })
        } catch (error) {
            message.error({ content: 'Product could not updated', key: 'product_update' })
        }
    }

    return (
        <div>
            <Text fontSize='2xl'>Edit</Text>

            <Formik initialValues={{
                title: data.title,
                description: data.description,
                price: data.price,
                photos: data.photos
            }}
                validationSchema={editScheme}
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
                                            Update
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

export default ProductDetail