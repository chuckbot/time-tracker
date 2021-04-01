/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteProjectInput = {
  id?: string | null,
};

export type CreateTimeTrackInput = {
  id?: string | null,
  belongsTo?: string | null,
  description: string,
  amount?: number | null,
};

export type ModelTimeTrackConditionInput = {
  belongsTo?: ModelStringInput | null,
  description?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelTimeTrackConditionInput | null > | null,
  or?: Array< ModelTimeTrackConditionInput | null > | null,
  not?: ModelTimeTrackConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTimeTrackInput = {
  id: string,
  belongsTo?: string | null,
  description?: string | null,
  amount?: number | null,
};

export type DeleteTimeTrackInput = {
  id?: string | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTimeTrackFilterInput = {
  id?: ModelIDInput | null,
  belongsTo?: ModelStringInput | null,
  description?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelTimeTrackFilterInput | null > | null,
  or?: Array< ModelTimeTrackFilterInput | null > | null,
  not?: ModelTimeTrackFilterInput | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTimeTrackMutationVariables = {
  input: CreateTimeTrackInput,
  condition?: ModelTimeTrackConditionInput | null,
};

export type CreateTimeTrackMutation = {
  createTimeTrack:  {
    __typename: "TimeTrack",
    id: string,
    belongsTo: string | null,
    description: string,
    amount: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTimeTrackMutationVariables = {
  input: UpdateTimeTrackInput,
  condition?: ModelTimeTrackConditionInput | null,
};

export type UpdateTimeTrackMutation = {
  updateTimeTrack:  {
    __typename: "TimeTrack",
    id: string,
    belongsTo: string | null,
    description: string,
    amount: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTimeTrackMutationVariables = {
  input: DeleteTimeTrackInput,
  condition?: ModelTimeTrackConditionInput | null,
};

export type DeleteTimeTrackMutation = {
  deleteTimeTrack:  {
    __typename: "TimeTrack",
    id: string,
    belongsTo: string | null,
    description: string,
    amount: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      description: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTimeTrackQueryVariables = {
  id: string,
};

export type GetTimeTrackQuery = {
  getTimeTrack:  {
    __typename: "TimeTrack",
    id: string,
    belongsTo: string | null,
    description: string,
    amount: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTimeTracksQueryVariables = {
  filter?: ModelTimeTrackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTimeTracksQuery = {
  listTimeTracks:  {
    __typename: "ModelTimeTrackConnection",
    items:  Array< {
      __typename: "TimeTrack",
      id: string,
      belongsTo: string | null,
      description: string,
      amount: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTimeTrackSubscription = {
  onCreateTimeTrack:  {
    __typename: "TimeTrack",
    id: string,
    belongsTo: string | null,
    description: string,
    amount: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTimeTrackSubscription = {
  onUpdateTimeTrack:  {
    __typename: "TimeTrack",
    id: string,
    belongsTo: string | null,
    description: string,
    amount: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTimeTrackSubscription = {
  onDeleteTimeTrack:  {
    __typename: "TimeTrack",
    id: string,
    belongsTo: string | null,
    description: string,
    amount: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
