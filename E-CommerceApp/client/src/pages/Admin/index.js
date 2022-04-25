import React from 'react'
import styles from './styles.module.css'
import { Link, Route, Routes, useMatch } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Home from './Home'
import Products from './Products'
import ProductDetail from './ProductDetail'
import Orders from './Orders'
import Error404 from '../Error404'
import NewProduct from './Products/newProduct'

function Admin() {

  const match = useMatch('/admin/*');

  return (
    <div>

      <nav>
        <ul className={styles.adminMenu}>
          <li><Link to={match.pathnameBase}>Home</Link></li>
          <li><Link to={`${match.pathnameBase}/orders`}>Orders</Link></li>
          <li><Link to={`${match.pathnameBase}/products`}>Products</Link></li>
        </ul>
      </nav>

      <Box mt='10'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/new' element={<NewProduct />} />
          <Route path='/products/:product_id' element={<ProductDetail />} />
          <Route path='/*' element={<Error404 />} />

        </Routes>
      </Box>

    </div>
  )
}

export default Admin