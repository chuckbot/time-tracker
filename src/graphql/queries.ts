/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTimeTrack = /* GraphQL */ `
  query GetTimeTrack($id: ID!) {
    getTimeTrack(id: $id) {
      id
      belongsTo
      description
      amount
      createdAt
      updatedAt
    }
  }
`;
export const listTimeTracks = /* GraphQL */ `
  query ListTimeTracks(
    $filter: ModelTimeTrackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeTracks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        belongsTo
        description
        amount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
