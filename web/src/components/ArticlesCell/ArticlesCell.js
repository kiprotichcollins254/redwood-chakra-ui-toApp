import { Box, SimpleGrid } from "@chakra-ui/react"
import {Link, routes } from '@redwoodjs/router'
import Article from "src/components/Article"

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
    <SimpleGrid  minChildWidth='120px'  bg='gray.50' p="10" spacingX='40px' spacingY='20px' mx="12">
      {articles.map((article) => (

         <Article article={article} />
      ))}
    </SimpleGrid>
    </>
  )
}
