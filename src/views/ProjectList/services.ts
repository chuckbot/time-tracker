import { API, graphqlOperation } from 'aws-amplify'

import { deleteProject as dp } from '../../graphql/mutations'

export const deleteProject = async (deleteInput: {id: string}) => {
  return await API.graphql(graphqlOperation(dp, {
    input: deleteInput
  }))
}