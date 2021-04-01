import { API, graphqlOperation } from 'aws-amplify'

import { listProjects } from '../../graphql/queries'

export const getAllProjects = async () => {
  return await API.graphql(graphqlOperation(listProjects))
}