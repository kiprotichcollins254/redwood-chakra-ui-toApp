import { Center, Grid, GridItem, Text } from '@chakra-ui/react'

import {
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
  FieldError,
  FormError,
  useForm,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for contacting us')
      formMethods.reset()
    },
  })
  const onSubmit = (data) => {
    console.log(data)
    create({ variables: { input: data } })
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Text textAlign={'Center'} fontSize="3xl">
        Contact Us
      </Text>
      <Toaster />
      <Center width="100%">
        <Form
          onSubmit={onSubmit}
          config={{ mode: 'onBlur' }}
          error={error}
          formMethods={formMethods}
        >
          <FormError error={error} wrapperClassName="form-error" />
          <Grid templateColumns="repeat(2, 1fr)" mb="20px" gap={2}>
            <GridItem width="100%">
              <Label
                name="First Name"
                className="label"
                errorClassName="error"
              />
              <TextField
                name="first_name"
                placeholder="Enter your first Name"
                validation={{
                  required: true,
                }}
                errorClassName="error"
              />
              <FieldError name="first_name" className="error-message" />
            </GridItem>
            <GridItem width="100%">
              <Label
                name="Last Name"
                className="label"
                errorClassName="error"
              />
              <TextField
                name="last_name"
                placeholder="Enter your Last Name"
                validation={{
                  required: true,
                }}
                errorClassName="error"
              />
              <FieldError name="last_name" className="error-message" />
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(1, 1fr)" mb="20px" gap={1}>
            <Label
              name="Email"
              className="label"
              errorClassName="input label"
            />
            <GridItem width="100%">
              <TextField
                name="email"
                type="email"
                placeholder="Enter your Email"
                errorClassName="input error"
              />
              {/* <FieldError name='email' /> */}
            </GridItem>
            <FieldError name="email" className="error-message" />
          </Grid>
          <Grid templateColumns="repeat(1, 1fr)" mb="20px" gap={1}>
            <Label
              name="Message"
              className="label"
              errorClassName="label error"
            />
            <GridItem width="100%">
              <TextAreaField
                name="message"
                className="input"
                errorClassName="input error"
                validation={{ required: true }}
              />
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(1, 1fr)" gap={1}>
            <GridItem width="100%">
              <Submit className="button" disabled={loading}>
                Send Message
              </Submit>
            </GridItem>
          </Grid>
        </Form>
      </Center>
    </>
  )
}

export default ContactPage
