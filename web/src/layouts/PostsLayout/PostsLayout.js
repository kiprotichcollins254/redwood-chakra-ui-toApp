import { Button } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import {AddIcon} from '@chakra-ui/icons'

const PostsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.posts()} className="rw-link">
            Posts
          </Link>
        </h1>
        <Link to={routes.newPost()} >
          <Button rightIcon={<AddIcon />} colorScheme='blue' variant='outline'>New Post</Button>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default PostsLayout
