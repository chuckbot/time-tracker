import { API, graphqlOperation } from 'aws-amplify'
import { createTimeTrack, deleteTimeTrack } from '../../graphql/mutations'

import { TimeStruct } from '../Form/models'
import { listTimeTracks } from '../../graphql/queries'

export const createTime = async (inputData: TimeStruct) => {
  return await API.graphql(graphqlOperation(createTimeTrack, {
    input: inputData
  }))
}

export const getTimes = async (id: string) => {
  return await API.graphql(graphqlOperation(listTimeTracks, {
    filter: {
      belongsTo: {
        eq: id
      }
    }
  }))
}

export const deleteTime = async (id: string) => {
  return await API.graphql(graphqlOperation(deleteTimeTrack, {
    input: {
      id
    }
  }))
}