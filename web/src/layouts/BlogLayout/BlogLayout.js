import { Link, routes } from '@redwoodjs/router'
import { Container } from '@chakra-ui/react'
const BlogLayout = ({ children }) => {
  return (<>
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
        </ul>
      </nav>
    </header>
    <main>

      <Container>
       {children}
      </Container>
    </main>
</>
)
}

export default BlogLayout
