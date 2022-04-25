import React from 'react'
import Card from '../../components/Card'
import { Grid , Flex} from '@chakra-ui/react'
import { useInfiniteQuery } from 'react-query'
import { fetchProductList } from '../../api'

function Products() {

    const { data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status, } = useInfiniteQuery('products', fetchProductList, {
            getNextPageParam: (lastGroup, allGroups) => {
                const morePagesExist = lastGroup?.length === 12

                if(!morePagesExist) return

                return allGroups.length + 1
            }
        })

    if (status === 'loading') return 'Loading...'

    if (status === 'error') return 'An error has occurred: ' + error.message

    return (
        <div>
            <Grid templateColumns='repeat(3, 1fr)' gap={0}>
                {/* {
                    data.map((product) => {
                        return <Card key={product._id} data={product} />
                    })
                } */}

                {data.pages.map((group, i) => (
                    <React.Fragment key={i}>
                        {group.map(product => (
                            <Card key={product._id} data={product} />
                        ))}
                    </React.Fragment>
                ))}
            </Grid>

            <Flex mt='10' justifyContent='center'>
                <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                            ? 'Load More'
                            : 'Nothing more to load'}
                </button>
            </Flex>
            <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>

        </div>
    )
}

export default Products