import React, { useMemo } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { fetchProductList, deleteProduct } from '../../../api'
import { Table, Popconfirm } from 'antd'
import { Link } from 'react-router-dom'
import { Text, Button , Flex} from '@chakra-ui/react'

function Products() {

  const queryClient = useQueryClient()

  const { isLoading, isError, data } = useQuery('admin:products', fetchProductList)

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries('admin:products')
  })

  const columns = useMemo(() => {
    return [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Created at',
        dataIndex: 'createdAt',
        key: 'createdAt',
      },
      {
        title: 'Action',
        dataIndex: 'action',
        render: (text, record) => {
          return <>
            <Link to={`/admin/products/${record._id}`}>Edit</Link>
            <Popconfirm
              title="Are you sure ?"
              onConfirm={() => deleteMutation.mutate(record._id)}
              onCancel={() => alert('Iptal edildi')}
              okText="Yes"
              cancelText="No"
              placement='left'
            >
              <a href='/#' style={{ marginLeft: 10 }}>Delete</a>
            </Popconfirm>

          </>
        }
      }
    ]
  }, [])

  if (isLoading) return 'Loading...'

  if (isError) return 'An error has occurred: ' + isError.message

  return (
    <div>
      <Flex justifyContent='space-between' mb='5'>
        <Text fontSize='2xl'>Products</Text>
        <Link to='new'>
        <Button colorScheme='blue'>Add a product</Button>
        </Link>
      </Flex>

      <Table dataSource={data} columns={columns} rowKey='_id' />;
    </div>
  )
}

export default Products