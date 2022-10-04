// import { Container } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
const BlogLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <div className="bg-blue-900 min-h-screen ">
      <header>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>

            <li>
              <Link to={routes.posts()}>Articles</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact Us</Link>
            </li>
            {isAuthenticated ? (
              <div>
                <li>{currentUser.email}</li>
                <li>
                  <Button onClick={logOut}>Log Out</Button>
                </li>
              </div>
            ) : (
              <li>
                <Link to={routes.login()}>Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main >
        {/* <Container maxW='container.sm'> */}
        {children}
        {/* </Container> */}
      </main>
    </div>
  )
}

export default BlogLayout
