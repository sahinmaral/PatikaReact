import React from 'react'
import { Link } from "react-router-dom";
import styles from './styles.module.css'
import { Button, HStack } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext';
import { useBasket } from '../../contexts/BasketContext'

function Navbar() {

  const { loggedIn, user } = useAuth()
  const { items } = useBasket()

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to='/' className={styles.logo}>eCommerce</Link>
        </div>

        <ul className={styles.menu}>
          <li>
            <Link to='/'>Products</Link>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        {!loggedIn && (
          <HStack>
            <Link to='/signup'>
              <Button colorScheme='pink' size='sm'>
                Register
              </Button>
            </Link>

            <Link to='/signin'>
              <Button colorScheme='pink' size='sm'>
                Login
              </Button>
            </Link>
          </HStack>
        )

        }

        {loggedIn && (
          <HStack>

            {
              items.length > 0 && (
                <Link to='/basket'>
                  <Button colorScheme='pink' size='sm'>
                    Basket ({items.length})
                  </Button>
                </Link>
              )
            }

            {
              user.role === 'admin' && (
                <Link to='/admin'>
                  <Button colorScheme='pink' size='sm' variant='ghost'>
                    Admin
                  </Button>
                </Link>
              )
            }

            <Link to='/profile'>
              <Button colorScheme='pink' size='sm'>
                Profile
              </Button>
            </Link>

          </HStack>
        )

        }
      </div>

    </nav >
  )
}

export default Navbar