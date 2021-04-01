import { API, graphqlOperation } from 'aws-amplify'
import { createProject as cp, updateProject as up } from '../../graphql/mutations'

import { ProjectStruct } from './models'

export const createProject = async (creationData: ProjectStruct) => {
  return await API.graphql(graphqlOperation(cp, {
    input: creationData
  }))
}

export const updateProject = async (creationData: ProjectStruct) => {
  return await API.graphql(graphqlOperation(up, {
    input: creationData
  }))
}