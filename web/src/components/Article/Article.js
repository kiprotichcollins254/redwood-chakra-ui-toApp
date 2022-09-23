import { Box } from "@chakra-ui/react"
import {Link, routes } from '@redwoodjs/router'

const Article = ({article}) => {
  return (
    <>

     <Box key={article.id} bg='grey' p={2} boxShadow='sm' rounded='md' >
       <Link to={routes.article({id:article.id})}>
        <Box >
            <h3>{article.title}</h3>
          </Box>
          <Box>
            <p>{article.body}</p>
          </Box>
          <Box >
            <p>{article.createdAt}</p>
          </Box>
        </Link>
      </Box>

    </>
  )
}

export default Article
