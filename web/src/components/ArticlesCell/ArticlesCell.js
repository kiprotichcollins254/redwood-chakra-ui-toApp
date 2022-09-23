import { Box, Center, SimpleGrid } from "@chakra-ui/react"

export const QUERY = gql`
  query ArticlesQuery {
     articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <>
    <SimpleGrid  minChildWidth='120px' spacingX='40px' spacingY='20px' mx="12">
      {articles.map((article) => (

          <Box key={article.id} bg='grey' p={2} boxShadow='sm' rounded='md'>
            <Box >
                <h3>{article.title}</h3>
              </Box>
              <Box>
                <p>{article.body}</p>
              </Box>
              <Box >
                <p>{article.createdAt}</p>
              </Box>
          </Box>
      ))}
    </SimpleGrid>
    </>
  )
}
