/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTimeTrack = /* GraphQL */ `
  subscription OnCreateTimeTrack {
    onCreateTimeTrack {
      id
      belongsTo
      description
      amount
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTimeTrack = /* GraphQL */ `
  subscription OnUpdateTimeTrack {
    onUpdateTimeTrack {
      id
      belongsTo
      description
      amount
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTimeTrack = /* GraphQL */ `
  subscription OnDeleteTimeTrack {
    onDeleteTimeTrack {
      id
      belongsTo
      description
      amount
      createdAt
      updatedAt
    }
  }
`;
