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
