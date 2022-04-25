import React from 'react'
import { Box, Image, Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import moment from 'moment';
import { useBasket } from '../../contexts/BasketContext'

function Card({ data }) {

    const { addToBasket, items } = useBasket()

    const findBasketItem = items.find((item) => item._id === data._id)

    return (
        <Box borderWidth='1px' borderRadius='lg' overflow='hidden' p='3'>
            <Link to={`/product/${data._id}`}>
                <Image src={data.photos[0]}
                    alt='image' loading='lazy' width='400px' height='300px' />

                <Box p='6'>
                    <Box d='flex' alignItems='baseline'>
                        {moment(data.createdAt).format('DD/MM/YYYY')}
                    </Box>
                    <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
                        {data.title}
                    </Box>
                    <Box>
                        {data.price} TL
                    </Box>
                </Box>
            </Link>

            <Button colorScheme={findBasketItem ? 'pink' : 'green'} onClick={() => addToBasket(data, findBasketItem)}>
                {
                    findBasketItem ? 'Remove from basket' : 'Add to basket'
                }</Button>
        </Box>
    )
}

export default Card