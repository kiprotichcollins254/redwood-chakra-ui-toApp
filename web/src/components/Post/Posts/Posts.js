import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Post/PostsCell'
import { Stack, Table, TableCaption, TableContainer, Tbody, Td, Th,Tr, Thead ,Button} from '@chakra-ui/react'
import { EditIcon ,DeleteIcon,ViewIcon} from '@chakra-ui/icons'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (value) => {
  const output = value?.toString()
  if (output?.length > MAX_STRING_LENGTH) {
    return output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output ?? ''
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const PostsList = ({ posts }) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
    }
  }

  return (
    <div className="">
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>All Articles Created</TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Body</Th>
              <Th>Created At</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
          {posts.map((post) => (
            <Tr key={post.id}>
              <Td>{truncate(post.title)}</Td>
              <Td>{truncate(post.body)}</Td>
              <Td>{truncate(post.createdAt)}</Td>
              <Td>
                <Stack direction='row' spacing={2}>
                  <Link
                    to={routes.post({ id: post.id })}
                    title={'Show post ' + post.id + ' detail'}
                    >
                    <Button rightIcon={<ViewIcon />} colorScheme='grey' variant='outline'>
                      View
                    </Button>
                  </Link>
                  <Link
                    to={routes.editPost({ id: post.id })}
                    title={'Edit post ' + post.id}
                    >
                      <Button rightIcon={<EditIcon />} colorScheme='blue' variant='outline'>
                        Edit
                      </Button>
                  </Link>

                  <Button leftIcon={<DeleteIcon />} colorScheme='pink' variant='solid'
                   title={'Delete post ' + post.id}
                   onClick={() => onDeleteClick(post.id)}
                   >
                    Delete
                  </Button>
                </Stack>
              </Td>
            </Tr>
          ))}
          </Tbody>
        </Table>

      </TableContainer>
    </div>

  )
}

export default PostsList
