import React from 'react'
import { fetchOrders } from '../../../api'
import { useQuery } from 'react-query'
import { Table, Thead, Tbody, Tr, Th, Td, Text, TableContainer } from '@chakra-ui/react'

function Orders() {

  const { isLoading, isError, data } = useQuery('admin:orders', fetchOrders)

  if (isLoading) return 'Loading...'

  if (isError) return 'An error has occurred: ' + isError.message

  return (
    <div>
      <Text fontSize='2xl' p='5'>Orders</Text>

      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <Thead>
            <Tr>
              <Th>User</Th>
              <Th>Address</Th>
              <Th isNumeric>Items</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              data.map((item) => {
                return (
                  <Tr key={item._id}>
                    <Td>{item.user.email}</Td>
                    <Td>{item.adress}</Td>
                    <Td isNumeric>{item.items.length}</Td>
                  </Tr>
                )
              })
            }
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Orders