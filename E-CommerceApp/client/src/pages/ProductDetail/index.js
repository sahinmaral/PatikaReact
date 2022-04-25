import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import { fetchProductById } from '../../api'
import { Button, Box, Text } from '@chakra-ui/react'
import moment from 'moment'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { useBasket } from '../../contexts/BasketContext'

function ProductDetail() {

    const { product_id } = useParams()
    const { addToBasket, items } = useBasket()

    const { isLoading, error, data } = useQuery(['product', product_id], () => fetchProductById(product_id))

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const images = data.photos.map((photo) => {
        return {
            "original": photo
        }
    })

    const findBasketItem = items.find((item)=> item._id === product_id)

    return (
        <div>
            <Button colorScheme={findBasketItem ? 'pink' : 'green'} onClick={() => addToBasket(data,findBasketItem)}>
                {
                    findBasketItem ? 'Remove from basket' : 'Add to basket'
                }</Button>

            <Text as='h2' fontSize='2xl'>{data.title}</Text>
            <Text>{moment(data.createdAt).format('DD/MM/YYYY')}</Text>
            <p>{data.description}</p>

            <Box>
                <ImageGallery items={images} showThumbnails={false} />
            </Box>
        </div>
    )
}

export default ProductDetail