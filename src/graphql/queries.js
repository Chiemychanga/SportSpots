/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGym = /* GraphQL */ `
  query GetGym($id: ID!) {
    getGym(id: $id) {
      id
      clientId
      sport
      name
      time
      comments {
        nextToken
      }
    }
  }
`;
export const listGyms = /* GraphQL */ `
  query ListGyms(
    $filter: ModelGymFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGyms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId
        sport
        name
        time
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      message
      createdBy
      gym {
        id
        clientId
        sport
        name
        time
      }
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        createdBy
      }
      nextToken
    }
  }
`;
