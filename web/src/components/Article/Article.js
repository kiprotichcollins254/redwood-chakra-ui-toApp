import { Box ,Text} from "@chakra-ui/react"
import {Link, routes } from '@redwoodjs/router'

const Article = ({article}) => {
  return (
    <>

     <Box key={article.id} bg="white" p={2} boxShadow='md' rounded='md' >

        <Box >
        <Link to={routes.article({id:article.id})}><Text fontSize="2xl" textDecoration="underline" textAlign="center" textTransform="capitalize">{article.title}</Text></Link>
          </Box>
          <Box>
            <p>{article.body}</p>
          </Box>
          <Box >
            <p>{article.createdAt}</p>
          </Box>

      </Box>

    </>
  )
}

export default Article
