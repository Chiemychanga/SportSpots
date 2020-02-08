/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGym = /* GraphQL */ `
  mutation CreateGym(
    $input: CreateGymInput!
    $condition: ModelGymConditionInput
  ) {
    createGym(input: $input, condition: $condition) {
      id
      clientId
      sport
      name
      time
    }
  }
`;
export const updateGym = /* GraphQL */ `
  mutation UpdateGym(
    $input: UpdateGymInput!
    $condition: ModelGymConditionInput
  ) {
    updateGym(input: $input, condition: $condition) {
      id
      clientId
      sport
      name
      time
    }
  }
`;
export const deleteGym = /* GraphQL */ `
  mutation DeleteGym(
    $input: DeleteGymInput!
    $condition: ModelGymConditionInput
  ) {
    deleteGym(input: $input, condition: $condition) {
      id
      clientId
      sport
      name
      time
    }
  }
`;
