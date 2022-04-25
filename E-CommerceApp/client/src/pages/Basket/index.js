import React, { useRef, useState } from 'react'
import { useBasket } from '../../contexts/BasketContext'
import {
    Alert,
    Image,
    Button,
    Box,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    FormLabel,
    FormControl,
    ModalCloseButton,
    ModalFooter,
    useDisclosure,
    Textarea
} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { postOrder } from '../../api';

function Basket() {

    const initialRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { items, removeFromBasket, emptyBasket } = useBasket()

    const total = items.reduce((acc, obj) => acc + obj.price, 0)

    const [address, setAddress] = useState('');

    const handleSubmitForm = async (event) => {
        event.preventDefault()

        const itemIds = items.map((item) => {
            return item._id
        })

        const input = {
            address,
            items: JSON.stringify(itemIds)
        }

        await postOrder(input)

        emptyBasket()
        onClose()
    }

    return (
        <Box p='5'>
            {
                items.length < 1 && <Alert status='warning'>You have not any items in your basket</Alert>
            }
            {
                items.length > 0 && (
                    <>
                        <ul>
                            {items.map((item) => {
                                return <li key={item._id} style={{ marginBottom: 40 }}>
                                    <Link to={`/product/${item._id}`}>
                                        {item.title} - {item.price} TL
                                    </Link>
                                    <Image mt='5'
                                        loading='lazy'
                                        htmlWidth={200}
                                        src={item.photos[0]} alt='Basket item' />
                                    <Button
                                        onClick={() => removeFromBasket(item._id)}
                                        mt='4'
                                        size='sm'
                                        colorScheme='pink'>Remove from basket</Button>
                                </li>
                            })}
                        </ul>

                        <Box mt='10'>
                            <Text fontSize='22'>Total : {total} TL </Text>
                        </Box>

                        <Button
                            onClick={onOpen}
                            mt='2' size='sm'
                            colorScheme='green'
                        >Order</Button>

                        <Modal
                            initialFocusRef={initialRef}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Order</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel>Address</FormLabel>
                                        <Textarea
                                            ref={initialRef}
                                            placeholder='Address'
                                            value={address}
                                            onChange={(event) => setAddress(event.target.value)} />
                                    </FormControl>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={handleSubmitForm}>
                                        Save
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>
                )
            }


        </Box>
    )
}

export default Basket