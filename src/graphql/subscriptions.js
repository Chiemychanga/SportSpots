/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGym = /* GraphQL */ `
  subscription OnCreateGym {
    onCreateGym {
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
export const onUpdateGym = /* GraphQL */ `
  subscription OnUpdateGym {
    onUpdateGym {
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
export const onDeleteGym = /* GraphQL */ `
  subscription OnDeleteGym {
    onDeleteGym {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($createdBy: String!) {
    onCreateComment(createdBy: $createdBy) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($createdBy: String!) {
    onUpdateComment(createdBy: $createdBy) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($createdBy: String!) {
    onDeleteComment(createdBy: $createdBy) {
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
