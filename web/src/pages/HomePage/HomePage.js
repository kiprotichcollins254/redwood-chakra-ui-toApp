
import { Center, Container ,Text} from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

         <Text textAlign="center" fontSize="2em" fontWeight="bold">Blogs and Articles</Text>
         <ArticlesCell />
    </>
  )
}

export default HomePage
