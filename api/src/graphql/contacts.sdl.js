export const schema = gql`
  type Contact {
    id: Int!
    first_name: String!
    last_name: String!
    email: String!
    message: String!
    sentAt: DateTime!
  }

  type Query {
    contacts: [Contact!]! @requireAuth
    contact(id: Int!): Contact @requireAuth
  }

  input CreateContactInput {
    first_name: String!
    last_name: String!
    email: String!
    message: String!
    # sentAt: DateTime!
  }

  input UpdateContactInput {
    first_name: String
    last_name: String
    email: String
    message: String
    # sentAt: DateTime
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @requireAuth
    updateContact(id: Int!, input: UpdateContactInput!): Contact! @requireAuth
    deleteContact(id: Int!): Contact! @requireAuth
  }
`
