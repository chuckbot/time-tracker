/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createTimeTrack = /* GraphQL */ `
  mutation CreateTimeTrack(
    $input: CreateTimeTrackInput!
    $condition: ModelTimeTrackConditionInput
  ) {
    createTimeTrack(input: $input, condition: $condition) {
      id
      belongsTo
      description
      amount
      createdAt
      updatedAt
    }
  }
`;
export const updateTimeTrack = /* GraphQL */ `
  mutation UpdateTimeTrack(
    $input: UpdateTimeTrackInput!
    $condition: ModelTimeTrackConditionInput
  ) {
    updateTimeTrack(input: $input, condition: $condition) {
      id
      belongsTo
      description
      amount
      createdAt
      updatedAt
    }
  }
`;
export const deleteTimeTrack = /* GraphQL */ `
  mutation DeleteTimeTrack(
    $input: DeleteTimeTrackInput!
    $condition: ModelTimeTrackConditionInput
  ) {
    deleteTimeTrack(input: $input, condition: $condition) {
      id
      belongsTo
      description
      amount
      createdAt
      updatedAt
    }
  }
`;
