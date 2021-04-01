export interface IFormInput {
  name: string
  description: string
}

export interface ProjectStruct {
  id?: string
  createdAt?: string
  updatedAt?: string
  name: string
  description: string
  returnToList?: () => void
  refetchProjects?: () => void
}

export interface TimeStruct {
  id?: string
  belongsTo: string
  amount: number
  description: string
}